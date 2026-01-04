import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Phone, MapPin, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const services = [
  "Компьютерная диагностика",
  "Ремонт двигателя",
  "Ремонт подвески",
  "Кузовной ремонт",
  "Замена масел",
  "Шиномонтаж",
  "Электрика",
  "Детейлинг",
  "Другое"
];

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", phone: "", service: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contacts" className="section-padding bg-gradient-to-b from-background to-muted relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-2 bg-primary/10 rounded-full">
            Свяжитесь с нами
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Оставьте <span className="text-gradient-primary">заявку</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Мы перезвоним в течение 15 минут и ответим на все ваши вопросы
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-5"
          >
            {[
              {
                icon: MapPin,
                title: "Адрес",
                main: "г. Архангельск, ул. Мастеровая, д. 15",
                sub: "Рядом с ТЦ \"Северный\""
              },
              {
                icon: Phone,
                title: "Телефон",
                main: "+7 (8182) 123-456",
                sub: "Звоните, будем рады помочь!",
                href: "tel:+78182123456"
              },
              {
                icon: Clock,
                title: "Режим работы",
                main: "Ежедневно: 8:00 — 21:00",
                sub: "Без выходных и праздников"
              },
              {
                icon: Mail,
                title: "Email",
                main: "info@avtomaster29.ru",
                sub: "Ответим в течение часа",
                href: "mailto:info@avtomaster29.ru"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-5 border border-border shadow-soft flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-1 text-foreground">{item.title}</h3>
                  {item.href ? (
                    <a href={item.href} className="text-primary hover:underline font-medium">
                      {item.main}
                    </a>
                  ) : (
                    <p className="text-foreground font-medium">{item.main}</p>
                  )}
                  <p className="text-sm text-muted-foreground mt-1">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl p-8 border border-border shadow-card relative overflow-hidden">
              {/* Accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center py-16 relative z-10"
                  >
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-2 text-foreground">
                      Заявка отправлена!
                    </h3>
                    <p className="text-muted-foreground">
                      Мы перезвоним вам в течение 15 минут
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5 relative z-10"
                  >
                    <div>
                      <label className="text-sm font-medium mb-2 block text-foreground">Ваше имя</label>
                      <Input
                        placeholder="Иван Петров"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-muted border-border focus:border-primary h-12"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block text-foreground">Телефон</label>
                      <Input
                        type="tel"
                        placeholder="+7 (___) ___-__-__"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-muted border-border focus:border-primary h-12"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block text-foreground">Услуга</label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => setFormData({ ...formData, service: value })}
                      >
                        <SelectTrigger className="bg-muted border-border focus:border-primary h-12">
                          <SelectValue placeholder="Выберите услугу" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border-border">
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block text-foreground">
                        Опишите проблему
                      </label>
                      <Textarea
                        placeholder="Укажите модель автомобиля и опишите проблему..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-muted border-border focus:border-primary min-h-[120px] resize-none"
                      />
                    </div>

                    <Button type="submit" className="btn-primary w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Отправить заявку
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
