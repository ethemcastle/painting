"use client";

import { useActionState } from "react";
import { submitQuote, type QuoteState } from "@/app/actions";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";

const initialState: QuoteState = { status: "idle", message: "" };

const SERVICES = [
  "Interior painting",
  "Exterior painting",
  "Commercial",
  "Cabinets & trim",
  "Wallpaper removal",
  "Color consultation",
  "Something else",
];

const fieldBase =
  "mt-1.5 w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30";

function errorClass(hasError?: string) {
  return hasError ? "border-red-400" : "border-slate-200";
}

export function QuoteForm() {
  const [state, formAction, pending] = useActionState(submitQuote, initialState);

  if (state.status === "success") {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white">
          <CheckIcon className="h-7 w-7" />
        </span>
        <h3 className="text-xl font-semibold text-emerald-900">Request received</h3>
        <p className="max-w-sm text-sm text-emerald-800">{state.message}</p>
      </div>
    );
  }

  const errors = state.errors ?? {};

  return (
    <form action={formAction} noValidate className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-slate-700">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Jordan Rivera"
            className={`${fieldBase} ${errorClass(errors.name)}`}
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-slate-700">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(555) 010-2837"
            className={`${fieldBase} ${errorClass(errors.phone)}`}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-slate-700">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@email.com"
          className={`${fieldBase} ${errorClass(errors.email)}`}
        />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="service" className="text-sm font-medium text-slate-700">
          What do you need painted?
        </label>
        <select
          id="service"
          name="service"
          defaultValue=""
          className={`${fieldBase} ${errorClass(errors.service)}`}
        >
          <option value="" disabled>
            Select a service
          </option>
          {SERVICES.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
        {errors.service && <p className="mt-1 text-xs text-red-600">{errors.service}</p>}
      </div>

      <div>
        <label htmlFor="details" className="text-sm font-medium text-slate-700">
          Project details <span className="text-slate-400">(optional)</span>
        </label>
        <textarea
          id="details"
          name="details"
          rows={3}
          placeholder="Rooms, square footage, timing, colors you have in mind..."
          className={`${fieldBase} resize-none ${errorClass(undefined)}`}
        />
      </div>

      {state.status === "error" && (
        <p aria-live="polite" className="text-sm text-red-600">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="group mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/30 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
      >
        {pending ? "Sending..." : "Get my free quote"}
        {!pending && (
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        )}
      </button>

      <p className="text-center text-xs text-slate-400">
        No spam, ever. We only use your details to prepare your estimate.
      </p>
    </form>
  );
}

