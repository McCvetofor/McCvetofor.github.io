import { motion } from "framer-motion";
import { 
  Cpu, 
  Cog, 
  PaintBucket, 
  Droplets, 
  CircleDot,
  Sparkles,
  Wrench,
  Battery,
  ArrowRight
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
    <section id="services" className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-2 bg-primary/10 rounded-full">
            Что мы делаем
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Наши <span className="text-gradient-primary">услуги</span>
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
              className="bg-white rounded-2xl p-6 border border-border shadow-soft group cursor-pointer relative overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="font-display text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-primary font-bold text-lg">{service.price}</span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                    Подробнее <ArrowRight className="w-3 h-3" />
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
