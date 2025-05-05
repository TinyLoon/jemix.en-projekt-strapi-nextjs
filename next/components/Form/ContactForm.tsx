"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { submitContactForm } from "@/lib/submitContactForm";
import { useContactFormContent } from "@/hooks/useContactFormContent";

const ContactSchema = z.object({
  name: z.string().min(2, "Name ist erforderlich"),
  business: z.string().min(2, "Firma ist erforderlich"),
  phoneNumber: z.string().min(5, "Telefonnummer ist erforderlich"),
  email: z.string().email("Bitte gültige E-Mail angeben"),
  news: z.string().optional(),
});

export type ContactFormData = z.infer<typeof ContactSchema>;

export const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema),
  });

  const { data: cms } = useContactFormContent();

  const onSubmit = async (data: ContactFormData) => {
    setSuccess(false);
    setErrorMsg("");
    try {
      await submitContactForm(data);
      setSuccess(true);
      reset();
    } catch (err) {
      setErrorMsg("Etwas ist schiefgelaufen. Bitte versuche es erneut.");
    }
  };

  return (
    <section className="bg-gray-100 border-t border-b border-gray-300 py-16 px-4">
      <h2 className="text-3xl text-center font-semibold mb-8">
        {cms?.title ?? "Kontakt aufnehmen"}
      </h2>

      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        {success && (
          <div className="mb-4 rounded bg-green-100 p-4 text-green-800">
            {cms?.successMessage ?? "Vielen Dank! Nachricht erfolgreich übermittelt."}
          </div>
        )}
        {errorMsg && (
          <div className="mb-4 rounded bg-red-100 p-4 text-red-800">
            {cms?.errorMessage ?? "Etwas ist schiefgelaufen. Bitte versuche es erneut."}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">
                {cms?.placeholderName ?? "Name"}
              </label>
              <input
                type="text"
                {...register("name")}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
              {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                {cms?.placeholderBusiness ?? "Firma"}
              </label>
              <input
                type="text"
                {...register("business")}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
              {errors.business && <p className="text-sm text-red-600">{errors.business.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                {cms?.placeholderPhone ?? "Telefonnummer"}
              </label>
              <input
                type="tel"
                {...register("phoneNumber")}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
              {errors.phoneNumber && <p className="text-sm text-red-600">{errors.phoneNumber.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                {cms?.placeholderEmail ?? "E-Mail"}
              </label>
              <input
                type="email"
                {...register("email")}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
              {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              {cms?.placeholderNews ?? "Nachricht"}
            </label>
            <textarea
              rows={4}
              {...register("news")}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
            >
              {isSubmitting
                ? cms?.sendingLabel ?? "Senden..."
                : cms?.submitLabel ?? "Absenden"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};