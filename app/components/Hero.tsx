function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="size-3.5">
      <path d="M4 10h11m-4.5-4.5L15 10l-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="size-3.5">
      <path d="M3.5 10V9a6.5 6.5 0 0 1 13 0v1m-13 0v4a1.5 1.5 0 0 0 1.5 1.5h1.5v-5H5A1.5 1.5 0 0 0 3.5 10Zm13 0v4a1.5 1.5 0 0 1-1.5 1.5h-1.5v-5H15a1.5 1.5 0 0 1 1.5-.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Hero() {
  return (
    <>
      <section
        id="home"
        aria-labelledby="hero-heading"
        className="relative isolate flex h-[calc(100dvh-4rem)] shrink-0 items-center justify-center overflow-hidden bg-cover bg-center px-5 py-6 text-center text-white sm:py-10 lg:h-[calc(100dvh-4.875rem)] lg:py-12"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2400&q=85')",
        }}
      >
        <div className="absolute inset-0 -z-10 bg-black/60" aria-hidden="true" />

        <div data-reveal="scale" className="mx-auto flex w-full max-w-3xl flex-col items-center">
          
          <h1
            id="hero-heading"
            className="max-w-2xl font-serif text-3xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[56px]"
          >
            Your Gateway to Overseas
            <br className="hidden sm:block" /> Career Opportunities
          </h1>
          <p className="mt-3 max-w-xl text-xs leading-5 text-white/85 sm:mt-5 sm:text-sm sm:leading-6">
            Al-Sabahiyah connects ambitious talent with leading employers across
            the Middle East and Europe. Secure your future with us today.
          </p>

          <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:mt-7 sm:flex-row">
            <a
              href="#opportunities"
              className="inline-flex h-11 min-w-44 items-center justify-center gap-2 rounded-sm bg-[#1476d4] px-5 text-xs font-semibold text-white transition-[transform,background-color] duration-200 hover:scale-[1.03] hover:bg-[#0b58a8] active:scale-[0.98] motion-reduce:transform-none"
            >
              Browse Job Openings
              <ArrowIcon />
            </a>
            <a
              id="track-application"
              href="#track-application"
              className="inline-flex h-11 min-w-40 items-center justify-center gap-2 rounded-sm border border-white/70 bg-black/20 px-5 text-xs font-semibold text-white transition-[transform,background-color] duration-200 hover:scale-[1.03] hover:bg-white/15 active:scale-[0.98] motion-reduce:transform-none"
            >
              Track Your Visa
              <HeadsetIcon />
            </a>
          </div>

          <div data-reveal-group className="mt-6 grid w-full max-w-lg grid-cols-3 border-t border-white/30 pt-4 sm:mt-10 sm:pt-6">
            <div data-reveal="item" className="px-2">
              <p className="text-xl font-bold tracking-tight sm:text-2xl">1,200+</p>
              <p className="mt-1 text-[9px] text-white/75 sm:text-[10px]">Jobs Posted</p>
            </div>
            <div data-reveal="item" className="border-x border-white/30 px-2">
              <p className="text-xl font-bold tracking-tight sm:text-2xl">15+</p>
              <p className="mt-1 text-[9px] text-white/75 sm:text-[10px]">Countries</p>
            </div>
            <div data-reveal="item" className="px-2">
              <p className="text-xl font-bold tracking-tight sm:text-2xl">98%</p>
              <p className="mt-1 text-[9px] text-white/75 sm:text-[10px]">Visa Approval</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
