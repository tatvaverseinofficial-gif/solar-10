/**
 * Mock Supabase client for ADMIN edit mode (DEMO=false).
 * Swap this for @supabase/supabase-js once credentials are available.
 */

export type MockResult<T = unknown> = {
  data: T | null;
  error: { message: string } | null;
  status: "mock";
};

type Row = Record<string, unknown>;

const store: Record<string, Row[]> = {};

function ensureTable(table: string) {
  if (!store[table]) store[table] = [];
  return store[table];
}

function delay(ms = 350) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export type MockSupabaseClient = ReturnType<typeof createMockSupabaseClient>;

export function createMockSupabaseClient() {
  return {
    /** Indicates this is the local mock, not a live project */
    isMock: true as const,

    from(table: string) {
      return {
        async select(_columns = "*"): Promise<MockResult<Row[]>> {
          void _columns;
          await delay();
          return { data: [...ensureTable(table)], error: null, status: "mock" };
        },

        async insert(payload: Row | Row[]): Promise<MockResult<Row[]>> {
          await delay();
          const rows = Array.isArray(payload) ? payload : [payload];
          const withIds = rows.map((row) => ({
            id: String(row.id ?? crypto.randomUUID()),
            ...row,
            updated_at: new Date().toISOString(),
          }));
          ensureTable(table).push(...withIds);
          return { data: withIds, error: null, status: "mock" };
        },

        async update(payload: Row): Promise<MockResult<Row>> {
          await delay();
          const list = ensureTable(table);
          const id = payload.id;
          const index = list.findIndex((row) => row.id === id);
          if (index === -1) {
            return {
              data: null,
              error: { message: `Mock Supabase: no row with id ${String(id)} in ${table}` },
              status: "mock",
            };
          }
          list[index] = {
            ...list[index],
            ...payload,
            updated_at: new Date().toISOString(),
          };
          return { data: list[index], error: null, status: "mock" };
        },

        async delete(id: string): Promise<MockResult<null>> {
          await delay();
          const list = ensureTable(table);
          const next = list.filter((row) => row.id !== id);
          store[table] = next;
          return { data: null, error: null, status: "mock" };
        },

        async upsert(payload: Row | Row[]): Promise<MockResult<Row[]>> {
          await delay();
          const rows = Array.isArray(payload) ? payload : [payload];
          const list = ensureTable(table);
          const saved: Row[] = [];
          for (const row of rows) {
            const index = list.findIndex((r) => r.id === row.id);
            const next = {
              ...row,
              id: String(row.id ?? crypto.randomUUID()),
              updated_at: new Date().toISOString(),
            };
            if (index >= 0) list[index] = { ...list[index], ...next };
            else list.push(next);
            saved.push(next);
          }
          return { data: saved, error: null, status: "mock" };
        },
      };
    },

    storage: {
      from(_bucket: string) {
        return {
          async upload(path: string, file: unknown): Promise<MockResult<{ path: string }>> {
            void file;
            await delay();
            return {
              data: { path: `mock://${_bucket}/${path}` },
              error: null,
              status: "mock",
            };
          },
        };
      },
    },
  };
}

let client: MockSupabaseClient | null = null;

/**
 * Returns the mock Supabase client used when DEMO=false.
 * Replace with createBrowserClient / createServerClient when wiring a real project.
 */
export function getSupabaseClient(): MockSupabaseClient {
  if (!client) client = createMockSupabaseClient();
  return client;
}

export function getSupabaseConfigStatus() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  return {
    configured: Boolean(url && anon),
    usingMock: true,
    url: url ?? null,
  };
}
