"use client";

import { useEffect, useState, type FormEvent } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollMotion from "./ScrollMotion";

const positions = [
  "Heavy Truck Driver",
  "Commercial Facility Cleaner",
  "Modern Greenhouse Technician",
  "Furniture & Fit-out Carpenter",
  "Executive Fleet Driver",
  "Industrial Site Cleaner",
  "Other",
];

const fieldClassName =
  "mt-1.5 min-h-11 w-full rounded-sm border border-slate-300 bg-white px-3 text-sm text-slate-800 outline-none transition-[border-color,box-shadow] placeholder:text-slate-400 focus:border-[#1476d4] focus:ring-2 focus:ring-[#1476d4]/15";

function ApplicationIcon({ name }: { name: "check" | "document" | "support" }) {
  const shared = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
    className: "size-5 shrink-0",
  };

  if (name === "document") {
    return (
      <svg {...shared}>
        <path d="M7 3.75h7l4 4v12.5H7a2 2 0 0 1-2-2v-12.5a2 2 0 0 1 2-2Z" />
        <path d="M14 4v4h4M8.5 12h7m-7 3.5h7" />
      </svg>
    );
  }

  if (name === "support") {
    return (
      <svg {...shared}>
        <path d="M4 13v-2a8 8 0 0 1 16 0v2" />
        <path d="M4 13h3v6H6a2 2 0 0 1-2-2v-4Zm16 0h-3v6h1a2 2 0 0 0 2-2v-4ZM17 19a5 5 0 0 1-5 2" />
      </svg>
    );
  }

  return (
    <svg {...shared}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 2.5 2.5L16 9" />
    </svg>
  );
}

