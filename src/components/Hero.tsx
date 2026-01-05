import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Wrench, Shield, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  const scrollToServices = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Hero Background Image - only at top, fades on scroll */}
      <motion.div 
        style={{ opacity: bgOpacity }}
        className="absolute inset-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Uniform gray overlay for text readability */}
        <div className="absolute inset-0 bg-gray-900/60" />
      </motion.div>

      {/* Main Content */}
      <motion.div
        style={{ opacity, y: y1 }}
        className="container mx-auto px-4 relative z-10 pt-24"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Working hours badge - redesigned */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm px-5 py-3 rounded-full mb-8 shadow-soft border border-border"
          >
            <div className="flex items-center gap-2 text-primary">
              <Clock className="w-4 h-4" />
              <span className="font-semibold text-sm">8:00 — 21:00</span>
            </div>
            <div className="w-px h-4 bg-border" />
            <span className="text-sm text-muted-foreground">без выходных</span>
            <div className="w-px h-4 bg-border" />
            <a href="tel:+78182123456" className="flex items-center gap-1 text-primary hover:underline">
              <Phone className="w-3.5 h-3.5" />
              <span className="text-sm font-medium">123-456</span>
            </a>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-none tracking-tight">
              <span className="text-white drop-shadow-lg block">Профессиональный</span>
              <span className="relative inline-block mt-2">
                <span className="bg-gradient-to-r from-primary via-sky-400 to-primary bg-clip-text text-transparent">
                  автосервис
                </span>
              </span>
            </h1>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/50" />
              <span className="text-white/90 text-xl md:text-2xl font-light tracking-wide">
                в Архангельске
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/50" />
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow"
          >
            Диагностика, ремонт и обслуживание — с гарантией качества 
            для сурового климата <span className="font-semibold">Поморья</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button 
              className="btn-primary text-base"
              onClick={() => document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" })}
            >
              Рассчитать стоимость ремонта
            </Button>
            <Button 
              variant="outline"
              className="bg-white/90 backdrop-blur-sm border-white text-foreground hover:bg-white"
              onClick={scrollToServices}
            >
              Смотреть услуги
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-4 max-w-lg mx-auto"
          >
            {[
              { icon: Clock, value: "15+", label: "лет опыта" },
              { icon: Wrench, value: "10K+", label: "авто" },
              { icon: Shield, value: "12", label: "мес. гарантии" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-soft border border-white/50">
                <stat.icon className="w-5 h-5 mx-auto mb-2 text-primary" />
                <div className="font-display text-2xl md:text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={scrollToServices}
        >
          <span className="text-xs text-white/80 drop-shadow">Листайте вниз</span>
          <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-soft">
            <ChevronDown className="w-4 h-4 text-primary" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
