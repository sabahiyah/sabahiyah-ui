function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="size-3.5">
      <path
        d="M4 10h11m-4.5-4.5L15 10l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LicenseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-5"
    >
      <path d="M7 3.75h7l4 4V20H7a2 2 0 0 1-2-2V5.75a2 2 0 0 1 2-2Z" />
      <path d="M14 4v4h4M8.5 12h7m-7 3h7" />
      <path d="m9 18 1.5-1 1.5 1 1.5-1 1.5 1" />
    </svg>
  );
}

export default function TrustedPartner() {
  return (
    <section
      id="about"
      aria-labelledby="trusted-partner-heading"
      className="flex min-h-[760px] items-center bg-[#f6f7f9] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div data-reveal="scale" className="relative mx-auto w-full max-w-xl lg:mx-0">
          <div
            role="img"
            aria-label="A recruitment interview and handshake"
            className="aspect-[1.45] w-full rounded-lg bg-cover bg-center shadow-lg"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1400&q=85')",
            }}
          />
          <div className="absolute -bottom-7 right-3 flex w-[min(18rem,85%)] items-start gap-3 rounded-md border border-slate-200 bg-white p-4 shadow-lg sm:right-6">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-600">
              <LicenseIcon />
            </span>
            <div>
              <h3 className="text-xs font-semibold text-slate-800">
                Official License
              </h3>
              <p className="mt-1 text-[10px] leading-4 text-slate-500">
                Fully licensed and certified by the Ministry of Labor and
                Public Service of Rwanda.
              </p>
            </div>
          </div>
        </div>

        <div data-reveal className="pt-3 lg:pt-0">
          <span className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-medium text-slate-600">
            Who We Are
          </span>
          <h2
            id="trusted-partner-heading"
            className="mt-4 max-w-lg font-serif text-3xl font-medium leading-tight tracking-tight text-slate-800 sm:text-4xl"
          >
            Your Trusted Partner in Global Recruitment
          </h2>
          <p className="mt-4 text-xs leading-6 text-slate-600 sm:text-sm">
            Al-Sabahiyah Rwanda Recruitment is more than just a placement
            agency; we are a career launchpad for Rwandans seeking better
            opportunities abroad. Based in Kigali, we bridge the gap between
            local skills and international demand.
          </p>
          <p className="mt-3 text-xs leading-6 text-slate-600 sm:text-sm">
            Our philosophy is built on transparency and ethical recruitment. We
            ensure every candidate is treated with dignity, provided with fair
            contracts, and supported throughout their entire professional
            journey overseas.
          </p>

          <div data-reveal-group className="mt-5 grid gap-3 sm:grid-cols-2">
            <article data-reveal="item" className="rounded-md border border-slate-200 bg-white/70 p-4 transition-[transform,box-shadow] duration-300 hover:scale-[1.02] hover:shadow-md motion-reduce:transform-none">
              <h3 className="text-xs font-semibold text-[#118a45]">Our Mission</h3>
              <p className="mt-2 text-[10px] leading-4 text-slate-500">
                To empower Rwandan talent through ethical global placement.
              </p>
            </article>
            <article data-reveal="item" className="rounded-md border border-slate-200 bg-white/70 p-4 transition-[transform,box-shadow] duration-300 hover:scale-[1.02] hover:shadow-md motion-reduce:transform-none">
              <h3 className="text-xs font-semibold text-[#118a45]">Our Vision</h3>
              <p className="mt-2 text-[10px] leading-4 text-slate-500">
                Becoming Rwanda&apos;s most trusted recruitment and mobility
                partner.
              </p>
            </article>
          </div>

          <a
            href="#about"
            className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#1476d4] transition-[transform,color] duration-200 hover:scale-[1.03] hover:text-[#0b58a8] motion-reduce:transform-none"
          >
            Learn more about our heritage
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
