"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import type { FormCopy } from "@/lib/types";
import { cn } from "@/lib/utils";

type FieldName = "name" | "email" | "message";
type FormValues = Record<FieldName, string>;
type FormErrors = Partial<Record<FieldName, string>>;
type Status = "idle" | "sending" | "success";

const initialValues: FormValues = { name: "", email: "", message: "" };

function validate(values: FormValues, copy: FormCopy): FormErrors {
  const errors: FormErrors = {};
  if (values.name.trim().length < 2) errors.name = copy.errors.name;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = copy.errors.email;
  }
  if (values.message.trim().length < 10) errors.message = copy.errors.message;
  return errors;
}

export function ContactForm({
  copy,
  note,
}: {
  copy: FormCopy;
  note: string;
}) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wasSuccessRef = useRef(false);

  const baseId = useId();
  const nameId = `${baseId}-name`;
  const emailId = `${baseId}-email`;
  const messageId = `${baseId}-message`;
  const requiredId = `${baseId}-required`;

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (status === "success") {
      wasSuccessRef.current = true;
      successRef.current?.focus();
    } else if (status === "idle" && wasSuccessRef.current) {
      wasSuccessRef.current = false;
      nameRef.current?.focus();
    }
  }, [status]);

  function updateValue(field: FieldName, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values, copy);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = (
        ["name", "email", "message"] as const
      ).find((field) => nextErrors[field]);
      if (firstInvalid === "name") nameRef.current?.focus();
      if (firstInvalid === "email") emailRef.current?.focus();
      if (firstInvalid === "message") messageRef.current?.focus();
      return;
    }

    setStatus("sending");
    timerRef.current = setTimeout(() => setStatus("success"), 650);
  }

  function resetForm() {
    setValues(initialValues);
    setErrors({});
    setStatus("idle");
  }

  if (status === "success") {
    return (
      <div className="card relative overflow-hidden p-6 sm:p-8" role="status">
        <span
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-1 bg-gold"
        />
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-navy-deep">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="m5 12.5 4.5 4.5L19 7.5" />
          </svg>
        </div>
        <h3
          ref={successRef}
          tabIndex={-1}
          className="mt-6 font-display text-2xl font-extrabold text-heading"
        >
          {copy.successTitle}
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted sm:text-base">
          {copy.successText}
        </p>
        <button
          type="button"
          onClick={resetForm}
          className="btn btn-navy mt-7"
        >
          {copy.sendAnother}
        </button>
        <p className="mt-6 text-xs leading-relaxed text-muted">{note}</p>
      </div>
    );
  }

  return (
    <div className="card relative overflow-hidden p-6 sm:p-8">
      <span
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-1 bg-gold"
      />
      <h3 className="font-display text-xl font-bold text-heading sm:text-2xl">
        {copy.formTitle}
      </h3>
      <p id={requiredId} className="mt-2 text-sm text-muted">
        {copy.requiredHint}
      </p>

      <form
        className="mt-6 space-y-5"
        noValidate
        onSubmit={handleSubmit}
        aria-describedby={requiredId}
      >
        <div>
          <label
            htmlFor={nameId}
            className="block text-sm font-semibold text-heading"
          >
            {copy.nameLabel}
          </label>
          <input
            ref={nameRef}
            id={nameId}
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={(event) => updateValue("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${nameId}-error` : undefined}
            placeholder={copy.namePlaceholder}
            className={cn(
              "mt-2 block w-full rounded-lg border bg-surface px-4 py-3 text-base text-ink shadow-sm outline-none transition-colors placeholder:text-muted focus:border-gold focus:ring-2 focus:ring-gold/30",
              errors.name ? "border-danger" : "border-line",
            )}
          />
          {errors.name ? (
            <p
              id={`${nameId}-error`}
              role="alert"
              className="mt-2 text-sm font-medium text-danger"
            >
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor={emailId}
            className="block text-sm font-semibold text-heading"
          >
            {copy.emailLabel}
          </label>
          <input
            ref={emailRef}
            id={emailId}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={(event) => updateValue("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${emailId}-error` : undefined}
            placeholder={copy.emailPlaceholder}
            className={cn(
              "mt-2 block w-full rounded-lg border bg-surface px-4 py-3 text-base text-ink shadow-sm outline-none transition-colors placeholder:text-muted focus:border-gold focus:ring-2 focus:ring-gold/30",
              errors.email ? "border-danger" : "border-line",
            )}
          />
          {errors.email ? (
            <p
              id={`${emailId}-error`}
              role="alert"
              className="mt-2 text-sm font-medium text-danger"
            >
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor={messageId}
            className="block text-sm font-semibold text-heading"
          >
            {copy.messageLabel}
          </label>
          <textarea
            ref={messageRef}
            id={messageId}
            name="message"
            required
            rows={5}
            value={values.message}
            onChange={(event) => updateValue("message", event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message ? `${messageId}-error` : undefined
            }
            placeholder={copy.messagePlaceholder}
            className={cn(
              "mt-2 block w-full resize-y rounded-lg border bg-surface px-4 py-3 text-base text-ink shadow-sm outline-none transition-colors placeholder:text-muted focus:border-gold focus:ring-2 focus:ring-gold/30",
              errors.message ? "border-danger" : "border-line",
            )}
          />
          {errors.message ? (
            <p
              id={`${messageId}-error`}
              role="alert"
              className="mt-2 text-sm font-medium text-danger"
            >
              {errors.message}
            </p>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="btn btn-primary w-full disabled:cursor-wait disabled:opacity-70"
        >
          {status === "sending" ? copy.sending : copy.submit}
          {status === "sending" ? (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4 animate-spin"
            >
              <circle
                cx="12"
                cy="12"
                r="9"
                stroke="currentColor"
                strokeWidth="2.5"
                opacity="0.25"
              />
              <path
                d="M21 12a9 9 0 0 0-9-9"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          ) : null}
        </button>
      </form>

      <p className="mt-5 border-t border-line pt-4 text-xs leading-relaxed text-muted">
        {note}
      </p>
    </div>
  );
}

