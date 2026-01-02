import { motion } from "framer-motion";
import { Award, Users, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background map decoration */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg viewBox="0 0 800 600" className="w-full h-full">
          {/* Simplified Arkhangelsk region outline */}
          <path
            d="M200,100 C300,80 400,120 500,100 L550,200 C530,300 540,400 520,500 L400,520 C300,510 200,530 100,500 L80,300 C100,200 150,150 200,100 Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-primary"
          />
          <circle cx="350" cy="280" r="8" fill="currentColor" className="text-primary" />
          <text x="370" y="285" className="text-xs fill-primary font-medium">Архангельск</text>
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              О нашей компании
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Знаем <span className="text-gradient-gold">Север</span>, понимаем ваш автомобиль
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Более 15 лет мы обслуживаем автомобили в Архангельске и знаем все 
                особенности эксплуатации техники в условиях сурового северного климата.
              </p>
              <p>
                Наши мастера — сертифицированные специалисты с многолетним опытом. 
                Мы используем только качественные материалы, адаптированные для 
                экстремальных температур Поморья.
              </p>
              <p>
                Каждый клиент получает честную диагностику, прозрачные цены и 
                гарантию на все виды работ. Мы не навязываем лишнего — делаем 
                только то, что действительно необходимо вашему автомобилю.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              {[
                { icon: Calendar, value: "С 2009", label: "года работаем" },
                { icon: Users, value: "12", label: "мастеров в команде" },
                { icon: Award, value: "98%", label: "довольных клиентов" },
                { icon: MapPin, value: "29", label: "регион обслуживания" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-glass p-4"
                >
                  <stat.icon className="w-5 h-5 text-primary mb-2" />
                  <div className="font-display text-2xl font-bold text-gradient-gold">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image/Visual placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass rounded-3xl p-8 relative overflow-hidden">
              {/* Abstract car service illustration */}
              <div className="aspect-square relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {/* Decorative circles */}
                    <div className="absolute inset-8 border border-primary/20 rounded-full" />
                    <div className="absolute inset-16 border border-primary/30 rounded-full" />
                    <div className="absolute inset-24 border border-primary/40 rounded-full" />
                    
                    {/* Center content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 glow-gold">
                        <span className="font-display text-4xl font-bold text-primary-foreground">29</span>
                      </div>
                      <h3 className="font-display text-2xl font-bold mb-2">Регион</h3>
                      <p className="text-muted-foreground text-sm">
                        Архангельская область
                      </p>
                    </div>

                    {/* Floating elements */}
                    <div className="absolute top-8 right-8 w-12 h-12 glass rounded-xl flex items-center justify-center animate-float">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div className="absolute bottom-8 left-8 w-12 h-12 glass rounded-xl flex items-center justify-center animate-float animation-delay-400">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
