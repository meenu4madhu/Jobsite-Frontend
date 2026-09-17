
import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import JobList from "../components/JobList";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

function Home() {
  const [refreshJobs, setRefreshJobs] = useState(0);

  const handleJobPosted = () => {
    setRefreshJobs((prev) => prev + 1);
  };

  return (
    <>
      <Navbar onJobPosted={handleJobPosted} />

      <main>
        <section id="home" className="scroll-mt-24">
          <Hero />
        </section>

        <JobList refreshJobs={refreshJobs} />

        <ContactSection />
      </main>

      <Footer />
    </>
  );
}

export default Home;

