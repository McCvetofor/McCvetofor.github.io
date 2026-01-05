import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Advantages from "@/components/Advantages";
import Services from "@/components/Services";
import Guarantees from "@/components/Guarantees";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden snap-y snap-mandatory h-screen overflow-y-auto scroll-smooth">
      <Header />
      <main>
        <section className="snap-start">
          <Hero />
        </section>
        <section className="snap-start">
          <Advantages />
        </section>
        <section className="snap-start">
          <Services />
        </section>
        <section className="snap-start">
          <Guarantees />
        </section>
        <section className="snap-start">
          <About />
        </section>
        <section>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
