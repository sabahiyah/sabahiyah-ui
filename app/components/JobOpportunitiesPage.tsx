"use client";

import { useMemo, useState, type ReactNode } from "react";
import Navbar from "./Navbar";
import ScrollMotion from "./ScrollMotion";

const categories = ["All Positions", "Drivers", "Cleaners", "Farm Workers", "Carpenters"] as const;

type JobCategory = (typeof categories)[number];

type Job = {
  category: Exclude<JobCategory, "All Positions">;
  title: string;
  location: string;
  description: string;
  responsibilities: string[];
  salary: string;
  benefits: string;
  status: string;
  image: string;
  imagePosition?: string;
};

const jobs: Job[] = [
  {
    category: "Drivers",
    title: "Heavy Truck Driver",
    location: "United Arab Emirates",
    description:
      "Professional driver needed for long-haul logistics and commercial transport.",
    responsibilities: [
      "Operate 40ft heavy-duty trucks safely across international borders",
      "Maintain accurate logbooks and vehicle maintenance records",
    ],
    salary: "$1,200 – $1,800 USD",
    benefits: "Accommodation provided",
    status: "Urgent",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1000&q=85",
    imagePosition: "center 55%",
  },
  {
    category: "Cleaners",
    title: "Commercial Facility Cleaner",
    location: "Qatar",
    description:
      "Meticulous cleaner for high-end commercial offices and facilities.",
    responsibilities: [
      "Maintain sanitization standards for high-traffic corporate areas",
      "Operate industrial floor buffers and vacuum systems",
    ],
    salary: "$800 – $1,100 USD",
    benefits: "Shared accommodation",
    status: "Open",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=85",
  },
  {
    category: "Farm Workers",
    title: "Modern Greenhouse Technician",
    location: "Poland",
    description:
      "Agricultural specialist for modern hydroponic greenhouse facilities.",
    responsibilities: [
      "Monitor automated irrigation and nutrient delivery systems",
      "Perform seasonal harvesting and sorting of premium produce",
    ],
    salary: "€1,100 – €1,500 EUR",
    benefits: "Furnished housing",
    status: "Open",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85",
  },
  {
    category: "Carpenters",
    title: "Furniture & Fit-out Carpenter",
    location: "Saudi Arabia",
    description:
      "Skilled craftsman for luxury interior fit-out projects and high-end furniture.",
    responsibilities: [
      "Interpret technical blueprints for custom cabinetry and joinery",
      "Operate precision woodworking machinery and hand tools",
    ],
    salary: "$1,300 – $2,000 USD",
    benefits: "Accommodation allowance",
    status: "Closing soon",
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1000&q=85",
  },
  {
    category: "Drivers",
    title: "Executive Fleet Driver",
    location: "Oman",
    description:
      "Professional chauffeur for executive transportation services and luxury travel.",
    responsibilities: [
      "Provide safe, punctual transport for corporate executives",
      "Maintain vehicle cleanliness and mechanical readiness",
    ],
    salary: "$1,000 – $1,400 USD",
    benefits: "Uniform provided",
    status: "Open",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1000&q=85",
    imagePosition: "center 35%",
  },
  {
    category: "Cleaners",
    title: "Industrial Site Cleaner",
    location: "United Arab Emirates",
    description:
      "Specialized cleaning personnel for large-scale industrial and manufacturing sites.",
    responsibilities: [
      "Execute deep cleaning of manufacturing floor zones",
      "Handle industrial waste management protocols",
    ],
    salary: "$900 – $1,200 USD",
    benefits: "Medical insurance",
    status: "Open",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=85",
    imagePosition: "center 35%",
  },
];

function PinIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      className="size-3.5 shrink-0"
    >
      <path d="M16 8.3c0 4.2-6 9.2-6 9.2S4 12.5 4 8.3a6 6 0 1 1 12 0Z" />
      <circle cx="10" cy="8" r="2" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="mt-0.5 size-3.5 shrink-0"
    >
      <circle cx="10" cy="10" r="7.5" />
      <path d="m7 10 2 2 4-4" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
      className="size-4 shrink-0"
    >
      <circle cx="8.75" cy="8.75" r="5.75" />
      <path d="m13 13 4 4" />
    </svg>
  );
}

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

