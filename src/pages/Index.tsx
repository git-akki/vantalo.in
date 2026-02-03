import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import BookCall from "@/components/BookCall";
import Contact from "@/components/Contact";
import Articles from "@/components/Articles";
import BookingTrust from "@/components/BookingTrust";
import ProjectAudit from "@/components/ProjectAudit";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Brands />
      <Services />
      <Process />
      <Projects />
      <Testimonials />
      <ProjectAudit />
      <Articles />

      <About />
      <BookCall />
      <BookingTrust />
      <Contact />
    </Layout>
  );
};

export default Index;
