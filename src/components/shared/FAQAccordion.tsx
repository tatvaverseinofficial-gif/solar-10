"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { FAQ } from "@/types";

export function FAQAccordion({ items }: { items: FAQ[] | { question: string; answer: string; id?: string }[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, index) => (
        <AccordionItem key={"id" in item && item.id ? item.id : `faq-${index}`} value={`item-${index}`}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
