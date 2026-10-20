"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

function NavIcon({ name }: { name: string }) {
  if (name === "home") {
    return (
      <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-3">
        <path d="m2.5 9 7.02-6.03a.75.75 0 0 1 .98 0L17.5 9l-.98 1.14L16 9.7v6.55a1.25 1.25 0 0 1-1.25 1.25h-3.5v-5h-2.5v5h-3.5A1.25 1.25 0 0 1 4 16.25V9.7l-.52.44L2.5 9Z" />
      </svg>
    );
  }

  if (name === "jobs") {
    return (
      <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-3">
        <path d="M7 3.5A1.5 1.5 0 0 1 8.5 2h3A1.5 1.5 0 0 1 13 3.5V5h3.5A1.5 1.5 0 0 1 18 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5H7V3.5Zm1.5 0V5h3V3.5h-3ZM3.5 9v5.5h13V9h-4v1.5h-5V9h-4Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-3">
      <path d="M10 2a6 6 0 0 0-6 6c0 4.25 6 10 6 10s6-5.75 6-10a6 6 0 0 0-6-6Zm0 8.25A2.25 2.25 0 1 1 10 5.75a2.25 2.25 0 0 1 0 4.5Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="size-3.5">
      <path d="M4 10h11m-4.5-4.5L15 10l-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MenuIcon({ close = false }: { close?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
      className="size-5"
    >
      {close ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
    </svg>
  );
}

export default function Navbar({
  variant = "home",
}: {
  variant?: "home" | "jobs" | "application";
}) {
  const isJobsPage = variant === "jobs";
  const isApplicationPage = variant === "application";
  const navigation = [
    {
      label: "Home",
      href: isJobsPage || isApplicationPage ? "/" : "#home",
      icon: "home",
    },
    {
      label: "Job Opportunities",
      href: isJobsPage ? "#available-vacancies" : "/job-opportunities",
      icon: "jobs",
    },
    {
      label: "Track Application",
      href: isApplicationPage ? "#application-form" : "#track-application",
      icon: "track",
    },
  ];
  const [activeHref, setActiveHref] = useState(
    isJobsPage
      ? "#available-vacancies"
      : isApplicationPage
        ? "#application-form"
        : "#home",
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <>
      <header data-reveal className="fixed inset-x-0 top-0 z-50 h-16 border-b border-slate-200/70 bg-white/85 backdrop-blur-md lg:h-[78px]">
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-10">
          <a
            href={isJobsPage || isApplicationPage ? "/" : "#home"}
            onClick={() =>
              setActiveHref(isJobsPage || isApplicationPage ? "/" : "#home")
            }
            className="flex items-center"
            aria-label="Al-Sabahiyah home"
          >
            <Image
              src="/logoalsabahiyah.jpg"
              alt="Al-Sabahiyah Human Resources Consultancies"
              width={1055}
              height={241}
              priority
              className="h-auto w-[132px] sm:w-[205px]"
            />
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveHref(item.href)}
                aria-current={activeHref === item.href ? "page" : undefined}
                className={`group relative flex items-center gap-1.5 py-2 text-xs font-medium transition-[color,transform] duration-200 hover:scale-[1.03] active:scale-[0.98] motion-reduce:transform-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:bg-[#1476d4] after:transition-transform after:content-[''] ${
                  activeHref === item.href
                    ? "text-[#1476d4] after:scale-x-100"
                    : "text-slate-700 after:scale-x-0 hover:text-[#1476d4] hover:after:scale-x-100"
                }`}
              >
                <NavIcon name={item.icon} />
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={
              isJobsPage
                ? "/application-form"
                : isApplicationPage
                  ? "#application-form"
                  : "#opportunities"
            }
            className="inline-flex h-9 items-center gap-2 rounded-sm bg-[#1476d4] px-4 text-xs font-semibold text-white transition-[transform,background-color] duration-200 hover:scale-[1.03] hover:bg-[#0b58a8] active:scale-[0.98] motion-reduce:transform-none"
          >
            Apply Now
            <ArrowIcon />
          </a>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
            className="flex size-9 items-center justify-center rounded-sm border border-slate-200 text-slate-700 transition-[transform,color,border-color] duration-200 hover:scale-105 hover:border-[#1476d4] hover:text-[#1476d4] active:scale-95 motion-reduce:transform-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1476d4] md:hidden"
          >
            <MenuIcon close={isMobileMenuOpen} />
          </button>
        </div>
      </header>
      <button
        type="button"
        aria-label="Close navigation menu"
        tabIndex={isMobileMenuOpen ? 0 : -1}
        onClick={() => setIsMobileMenuOpen(false)}
        className={`fixed inset-0 z-[60] bg-slate-950/35 transition-opacity duration-300 motion-reduce:transition-none md:hidden ${
          isMobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!isMobileMenuOpen}
        className={`fixed right-3 top-[4.5rem] z-[70] max-h-[calc(100dvh-6rem)] w-[min(20rem,calc(100vw-1.5rem))] overflow-y-auto rounded-md border border-slate-200 border-t-2 border-t-[#1476d4] bg-white p-4 shadow-xl transition-[transform,opacity] duration-300 ease-out motion-reduce:transition-none md:hidden ${
          isMobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "pointer-events-none translate-x-[calc(100%+1rem)] opacity-0"
        }`}
      >
        <div className="mb-3 flex items-center justify-between border-b border-slate-100 pb-3">
          <span className="text-sm font-semibold text-slate-800">Menu</span>
          <button
            type="button"
            aria-label="Close navigation menu"
            tabIndex={isMobileMenuOpen ? 0 : -1}
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex size-8 items-center justify-center rounded-sm text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1476d4]"
          >
            <MenuIcon close />
          </button>
        </div>
        <nav aria-label="Mobile navigation links" className="grid gap-1">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              tabIndex={isMobileMenuOpen ? 0 : -1}
              onClick={() => {
                setActiveHref(item.href);
                setIsMobileMenuOpen(false);
              }}
              aria-current={activeHref === item.href ? "page" : undefined}
              className={`flex items-center gap-3 rounded-sm px-3 py-3 text-sm font-medium transition-[transform,color,background-color] duration-200 hover:scale-[1.02] hover:bg-blue-50 hover:text-[#1476d4] active:scale-[0.98] motion-reduce:transform-none ${
                activeHref === item.href
                  ? "border-l-2 border-[#f3c400] bg-[#e7f3ea] pl-[10px] text-[#118a45]"
                  : "text-slate-700"
              }`}
            >
              <NavIcon name={item.icon} />
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
      <div aria-hidden="true" className="h-16 shrink-0 lg:h-[78px]" />
    </>
  );
}
