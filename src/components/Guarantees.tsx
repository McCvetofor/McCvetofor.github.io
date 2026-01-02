import { motion } from "framer-motion";
import { Shield, CheckCircle, Clock, Award } from "lucide-react";

const guarantees = [
  {
    icon: Shield,
    title: "12 месяцев гарантии",
    description: "На все виды выполненных работ и установленные запчасти"
  },
  {
    icon: CheckCircle,
    title: "Честная диагностика",
    description: "Показываем реальное состояние автомобиля без навязывания лишних услуг"
  },
  {
    icon: Clock,
    title: "Точные сроки",
    description: "Выполняем работы в оговоренные сроки или делаем скидку"
  },
  {
    icon: Award,
    title: "Сертифицированные мастера",
    description: "Все специалисты прошли обучение и имеют подтвержденную квалификацию"
  }
];

const Guarantees = () => {
  return (
    <section id="guarantees" className="section-padding relative overflow-hidden bg-gradient-to-b from-background via-primary/[0.02] to-background">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            Наши гарантии
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Работаем <span className="text-gradient-gold">честно</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Мы ценим ваше доверие и гарантируем качество на каждом этапе обслуживания
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={guarantee.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-strong rounded-2xl p-8 relative overflow-hidden group"
            >
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex items-start gap-4">
                <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <guarantee.icon className="w-8 h-8 neon-icon" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {guarantee.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {guarantee.description}
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

export default Guarantees;
