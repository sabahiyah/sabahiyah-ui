function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-5"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-5"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-5"
    >
      <path d="M4 13v-2a8 8 0 0 1 16 0v2" />
      <path d="M4 13h3v6H6a2 2 0 0 1-2-2v-4Zm16 0h-3v6h1a2 2 0 0 0 2-2v-4ZM17 19a5 5 0 0 1-5 2" />
    </svg>
  );
}

const contactOptions = [
  {
    title: "Location",
    lines: ["Kigali, Rwanda", "Visit our recruitment office"],
    icon: <LocationIcon />,
  },
  {
    title: "Working Hours",
    lines: ["Monday – Friday", "Get in touch during office hours"],
    icon: <ClockIcon />,
  },
  {
    title: "Support Line",
    lines: ["Application support", "We’re here to help with your questions"],
    icon: <HeadsetIcon />,
  },
];

export default function ContactOffice() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="flex min-h-[627px] items-center bg-[#f6f7f9] px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
    >
      <div className="mx-auto w-full max-w-4xl">
        <header data-reveal className="mx-auto max-w-2xl text-center">
          <h2
            id="contact-heading"
            className="font-serif text-2xl font-medium tracking-tight text-slate-800 sm:text-3xl"
          >
            Questions? Visit Our Kigali Office
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-xs leading-5 text-slate-500 sm:text-sm">
            Our consultants are available Monday to Friday to assist you with
            your application process. No appointment necessary for general
            inquiries.
          </p>
        </header>

        <div data-reveal-group className="mt-10 grid gap-4 sm:grid-cols-3">
          {contactOptions.map((option) => (
            <article
              key={option.title}
              data-reveal="item"
              className="flex min-h-36 flex-col items-center justify-center rounded-sm border border-slate-200 bg-white px-4 py-5 text-center shadow-sm transition-[transform,box-shadow] duration-300 hover:scale-[1.02] hover:shadow-lg motion-reduce:transform-none"
            >
              <span className="flex size-9 items-center justify-center rounded-full bg-[#e7f3ea] text-[#118a45]">
                {option.icon}
              </span>
              <h3 className="mt-3 text-xs font-semibold text-slate-800">
                {option.title}
              </h3>
              {option.lines.map((line) => (
                <p key={line} className="mt-1 text-[10px] leading-4 text-slate-500">
                  {line}
                </p>
              ))}
            </article>
          ))}
        </div>

        <div data-reveal="scale" className="mx-auto mt-8 flex max-w-md items-center gap-2 rounded-full bg-[#e9ebee] p-1.5">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address for hiring newsletter
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Join our weekly hiring newsletter"
            className="min-w-0 flex-1 bg-transparent px-4 py-2 text-center text-[10px] text-slate-700 outline-none placeholder:text-slate-500 focus:text-left"
          />
          <button
            type="button"
            className="shrink-0 rounded-full bg-[#1476d4] px-5 py-2.5 text-[10px] font-semibold text-white transition-[transform,background-color] duration-200 hover:scale-[1.03] hover:bg-[#0b58a8] active:scale-[0.98] motion-reduce:transform-none"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
