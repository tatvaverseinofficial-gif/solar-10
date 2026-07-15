import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-8xl font-bold text-solar-yellow">404</p>
      <h1 className="mt-4 font-display text-3xl font-bold text-solar-navy md:text-4xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        The page you’re looking for doesn’t exist or has moved. Let’s get you back
        to generating savings.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild variant="accent">
          <Link href="/">Back to Home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
