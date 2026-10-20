import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Opportunities from "./components/Opportunities";
import RecruitmentProcess from "./components/RecruitmentProcess";
import SuccessStories from "./components/SuccessStories";
import TrustedPartner from "./components/TrustedPartner";
import ContactOffice from "./components/ContactOffice";
import Footer from "./components/Footer";
import ScrollMotion from "./components/ScrollMotion";

export default function Home() {
  return (
    <ScrollMotion>
      <main className="flex min-h-dvh flex-col bg-white text-slate-900">
        <Navbar />
        <Hero />
        <Opportunities />
        <RecruitmentProcess />
        <TrustedPartner />
        <SuccessStories />
        <ContactOffice />
        <Footer />
      </main>
    </ScrollMotion>
  );
}
