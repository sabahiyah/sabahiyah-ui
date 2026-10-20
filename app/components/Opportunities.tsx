const categories = [
  {
    title: "Professional Drivers",
    positions: "45 Positions",
    description: "Explore high-paying opportunities for skilled drivers.",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Hospitality & Cleaning",
    positions: "120 Positions",
    description: "Explore high-paying opportunities for hospitality professionals.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Agriculture & Farm",
    positions: "85 Positions",
    description: "Explore high-paying opportunities for farm and agriculture workers.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Skilled Carpentry",
    positions: "35 Positions",
    description: "Explore high-paying opportunities for skilled carpenters.",
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=85",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="size-4">
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

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="size-3">
      <path
        d="M7 6V4.75A1.75 1.75 0 0 1 8.75 3h2.5A1.75 1.75 0 0 1 13 4.75V6m-9 0h12a1.5 1.5 0 0 1 1.5 1.5v7A1.5 1.5 0 0 1 16 16H4a1.5 1.5 0 0 1-1.5-1.5v-7A1.5 1.5 0 0 1 4 6Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M2.5 10h15m-9 0v1.5h3V10" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export default function Opportunities() {
  return (
    <section
      id="opportunities"
      aria-labelledby="opportunities-heading"
      className="min-h-[800px] bg-[#f6f7f9] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-[88px]"
    >
      <div className="mx-auto max-w-6xl">
        <header data-reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-amber-300 px-3 py-1 text-[10px] font-semibold text-slate-900">
            Explore Vacancies
          </span>
          <h2
            id="opportunities-heading"
            className="mt-4 font-serif text-3xl font-medium tracking-tight text-slate-800 sm:text-4xl"
          >
            Immediate Job Opportunities
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
            We specialize in multiple industry sectors, providing comprehensive
            visa support and competitive salary packages for our candidates.
          </p>
        </header>

        <div data-reveal-group className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-7">
          {categories.map((category) => (
            <article
              key={category.title}
              data-reveal="item"
              className="overflow-hidden rounded-sm border border-slate-200 bg-white shadow-sm transition-[transform,box-shadow] duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.99] motion-reduce:transform-none"
            >
              <div
                role="img"
                aria-label={category.title}
                className="relative h-44 bg-cover bg-center sm:h-48"
                style={{ backgroundImage: `url('${category.image}')` }}
              >
                <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-slate-950/75 px-2.5 py-1 text-[10px] font-medium text-white">
                  <BriefcaseIcon />
                  {category.positions}
                </span>
              </div>
              <div className="flex min-h-28 items-start justify-between gap-3 p-4">
                <div>
                  <h3 className="text-sm font-semibold text-slate-800">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {category.description}
                  </p>
                </div>
                <span className="mt-0.5 shrink-0 text-slate-600">
                  <ArrowIcon />
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#opportunities"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-slate-200 bg-white px-5 text-xs font-medium text-slate-700 transition-[transform,color,border-color] duration-200 hover:scale-[1.03] hover:border-[#1476d4] hover:text-[#1476d4] active:scale-[0.98] motion-reduce:transform-none"
          >
            View All Categories
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
