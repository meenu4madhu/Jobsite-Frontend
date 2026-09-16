import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import JobList from "../components/JobList";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Navbar />

      <main> 
        <section id="home" className="scroll-mt-24">
        <Hero />
        </section>
        <JobList />
        <ContactSection />
      </main>
      <Footer />
    </>

  )
}

export default Home