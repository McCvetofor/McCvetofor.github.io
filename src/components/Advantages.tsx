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
    <section className="section-padding section-alt relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-2 bg-primary/10 rounded-full">
            Почему выбирают нас
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Наши <span className="text-gradient-primary">преимущества</span>
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
              className="card-styled group cursor-pointer bg-white"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <advantage.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
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
