import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Wrench, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
      </div>

      {/* Parallax Background Layers */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Abstract mechanical patterns - deep layer */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <circle cx="200" cy="300" r="150" stroke="currentColor" strokeWidth="1" fill="none" className="text-primary" />
            <circle cx="800" cy="700" r="200" stroke="currentColor" strokeWidth="1" fill="none" className="text-primary" />
            <path d="M100,500 Q500,200 900,500" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-primary/50" />
          </svg>
        </div>
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Floating gear elements - mid layer */}
        <div className="absolute top-1/4 left-10 opacity-10">
          <Wrench className="w-32 h-32 text-primary animate-float" />
        </div>
        <div className="absolute bottom-1/3 right-10 opacity-10">
          <svg viewBox="0 0 100 100" className="w-40 h-40 animate-gear">
            <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
            <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
            {[...Array(8)].map((_, i) => (
              <rect
                key={i}
                x="45"
                y="10"
                width="10"
                height="15"
                fill="currentColor"
                className="text-primary"
                transform={`rotate(${i * 45} 50 50)`}
              />
            ))}
          </svg>
        </div>
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background pointer-events-none" />

      {/* Main Content */}
      <motion.div
        style={{ opacity }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Работаем ежедневно с 8:00 до 21:00</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Профессиональный автосервис в{" "}
            <span className="text-gradient-gold glow-text">Архангельске</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Диагностика, ремонт и обслуживание — с гарантией качества 
            для сурового климата <span className="text-foreground font-medium">Поморья</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button 
              className="btn-gold text-base"
              onClick={() => document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" })}
            >
              Рассчитать стоимость ремонта
            </Button>
            <Button 
              variant="outline"
              className="btn-glass"
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
            className="grid grid-cols-3 gap-6 max-w-2xl mx-auto"
          >
            {[
              { icon: Clock, value: "15+", label: "лет опыта" },
              { icon: Wrench, value: "10K+", label: "авто отремонтировано" },
              { icon: Shield, value: "12", label: "месяцев гарантии" },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-5 h-5 mx-auto mb-2 text-primary" />
                <div className="font-display text-2xl md:text-3xl font-bold text-gradient-gold">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
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
          <span className="text-xs text-muted-foreground">Листайте вниз</span>
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
