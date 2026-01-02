import { motion } from "framer-motion";
import { 
  Cpu, 
  Cog, 
  PaintBucket, 
  Droplets, 
  CircleDot,
  Sparkles,
  Wrench,
  Battery
} from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "Компьютерная диагностика",
    description: "Полная диагностика всех систем автомобиля современным оборудованием",
    price: "от 1 500 ₽"
  },
  {
    icon: Cog,
    title: "Ремонт двигателя",
    description: "Капитальный и текущий ремонт двигателей любой сложности",
    price: "от 15 000 ₽"
  },
  {
    icon: Wrench,
    title: "Ремонт подвески",
    description: "Восстановление ходовой части после архангельских дорог",
    price: "от 3 000 ₽"
  },
  {
    icon: PaintBucket,
    title: "Кузовной ремонт",
    description: "Борьба с коррозией и последствиями реагентов",
    price: "от 5 000 ₽"
  },
  {
    icon: Droplets,
    title: "Замена масел",
    description: "Масла и жидкости для северной эксплуатации",
    price: "от 2 500 ₽"
  },
  {
    icon: CircleDot,
    title: "Шиномонтаж",
    description: "Сезонное обслуживание и хранение шин",
    price: "от 2 000 ₽"
  },
  {
    icon: Battery,
    title: "Электрика",
    description: "Диагностика и ремонт электрооборудования",
    price: "от 2 000 ₽"
  },
  {
    icon: Sparkles,
    title: "Детейлинг",
    description: "Профессиональный уход и защита кузова",
    price: "от 8 000 ₽"
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background gear decoration */}
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 opacity-[0.03]">
        <Cog className="w-[500px] h-[500px] animate-gear" />
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
            Что мы делаем
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Наши <span className="text-gradient-gold">услуги</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Полный спектр услуг по обслуживанию и ремонту автомобилей 
            с учётом особенностей северного климата
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="card-glass border-animated group cursor-pointer relative overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="p-4 rounded-2xl bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 neon-icon" />
                </div>
                
                <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-primary font-semibold">{service.price}</span>
                  <span className="text-xs text-muted-foreground group-hover:text-primary/80 transition-colors">
                    Подробнее →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
