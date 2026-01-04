import { motion } from "framer-motion";
import { Award, Users, MapPin, Calendar, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-2 bg-primary/10 rounded-full">
              О нашей компании
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Знаем <span className="text-gradient-primary">Север</span>, понимаем ваш автомобиль
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
            </div>

            {/* Benefits list */}
            <div className="mt-8 space-y-3">
              {[
                "Честная диагностика без навязывания услуг",
                "Прозрачное ценообразование",
                "Гарантия на все виды работ",
                "Только оригинальные запчасти"
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mt-10">
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
                  className="bg-white rounded-xl p-5 border border-border shadow-soft"
                >
                  <stat.icon className="w-5 h-5 text-primary mb-2" />
                  <div className="font-display text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 relative overflow-hidden border border-border">
              {/* Abstract region illustration */}
              <div className="aspect-square relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {/* Decorative circles */}
                    <div className="absolute inset-8 border-2 border-primary/20 rounded-full" />
                    <div className="absolute inset-16 border-2 border-primary/30 rounded-full" />
                    <div className="absolute inset-24 border-2 border-primary/40 rounded-full" />
                    
                    {/* Center content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 shadow-glow">
                        <span className="font-display text-5xl font-bold text-white">29</span>
                      </div>
                      <h3 className="font-display text-2xl font-bold mb-2 text-foreground">Регион</h3>
                      <p className="text-muted-foreground text-sm">
                        Архангельская область
                      </p>
                    </div>

                    {/* Floating elements */}
                    <div className="absolute top-8 right-8 w-14 h-14 bg-white rounded-xl flex items-center justify-center animate-float shadow-soft border border-border">
                      <Award className="w-7 h-7 text-primary" />
                    </div>
                    <div className="absolute bottom-8 left-8 w-14 h-14 bg-white rounded-xl flex items-center justify-center animate-float animation-delay-400 shadow-soft border border-border">
                      <Users className="w-7 h-7 text-primary" />
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
