import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-background">
      <Navbar />

      {/* Scrollytelling hero section */}
      <section className="relative">
        <ScrollyCanvas />
        <Overlay />
      </section>

      {/* Content sections */}
      <div id="work">
        <Projects />
      </div>

      <About />
      <Contact />
      <Footer />
    </main>
  );
}
