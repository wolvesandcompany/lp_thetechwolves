"use client";
import emailjs from "@emailjs/browser";
import React, { useRef, useState, ChangeEvent, FormEvent } from "react";
import { toast } from "sonner";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { track } from "@/lib/analytics";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { cn } from "../lib/utils";

export type ContactFormState = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_ID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID;
const EMAILJS_CONFIGURED = Boolean(
  EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_ID,
);
export const CONTACT_EMAIL = "hello@thetechwolves.com";

export default function ContactForm({
  onFormChange,
}: {
  onFormChange?: (form: ContactFormState) => void;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<ContactFormState>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const nextForm = { ...form, [e.target.name]: e.target.value };
    setForm(nextForm);
    onFormChange?.(nextForm);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.firstName || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);

    if (!EMAILJS_CONFIGURED) {
      openEmailDraft(form);
      setLoading(false);
      track.contactSubmit();
      toast.success("Email draft opened — send it from your mail app.");
      return;
    }

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID!,
        EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        EMAILJS_PUBLIC_ID!,
      )
      .then(
        () => {
          setLoading(false);
          const emptyForm = { firstName: "", lastName: "", email: "", message: "" };
          setForm(emptyForm);
          onFormChange?.(emptyForm);
          track.contactSubmit();
          toast.success("Message sent — we'll be in touch shortly.");
        },
        (error) => {
          setLoading(false);
          toast.error("Failed to send. Please try again.");
          console.error(error);
        },
      );
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="w-full">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Field>
          <Label htmlFor="firstname" className="text-xs uppercase tracking-[0.15em] text-white/55">
            First name <span className="text-emerald-400">*</span>
          </Label>
          <Input
            id="firstname"
            name="firstName"
            type="text"
            placeholder="Ada"
            value={form.firstName}
            onChange={handleChange}
            autoComplete="given-name"
          />
        </Field>
        <Field>
          <Label htmlFor="lastname" className="text-xs uppercase tracking-[0.15em] text-white/55">
            Last name
          </Label>
          <Input
            id="lastname"
            name="lastName"
            type="text"
            placeholder="Lovelace"
            value={form.lastName}
            onChange={handleChange}
            autoComplete="family-name"
          />
        </Field>
      </div>

      <Field className="mt-4">
        <Label htmlFor="email" className="text-xs uppercase tracking-[0.15em] text-white/55">
          Email <span className="text-emerald-400">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@company.com"
          value={form.email}
          onChange={handleChange}
          autoComplete="email"
        />
      </Field>

      <Field className="mt-4">
        <Label htmlFor="message" className="text-xs uppercase tracking-[0.15em] text-white/55">
          Message <span className="text-emerald-400">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Tell us about your project — scope, timeline, stack."
          value={form.message}
          onChange={handleChange}
        />
      </Field>

      <button
        type="submit"
        disabled={loading}
        className="tw-focus group relative mt-6 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-white px-5 py-3 text-sm font-medium text-[#050505] transition-shadow duration-300 hover:shadow-[0_0_40px_-8px_rgba(52,211,153,0.55)] disabled:cursor-not-allowed disabled:opacity-70"
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_50%_120%,rgb(var(--ds-accent-rgb)_/_0.5),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
        {loading ? (
          <>
            <Loader2 className="relative h-4 w-4 animate-spin" />
            <span className="relative">Sending</span>
          </>
        ) : (
          <>
            <span className="relative">Send message</span>
            <ArrowUpRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("flex w-full flex-col gap-2", className)}>{children}</div>;
}

function openEmailDraft(form: ContactFormState) {
  const fullName = [form.firstName, form.lastName].filter(Boolean).join(" ");
  const subject = `Website enquiry from ${fullName || form.email}`;
  const body = [
    `Name: ${fullName || form.firstName}`,
    `Email: ${form.email}`,
    "",
    form.message,
  ].join("\n");

  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}
