import type { Metadata } from "next";
import ApplicationFormPage from "../components/ApplicationFormPage";

export const metadata: Metadata = {
  title: "Application Form | Al-Sabahiyah Rwanda",
  description:
    "Apply for international career opportunities with Al-Sabahiyah Rwanda.",
};

export default function ApplicationForm() {
  return <ApplicationFormPage />;
}
