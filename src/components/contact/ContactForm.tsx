"use client";

import { useState } from "react";
import { Clock, Mail, MapPin, Phone, CheckCircle2 } from "lucide-react";
import { company } from "@/data/company";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/components/shared/SocialIcons";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  }

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-[1.75rem] border border-solar-line bg-white p-10 text-center shadow-[var(--shadow-md)]">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-solar-green-soft">
          <CheckCircle2 className="h-8 w-8 text-solar-green" />
        </span>
        <h3 className="mt-4 font-display text-2xl font-bold text-solar-navy">
          Enquiry received
        </h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          This is a demo form — no backend yet. In production, this would create a
          lead in your CRM or Supabase table. We’ll call you back on working days.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setSubmitted(false)}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[1.75rem] border border-solar-line bg-white p-6 shadow-[var(--shadow-md)] md:p-9"
    >
      <h2 className="font-display text-2xl font-bold text-solar-navy">
        Request a free consultation
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Share your bill and city. We typically respond within one business day.
      </p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" required className="mt-2" placeholder="Your name" />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            className="mt-2"
            placeholder="+91"
          />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2"
            placeholder="you@company.com"
          />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="property">Property type</Label>
          <select
            id="property"
            name="property"
            required
            className="input-premium mt-2 flex h-12 w-full rounded-2xl border border-input bg-white px-4 text-sm shadow-[var(--shadow-xs)]"
            defaultValue=""
          >
            <option value="" disabled>
              Select type
            </option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="industrial">Industrial</option>
            <option value="institutional">School / Hospital / Campus</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            required
            className="mt-2"
            placeholder="Monthly bill, city, and roof details help us prepare faster…"
          />
        </div>
      </div>
      <Button type="submit" variant="accent" className="mt-6 w-full sm:w-auto" disabled={loading}>
        {loading ? "Sending…" : "Submit enquiry"}
      </Button>
    </form>
  );
}

export function ContactDetails() {
  return (
    <div className="space-y-8">
      <div className="rounded-[1.75rem] border border-solar-line bg-white p-7 shadow-[var(--shadow-sm)] md:p-8">
        <h2 className="font-display text-2xl font-bold text-solar-navy">
          Visit or call us
        </h2>
        <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
          <li className="flex gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-solar-cream text-solar-navy">
              <MapPin className="h-4 w-4" />
            </span>
            <span className="pt-1.5">{company.fullAddress}</span>
          </li>
          <li className="flex gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-solar-cream text-solar-navy">
              <Phone className="h-4 w-4" />
            </span>
            <a href={`tel:${company.phoneRaw}`} className="pt-2 transition hover:text-solar-navy">
              {company.phone}
            </a>
          </li>
          <li className="flex gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-solar-cream text-solar-navy">
              <Mail className="h-4 w-4" />
            </span>
            <a href={`mailto:${company.email}`} className="pt-2 transition hover:text-solar-navy">
              {company.email}
            </a>
          </li>
          <li className="flex gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-solar-cream text-solar-navy">
              <Clock className="h-4 w-4" />
            </span>
            <span className="pt-1.5">
              {company.hours.weekdays}
              <br />
              {company.hours.sunday}
            </span>
          </li>
        </ul>

        <p className="mt-8 text-sm font-semibold text-solar-navy">Follow us</p>
        <div className="mt-3 flex gap-2.5">
          {[
            { href: company.social.facebook, Icon: FacebookIcon, label: "Facebook" },
            { href: company.social.instagram, Icon: InstagramIcon, label: "Instagram" },
            { href: company.social.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
            { href: company.social.youtube, Icon: YoutubeIcon, label: "YouTube" },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-2xl bg-solar-mist text-solar-navy transition hover:-translate-y-0.5 hover:bg-solar-yellow"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <div className="overflow-hidden rounded-[1.75rem] border border-solar-line bg-gradient-to-br from-solar-mist to-solar-green-soft shadow-[var(--shadow-sm)]">
        <div className="flex aspect-[16/11] flex-col items-center justify-center p-6 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-[var(--shadow-sm)]">
            <MapPin className="h-6 w-6 text-solar-yellow" />
          </span>
          <p className="mt-4 font-display text-lg font-bold text-solar-navy">
            Map placeholder
          </p>
          <p className="mt-1 max-w-xs text-sm text-muted-foreground">
            Embed your Google Maps location here for production. Office at Baner, Pune.
          </p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.fullAddress)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-sm font-semibold text-solar-blue hover:underline"
          >
            Open in Google Maps →
          </a>
        </div>
      </div>
    </div>
  );
}
