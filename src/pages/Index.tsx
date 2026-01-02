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
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Advantages />
        <Services />
        <Guarantees />
        <About />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