function JobCard({ job }: { job: Job }) {
  const applicationLink = `/application-form?role=${encodeURIComponent(job.title)}`;

  return (
    <article className="flex min-w-0 flex-col overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm">
      <div
        role="img"
        aria-label={`${job.category}: ${job.title}`}
        className="relative flex h-48 items-end bg-cover bg-center p-4 sm:h-52"
        style={{
          backgroundImage: `linear-gradient(0deg, rgb(0 0 0 / 78%), rgb(0 0 0 / 0%) 72%), url("${job.image}")`,
          backgroundPosition: job.imagePosition ?? "center",
        }}
      >
        <span
          className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-semibold ${
            job.status === "Urgent"
              ? "bg-rose-100 text-rose-800"
              : "bg-emerald-50 text-emerald-900"
          }`}
        >
          {job.status}
        </span>
        <div className="text-white">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-white/80">
            {job.category}
          </p>
          <h3 className="mt-1 text-base font-semibold leading-tight">{job.title}</h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="flex items-center gap-2 text-xs text-slate-600">
          <PinIcon />
          {job.location}
        </p>
        <p className="mt-3 min-h-10 text-xs leading-5 text-slate-600">
          {job.description}
        </p>

        <div className="mt-3">
          <h4 className="text-[10px] font-semibold uppercase tracking-wide text-slate-700">
            Key responsibilities
          </h4>
          <ul className="mt-2 space-y-1.5">
            {job.responsibilities.map((responsibility) => (
              <li
                key={responsibility}
                className="flex items-start gap-2 text-[10px] leading-4 text-slate-600"
              >
                <CheckIcon />
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-200 pt-3">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-wide text-slate-500">
              Salary range
            </p>
            <p className="mt-1 text-[10px] font-semibold text-slate-800">{job.salary}</p>
          </div>
          <div className="text-right">
            <p className="text-[9px] font-semibold uppercase tracking-wide text-slate-500">
              Benefits
            </p>
            <p className="mt-1 text-[10px] font-medium text-slate-800">{job.benefits}</p>
          </div>
        </div>

        <a
          href={applicationLink}
          className="mt-4 inline-flex min-h-10 items-center justify-center gap-2 rounded-sm bg-[#1476d4] px-3 text-xs font-semibold text-white transition-[transform,background-color] duration-200 hover:scale-[1.03] hover:bg-[#0b58a8] active:scale-[0.98] motion-reduce:transform-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1476d4]"
        >
          Apply for this Role
          <ArrowIcon />
        </a>
      </div>
    </article>
  );
}

function ProcessIcon({ children }: { children: ReactNode }) {
  return (
    <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-[#e7f3ea] text-[#118a45]">
      {children}
    </span>
  );
}

export default function JobOpportunitiesPage() {
  const [selectedCategory, setSelectedCategory] = useState<JobCategory>("All Positions");
  const [query, setQuery] = useState("");

  const filteredJobs = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return jobs.filter((job) => {
      const matchesCategory =
        selectedCategory === "All Positions" || job.category === selectedCategory;
      const matchesQuery =
        !normalizedQuery ||
        `${job.title} ${job.category} ${job.location}`.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [query, selectedCategory]);

  return (
    <ScrollMotion>
      <main id="home" className="min-h-dvh bg-[#f6f7f9] text-slate-900">
        <Navbar variant="jobs" />

        <section
          aria-labelledby="jobs-page-heading"
          className="bg-[#0b58a8] px-5 py-16 text-white sm:px-8 sm:py-20 lg:py-24"
        >
          <div data-reveal="scale" className="mx-auto max-w-6xl">
            <span className="inline-flex rounded-full border border-white/30 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-wide text-white/90">
              Professional Recruitment
            </span>
            <h1
              id="jobs-page-heading"
              className="mt-5 max-w-3xl font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-[56px]"
            >
              Global Career Opportunities for Rwandan Talent
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/80 sm:text-base">
              Connect with leading international employers. We facilitate secure,
              transparent, and high-impact employment across the globe.
            </p>
          </div>
        </section>

        <section
          aria-label="Filter job listings"
          className="border-b border-slate-200 bg-white px-5 py-4 sm:px-8"
        >
          <div data-reveal className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="-mx-1 flex gap-1 overflow-x-auto pb-1 sm:mx-0 sm:pb-0">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  aria-pressed={selectedCategory === category}
                  onClick={() => setSelectedCategory(category)}
                  className={`shrink-0 rounded-sm px-4 py-2.5 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1476d4] ${
                    selectedCategory === category
                      ? "bg-[#1476d4] text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-[#e7f3ea] hover:text-[#118a45]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <label className="flex h-10 w-full items-center gap-2 rounded-sm border border-slate-300 bg-white px-3 text-slate-500 sm:max-w-xs">
              <SearchIcon />
              <span className="sr-only">Search by role or location</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by role or location..."
                className="min-w-0 flex-1 bg-transparent text-xs text-slate-800 outline-none placeholder:text-slate-500"
              />
            </label>
          </div>
        </section>

        <section
          id="available-vacancies"
          aria-labelledby="vacancies-heading"
          className="px-5 py-14 sm:px-8 sm:py-16 lg:py-20"
        >
          <div className="mx-auto max-w-5xl">
            <header data-reveal className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 id="vacancies-heading" className="text-2xl font-semibold tracking-tight">
                  Available Vacancies
                </h2>
                <p className="mt-2 max-w-lg text-xs leading-5 text-slate-600">
                  Browse our current openings. All positions include visa support
                  and mandatory health insurance.
                </p>
              </div>
              <p className="text-[10px] italic text-slate-500" aria-live="polite">
                Showing {filteredJobs.length} {filteredJobs.length === 1 ? "result" : "results"}
              </p>
            </header>

            {filteredJobs.length > 0 ? (
              <div data-reveal-group className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {filteredJobs.map((job) => (
                  <div key={job.title} data-reveal="item">
                    <JobCard job={job} />
                  </div>
                ))}
              </div>
            ) : (
              <div data-reveal className="rounded-md border border-slate-200 bg-white px-6 py-12 text-center">
                <h3 className="text-base font-semibold text-slate-800">No matching vacancies</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Try a different role, location, or category.
                </p>
              </div>
            )}
          </div>
        </section>

        <section
          id="track-application"
          aria-labelledby="process-heading"
          className="bg-[#e2e4e7] px-5 py-14 sm:px-8 sm:py-16 lg:py-20"
        >
          <div data-reveal="scale" className="mx-auto grid max-w-5xl overflow-hidden rounded-xl border border-slate-200 bg-white sm:grid-cols-2">
            <div className="p-6 sm:p-8 lg:p-10">
              <ProcessIcon>
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
                  <circle cx="12" cy="12" r="8.5" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </ProcessIcon>
              <h2 id="process-heading" className="mt-5 font-serif text-2xl text-slate-800">
                Streamlined Application Process
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Our recruitment process is designed to be fast and transparent.
                From initial application to departure, we guide you through every
                regulatory step.
              </p>

              <ul className="mt-6 grid grid-cols-1 gap-x-5 gap-y-3 text-xs font-medium text-slate-800 sm:grid-cols-2">
                {[
                  "Verified Employer Network",
                  "Visa Documentation Support",
                  "Pre-departure Orientation",
                  "Post-arrival Follow-up",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-[#118a45]">
                      <CheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="mailto:info@alsabahiyah.rw?subject=Track%20my%20application"
                className="mt-6 inline-flex min-h-10 items-center gap-2 rounded-sm bg-[#1476d4] px-4 text-xs font-semibold text-white transition-[transform,background-color] duration-200 hover:scale-[1.03] hover:bg-[#0b58a8] active:scale-[0.98] motion-reduce:transform-none"
              >
                Track Your Progress
                <ArrowIcon />
              </a>
            </div>

            <div className="relative min-h-72 sm:min-h-full">
              <div
                role="img"
                aria-label="Recruitment consultants meeting with a candidate"
                className="absolute inset-4 bg-cover bg-center sm:inset-y-8 sm:left-0 sm:right-8"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85')",
                }}
              />
              <div className="absolute bottom-6 left-6 rounded-lg bg-[#118a45] px-5 py-3 text-white shadow-lg sm:bottom-10 sm:left-0">
                <p className="text-2xl font-bold leading-none">98%</p>
                <p className="mt-1.5 text-[9px] font-semibold uppercase tracking-wide text-white/80">
                  Placement rate
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-[#f6f7f9] px-5 py-8 text-slate-600 sm:px-8 sm:py-10">
          <div data-reveal-group className="mx-auto grid max-w-6xl grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-4 sm:gap-8">
            <div data-reveal="item" className="col-span-2 sm:col-span-1">
              <p className="text-sm font-semibold text-slate-800">Al-Sabahiyah Rwanda</p>
              <p className="mt-3 max-w-xs text-[10px] leading-5">
                Connecting talented professionals in Rwanda with life-changing
                career opportunities overseas. We are committed to integrity,
                transparency, and excellence in recruitment.
              </p>
            </div>

            <nav data-reveal="item" aria-label="Footer quick links">
              <h2 className="text-xs font-semibold text-slate-800">Quick Links</h2>
              <ul className="mt-3 space-y-2 text-[10px]">
                <li><a className="hover:text-[#1476d4]" href="/">Home</a></li>
                <li><a className="hover:text-[#1476d4]" href="#available-vacancies">Job Listings</a></li>
                <li><a className="hover:text-[#1476d4]" href="#track-application">Track Application</a></li>
                <li><a className="hover:text-[#1476d4]" href="mailto:info@alsabahiyah.rw">FAQ</a></li>
              </ul>
            </nav>

            <nav data-reveal="item" aria-label="Footer legal links">
              <h2 className="text-xs font-semibold text-slate-800">Legal</h2>
              <ul className="mt-3 space-y-2 text-[10px]">
                <li><a className="hover:text-[#1476d4]" href="mailto:info@alsabahiyah.rw?subject=Privacy%20Policy">Privacy Policy</a></li>
                <li><a className="hover:text-[#1476d4]" href="mailto:info@alsabahiyah.rw?subject=Terms%20of%20Service">Terms of Service</a></li>
                <li><a className="hover:text-[#1476d4]" href="mailto:info@alsabahiyah.rw?subject=Cookie%20Policy">Cookie Policy</a></li>
              </ul>
            </nav>

            <div data-reveal="item">
              <h2 className="text-xs font-semibold text-slate-800">Contact Us</h2>
              <ul className="mt-3 space-y-2 text-[10px]">
                <li>Kigali, Rwanda</li>
                <li><a className="hover:text-[#1476d4]" href="tel:+250780000000">+250 780 000 000</a></li>
                <li><a className="hover:text-[#1476d4]" href="mailto:info@alsabahiyah.rw">info@alsabahiyah.rw</a></li>
                <li><a className="hover:text-[#1476d4]" href="https://www.alsabahiyah.rw">www.alsabahiyah.rw</a></li>
              </ul>
            </div>
          </div>

          <div data-reveal className="mx-auto mt-8 flex max-w-6xl flex-col gap-3 border-t border-slate-200 pt-4 text-[9px] sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Al-Sabahiyah Rwanda Recruitment. All rights reserved.</p>
            <p className="uppercase tracking-wide">Licensed by Ministry of Labor</p>
          </div>
        </footer>
      </main>
    </ScrollMotion>
  );
}
