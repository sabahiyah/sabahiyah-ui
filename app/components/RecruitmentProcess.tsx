const steps = [
  {
    title: "Profile Submission",
    description:
      "Complete the application form with your professional details and experience.",
    icon: "profile",
  },
  {
    title: "Expert Screening",
    description:
      "Our recruitment specialists review your qualifications and experience.",
    icon: "screening",
  },
  {
    title: "Employer Interview",
    description:
      "Attend a virtual or in-person interview with your potential employer.",
    icon: "interview",
  },
  {
    title: "Visa & Documenting",
    description:
      "Our team will support your full legal paperwork and visa process.",
    icon: "visa",
  },
  {
    title: "Deployment",
    description:
      "Get flight arrangements and on-ground assistance for your journey.",
    icon: "deployment",
  },
];

function StepIcon({ name }: { name: string }) {
  const shared = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
    className: "size-5",
  };

  if (name === "profile") {
    return (
      <svg {...shared}>
        <rect x="6" y="4" width="12" height="16" rx="2" />
        <path d="M9 4.5h6M9 10h6m-6 4h6m-6 4h4" />
      </svg>
    );
  }

  if (name === "screening") {
    return (
      <svg {...shared}>
        <circle cx="10.5" cy="10.5" r="5.5" />
        <path d="m15 15 4 4m-8.5-11v5m-2.5-2.5h5" />
      </svg>
    );
  }

  if (name === "interview") {
    return (
      <svg {...shared}>
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 19v-1.5A5.5 5.5 0 0 1 9 12h1m4-2 2 2 4-4m-5 8h5m-2.5-2.5v5" />
      </svg>
    );
  }

  if (name === "visa") {
    return (
      <svg {...shared}>
        <path d="m21 3-7.2 18-3.4-7.4L3 10.2 21 3Z" />
        <path d="m10.4 13.6 4.8-4.8" />
      </svg>
    );
  }

  return (
    <svg {...shared}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V4h8v3m-5 0v13m-5-8h2m8 0h2" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-5"
    >
      <path d="M12 3 20 6v5c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6l8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export default function RecruitmentProcess() {
  return (
    <section
      id="recruitment-process"
      aria-labelledby="recruitment-heading"
      className="min-h-[769px] bg-[#eaecee] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-[88px]"
    >
      <div className="mx-auto max-w-6xl">
        <header data-reveal className="mx-auto max-w-2xl text-center">
          <h2
            id="recruitment-heading"
            className="font-serif text-2xl font-medium tracking-tight text-slate-800 sm:text-3xl"
          >
            Our Streamlined Recruitment Process
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-xs leading-5 text-slate-500">
            Getting hired internationally is a journey. We&apos;ve simplified it
            into five transparent steps to help you succeed.
          </p>
        </header>

        <ol data-reveal-group className="relative mt-12 grid grid-cols-3 gap-x-3 gap-y-8 before:absolute before:left-[10%] before:right-[10%] before:top-7 before:hidden before:border-t before:border-dashed before:border-slate-300 before:content-[''] sm:grid-cols-3 lg:mt-16 lg:grid-cols-5 lg:gap-5 lg:before:block">
          {steps.map((step, index) => (
            <li
              key={step.title}
              data-reveal="item"
              className="group relative flex flex-col items-center text-center"
            >
              <div className="relative flex size-12 items-center justify-center rounded-full bg-[#118a45] text-white shadow-sm transition-transform duration-300 ease-out group-hover:scale-110 group-active:scale-95 motion-reduce:transition-none sm:size-14">
                <StepIcon name={step.icon} />
                <span className="absolute -right-0.5 -top-1 flex size-6 items-center justify-center rounded-full border-2 border-[#eaecee] bg-[#f3c400] text-[10px] font-bold text-slate-900">
                  {index + 1}
                </span>
              </div>
              <h3 className="mt-3 text-xs font-semibold text-slate-800 transition-colors duration-300 group-hover:text-[#1476d4] sm:mt-4 sm:text-sm">
                {step.title}
              </h3>
              <p className="mt-2 max-w-full text-[10px] leading-4 text-slate-500 sm:max-w-48 sm:text-xs sm:leading-5">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <div data-reveal="scale" className="mx-auto mt-12 flex max-w-5xl flex-col items-start gap-5 rounded-md border border-[#cbd6d6] bg-[#dfe7e8] p-5 sm:mt-16 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-5">
          <div className="flex items-center gap-4">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#118a45] text-white">
              <ShieldIcon />
            </span>
            <div>
              <h3 className="text-sm font-semibold text-slate-800">
                Ready to start?
              </h3>
              <p className="mt-1 text-xs text-slate-600">
                Applications for the next Gulf hiring wave are now open.
              </p>
            </div>
          </div>
          <a
            href="#opportunities"
            className="inline-flex h-10 w-full shrink-0 items-center justify-center rounded-sm bg-[#1476d4] px-5 text-xs font-semibold text-white transition-[transform,background-color] duration-200 hover:scale-[1.03] hover:bg-[#0b58a8] active:scale-[0.98] motion-reduce:transform-none sm:w-auto"
          >
            Submit Your CV
          </a>
        </div>
      </div>
    </section>
  );
}