export default function ApplicationFormPage() {
  const [selectedRole, setSelectedRole] = useState("");

  useEffect(() => {
    const roleFromUrl = new URLSearchParams(window.location.search).get("role");
    if (roleFromUrl && positions.includes(roleFromUrl)) {
      setSelectedRole(roleFromUrl);
    }
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const application = [
      `Full name: ${formData.get("fullName")}`,
      `Email: ${formData.get("email")}`,
      `Phone: ${formData.get("phone")}`,
      `Current city/country: ${formData.get("location")}`,
      `Position: ${formData.get("position")}`,
      `Years of experience: ${formData.get("experience") || "Not provided"}`,
      "",
      "Additional information:",
      formData.get("message") || "None provided",
      "",
      "I will attach my CV and supporting documents to this email.",
    ].join("\n");

    const mailto = `mailto:info@alsabahiyah.rw?subject=${encodeURIComponent(
      `Job application: ${formData.get("position")}`,
    )}&body=${encodeURIComponent(application)}`;

    window.location.href = mailto;
  }

  return (
    <ScrollMotion>
      <main id="home" className="min-h-dvh bg-[#f6f7f9] text-slate-900">
        <Navbar variant="application" />

        <section
          aria-labelledby="application-heading"
          className="bg-[#1476d4] px-5 py-12 text-white sm:px-8 sm:py-16"
        >
          <div data-reveal="scale" className="mx-auto max-w-6xl">
            <nav aria-label="Breadcrumb" className="text-xs text-white/80">
              <a href="/" className="transition-colors hover:text-white">
                Home
              </a>
              <span className="mx-2" aria-hidden="true">/</span>
              <a
                href="/job-opportunities"
                className="transition-colors hover:text-white"
              >
                Job Opportunities
              </a>
              <span className="mx-2" aria-hidden="true">/</span>
              <span className="text-white">Application Form</span>
            </nav>
            <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/80">
              Take the next step
            </p>
            <h1
              id="application-heading"
              className="mt-2 max-w-2xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl"
            >
              Start your application
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/85 sm:text-base">
              Tell us a little about yourself and the role you are interested
              in. Our recruitment team will guide you through the next steps.
            </p>
          </div>
        </section>

        <section
          id="application-form"
          aria-labelledby="form-section-heading"
          className="px-5 py-10 sm:px-8 sm:py-14 lg:py-16"
        >
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-10">
            <div data-reveal="scale" className="rounded-md border border-slate-200 bg-white p-5 shadow-sm sm:p-8 lg:p-10">
              <div className="border-b border-slate-200 pb-5">
                <h2 id="form-section-heading" className="text-xl font-semibold text-slate-900">
                  Applicant information
                </h2>
                <p className="mt-1.5 text-xs leading-5 text-slate-600">
                  Fields marked with <span className="text-rose-600">*</span> are required.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                <fieldset>
                  <legend className="text-sm font-semibold text-slate-800">
                    Personal details
                  </legend>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="fullName" className="text-xs font-medium text-slate-700">
                        Full name <span className="text-rose-600">*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        required
                        placeholder="Enter your full name"
                        className={fieldClassName}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-xs font-medium text-slate-700">
                        Email address <span className="text-rose-600">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="you@example.com"
                        className={fieldClassName}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="text-xs font-medium text-slate-700">
                        Phone number <span className="text-rose-600">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        required
                        placeholder="+250 7XX XXX XXX"
                        className={fieldClassName}
                      />
                    </div>
                    <div>
                      <label htmlFor="location" className="text-xs font-medium text-slate-700">
                        Current city and country <span className="text-rose-600">*</span>
                      </label>
                      <input
                        id="location"
                        name="location"
                        type="text"
                        autoComplete="address-level2"
                        required
                        placeholder="e.g. Kigali, Rwanda"
                        className={fieldClassName}
                      />
                    </div>
                  </div>
                </fieldset>

                <fieldset className="border-t border-slate-200 pt-6">
                  <legend className="text-sm font-semibold text-slate-800">
                    Job preferences
                  </legend>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="position" className="text-xs font-medium text-slate-700">
                        Position of interest <span className="text-rose-600">*</span>
                      </label>
                      <select
                        id="position"
                        name="position"
                        required
                        value={selectedRole}
                        onChange={(event) => setSelectedRole(event.target.value)}
                        className={fieldClassName}
                      >
                        <option value="" disabled>Select a position</option>
                        {positions.map((position) => (
                          <option key={position} value={position}>{position}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="experience" className="text-xs font-medium text-slate-700">
                        Years of relevant experience
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        defaultValue=""
                        className={fieldClassName}
                      >
                        <option value="">Select experience</option>
                        <option value="Less than 1 year">Less than 1 year</option>
                        <option value="1–2 years">1–2 years</option>
                        <option value="3–5 years">3–5 years</option>
                        <option value="6–10 years">6–10 years</option>
                        <option value="More than 10 years">More than 10 years</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="text-xs font-medium text-slate-700">
                        Tell us about your experience
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Share relevant skills, qualifications, or anything else you would like us to know."
                        className={`${fieldClassName} resize-y py-3`}
                      />
                    </div>
                  </div>
                </fieldset>

                <div className="border-t border-slate-200 pt-5">
                  <label className="flex items-start gap-3 text-xs leading-5 text-slate-600">
                    <input
                      name="consent"
                      type="checkbox"
                      required
                      className="mt-0.5 size-4 shrink-0 accent-[#1476d4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1476d4]"
                    />
                    <span>
                      I agree that Al-Sabahiyah may use the information I provide
                      to contact me about this application.{" "}
                      <span className="text-rose-600">*</span>
                    </span>
                  </label>

                  <p className="mt-4 rounded-sm bg-[#e7f3ea] px-3 py-2.5 text-xs leading-5 text-slate-700">
                    Submitting opens a pre-filled email to our recruitment team.
                    Please attach your CV and any supporting documents before
                    sending it.
                  </p>

                  <button
                    type="submit"
                    className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-sm bg-[#1476d4] px-5 text-sm font-semibold text-white transition-[transform,background-color] duration-200 hover:scale-[1.02] hover:bg-[#0b58a8] active:scale-[0.98] motion-reduce:transform-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1476d4] sm:w-auto"
                  >
                    Continue to email
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="size-4">
                      <path
                        d="M3 5.5h14v9H3v-9Zm0 1 7 5 7-5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>

            <aside className="space-y-5">
              <div data-reveal className="rounded-md border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <h2 className="text-base font-semibold text-slate-900">
                  What happens next?
                </h2>
                <ol className="mt-5 space-y-5">
                  {[
                    ["01", "Application review", "Our team reviews your details and experience."],
                    ["02", "Personal follow-up", "A recruitment consultant contacts you about suitable roles."],
                    ["03", "Employer introduction", "We guide qualified candidates through interviews and documentation."],
                  ].map(([number, title, description]) => (
                    <li key={number} className="flex gap-3">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#e7f3ea] text-[10px] font-bold text-[#118a45]">
                        {number}
                      </span>
                      <div>
                        <h3 className="text-xs font-semibold text-slate-800">{title}</h3>
                        <p className="mt-1 text-[11px] leading-5 text-slate-600">{description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div data-reveal className="rounded-md border border-[#cbd6d6] bg-[#e7f3ea] p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-full bg-white text-[#118a45]">
                    <ApplicationIcon name="check" />
                  </span>
                  <h2 className="text-sm font-semibold text-slate-800">
                    Recruitment you can trust
                  </h2>
                </div>
                <ul className="mt-4 space-y-3 text-xs leading-5 text-slate-700">
                  <li className="flex gap-2">
                    <ApplicationIcon name="document" />
                    Transparent guidance through documentation
                  </li>
                  <li className="flex gap-2">
                    <ApplicationIcon name="support" />
                    Support from application to departure
                  </li>
                </ul>
              </div>

              <div data-reveal className="rounded-md bg-[#003b39] p-5 text-white sm:p-6">
                <h2 className="text-sm font-semibold">Need help with your application?</h2>
                <p className="mt-2 text-xs leading-5 text-white/80">
                  Our Kigali team is happy to answer your questions.
                </p>
                <a
                  href="mailto:info@alsabahiyah.rw"
                  className="mt-4 inline-flex text-xs font-semibold text-white underline decoration-white/50 underline-offset-4 transition-colors hover:decoration-white"
                >
                  Contact our team
                </a>
              </div>
            </aside>
          </div>
        </section>

        <Footer variant="application" />
      </main>
    </ScrollMotion>
  );
}
