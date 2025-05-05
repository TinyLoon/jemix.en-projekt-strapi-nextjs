import { ContactFormData } from "@/component/Shared/ContactForm";
import { baseURL } from "@/lib/config"; // falls vorhanden, sonst wie bei dir lassen

export const submitContactForm = async (data: ContactFormData) => {
  const response = await fetch(`${baseURL}/contact-requests`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }), // Strapi-kompatibel
  });

  if (!response.ok) {
    throw new Error("Fehler beim Absenden des Kontaktformulars");
  }

  return await response.json();
};
