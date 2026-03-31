import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TournamentInfo from "@/components/TournamentInfo";
import Players from "@/components/Players";
import Results from "@/components/Results";
import Prizes from "@/components/Prizes";
import Location from "@/components/Location";
import Sponsors from "@/components/Sponsors";
import DownloadPDF from "@/components/DownloadPDF";
import Registration from "@/components/Registration";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TournamentInfo />
      <Players />
      <Results />
      <Prizes />
      <Location />
      <Sponsors />
      <DownloadPDF />
      <Registration />
      <Footer />
    </main>
  );
}
