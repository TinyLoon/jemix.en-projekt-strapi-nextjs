// lib/submitContactForm.ts

import type { ContactFormData } from "@/components/Shared/ContactForm";

export async function submitContactForm(data: ContactFormData): Promise<void> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact-forms`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
    body: JSON.stringify({ data }),
  });

  if (!res.ok) {
    const error = await res.text();
    console.error("❌ Fehler beim Senden:", error);
    throw new Error("Fehler beim Senden des Kontaktformulars");
  }
}