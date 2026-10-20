import Image from "next/image";

function FooterIcon({ name }: { name: "location" | "phone" | "email" | "web" }) {
  const shared = {
    viewBox: "0 0 20 20",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
    className: "size-3.5 shrink-0",
  };

  if (name === "location") {
    return (
      <svg {...shared}>
        <path d="M16 8.3c0 4.2-6 9.2-6 9.2S4 12.5 4 8.3a6 6 0 1 1 12 0Z" />
        <circle cx="10" cy="8" r="2" />
      </svg>
    );
  }

  if (name === "phone") {
    return (
      <svg {...shared}>
        <path d="m6.1 3.5 2.2-.5 1.3 3.2-1.5 1.2a12 12 0 0 0 4.5 4.5l1.2-1.5 3.2 1.3-.5 2.2a2 2 0 0 1-2.2 1.5A13 13 0 0 1 4.6 5.7a2 2 0 0 1 1.5-2.2Z" />
      </svg>
    );
  }

  if (name === "email") {
    return (
      <svg {...shared}>
        <rect x="2.5" y="4" width="15" height="12" rx="1.5" />
        <path d="m3 5 7 5.5L17 5" />
      </svg>
    );
  }

  return (
    <svg {...shared}>
      <circle cx="10" cy="10" r="7.5" />
      <path d="M2.8 10h14.4M10 2.5a12 12 0 0 1 0 15M10 2.5a12 12 0 0 0 0 15" />
    </svg>
  );
}

export default function Footer({ variant = "home" }: { variant?: "home" | "application" }) {
  const isApplicationPage = variant === "application";
  const quickLinks = isApplicationPage
    ? [
        { label: "Home", href: "/" },
        { label: "Job Listings", href: "/job-opportunities" },
        { label: "Track Application", href: "#application-form" },
        { label: "FAQ", href: "mailto:info@alsabahiyah.rw" },
      ]
    : [
        { label: "Home", href: "#home" },
        { label: "Job Listings", href: "/job-opportunities" },
        { label: "Track Application", href: "#track-application" },
        { label: "FAQ", href: "#contact" },
      ];
  const legalLinks = isApplicationPage
    ? [
        { label: "Privacy Policy", href: "mailto:info@alsabahiyah.rw?subject=Privacy%20Policy" },
        { label: "Terms of Service", href: "mailto:info@alsabahiyah.rw?subject=Terms%20of%20Service" },
        { label: "Cookie Policy", href: "mailto:info@alsabahiyah.rw?subject=Cookie%20Policy" },
      ]
    : [
        { label: "Privacy Policy", href: "#contact" },
        { label: "Terms of Service", href: "#contact" },
        { label: "Cookie Policy", href: "#contact" },
      ];

  return (
    <footer className="bg-[#f6f7f9] px-5 pb-5 pt-12 text-slate-600 sm:px-8 sm:pt-14 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div data-reveal-group className="grid grid-cols-3 gap-x-3 gap-y-8 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-12">
          <div data-reveal="item" className="col-span-3 sm:col-span-2 lg:col-span-1">
            <Image
              src="/logoalsabahiyah.jpg"
              alt="Al-Sabahiyah Human Resources Consultancies"
              width={1055}
              height={241}
              className="h-auto w-[190px]"
            />
            <p className="mt-3 max-w-xs text-[10px] leading-5">
              Connecting talented professionals in Rwanda with life-changing
              career opportunities overseas. We are committed to integrity,
              transparency, and excellence in recruitment.
            </p>
          </div>

          <nav data-reveal="item" aria-label="Footer quick links">
            <h2 className="text-xs font-semibold text-slate-800">Quick Links</h2>
            <ul className="mt-3 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[10px] transition-colors hover:text-[#1476d4]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav data-reveal="item" aria-label="Footer legal links">
            <h2 className="text-xs font-semibold text-slate-800">Legal</h2>
            <ul className="mt-3 space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[10px] transition-colors hover:text-[#1476d4]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div data-reveal="item">
            <h2 className="text-xs font-semibold text-slate-800">Contact Us</h2>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-2 text-[10px]">
                <FooterIcon name="location" />
                Kigali, Rwanda
              </li>
              <li>
                <a
                  href="tel:+250780000000"
                  className="flex items-start gap-2 text-[10px] transition-colors hover:text-[#1476d4]"
                >
                  <FooterIcon name="phone" />
                  <span className="min-w-0">+250 780 000 000</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@alsabahiyah.rw"
                  className="flex items-start gap-2 text-[10px] transition-colors hover:text-[#1476d4]"
                >
                  <FooterIcon name="email" />
                  <span className="min-w-0 break-all">info@alsabahiyah.rw</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.alsabahiyah.rw"
                  className="flex items-start gap-2 text-[10px] transition-colors hover:text-[#1476d4]"
                >
                  <FooterIcon name="web" />
                  <span className="min-w-0 break-all">www.alsabahiyah.rw</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div data-reveal className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-4 text-[9px] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Al-Sabahiyah Rwanda Recruitment. All rights reserved.</p>
          <p className="uppercase tracking-wide">Licensed by Ministry of Labor</p>
        </div>
      </div>
    </footer>
  );
}
