import type { Metadata } from "next";
import JobOpportunitiesPage from "../components/JobOpportunitiesPage";

export const metadata: Metadata = {
  title: "Job Opportunities | Al-Sabahiyah Rwanda",
  description:
    "Explore international job opportunities for Rwandan talent with Al-Sabahiyah.",
};

export default function JobOpportunities() {
  return <JobOpportunitiesPage />;
}
