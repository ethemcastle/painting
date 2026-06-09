"use server";

export type QuoteState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<"name" | "email" | "phone" | "service", string>>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitQuote(
  _prevState: QuoteState,
  formData: FormData,
): Promise<QuoteState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const details = String(formData.get("details") ?? "").trim();

  const errors: QuoteState["errors"] = {};
  if (name.length < 2) errors.name = "Please tell us your name.";
  if (!EMAIL_RE.test(email)) errors.email = "Enter a valid email address.";
  if (phone.replace(/\D/g, "").length < 7) errors.phone = "Enter a valid phone number.";
  if (!service) errors.service = "Pick a service.";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields and try again.",
      errors,
    };
  }

  // In a production app you would persist this lead to a database or send an
  // email/notification here. We simulate a short async task instead.
  await new Promise((resolve) => setTimeout(resolve, 600));
  void details;

  const firstName = name.split(" ")[0];
  return {
    status: "success",
    message: `Thanks, ${firstName}! Your request is in. A TrueCoat estimator will reach out within one business day.`,
  };
}

