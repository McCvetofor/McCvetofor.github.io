import { motion } from "framer-motion";
import { Settings, Wrench, Shield, Thermometer, Car, Gauge } from "lucide-react";

const advantages = [
  {
    icon: Thermometer,
    title: "Для северных дорог",
    description: "Решения, адаптированные под суровые условия Архангельской области"
  },
  {
    icon: Shield,
    title: "Гарантия качества",
    description: "12 месяцев гарантии на все виды работ и запчасти"
  },
  {
    icon: Wrench,
    title: "После зимы",
    description: "Полная диагностика ходовой после архангельской зимы"
  },
  {
    icon: Settings,
    title: "Морозоустойчиво",
    description: "Используем материалы для экстремальных температур до -40°C"
  },
  {
    icon: Car,
    title: "Специфика 29 региона",
    description: "Знаем все особенности эксплуатации авто в Поморье"
  },
  {
    icon: Gauge,
    title: "Точная диагностика",
    description: "Современное оборудование для компьютерной диагностики"
  }
];

const Advantages = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-primary/20 rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-primary/20 rounded-full" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            Почему выбирают нас
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Наши <span className="text-gradient-gold">преимущества</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Более 15 лет мы обслуживаем автомобили в Архангельске, 
            понимая все особенности северного климата
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-glass group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <advantage.icon className="w-6 h-6 neon-icon" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
