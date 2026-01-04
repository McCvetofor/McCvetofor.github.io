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
    <section id="guarantees" className="section-padding section-alt relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-2 bg-primary/10 rounded-full">
            Наши гарантии
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Работаем <span className="text-gradient-primary">честно</span>
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
              className="bg-white rounded-2xl p-8 border border-border shadow-soft relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 hover:shadow-card"
            >
              {/* Accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
              
              <div className="relative z-10 flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                  <guarantee.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
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
