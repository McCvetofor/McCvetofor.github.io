import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Clock, Instagram, MessageCircle, Send } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="font-display font-bold text-primary-foreground text-lg">A</span>
              </div>
              <div>
                <span className="font-display font-bold text-lg">АвтоМастер</span>
                <span className="text-xs text-muted-foreground block -mt-1">Архангельск</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              Профессиональный автосервис в Архангельске. 
              Обслуживаем автомобили по всему Архангельскому региону.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-display font-semibold text-lg mb-4">Услуги</h3>
            <ul className="space-y-2">
              {[
                "Компьютерная диагностика",
                "Ремонт двигателя",
                "Ремонт подвески",
                "Кузовной ремонт",
                "Замена масел",
                "Шиномонтаж"
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-display font-semibold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+78182123456" className="hover:text-primary transition-colors">
                  +7 (8182) 123-456
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@avtomaster29.ru" className="hover:text-primary transition-colors">
                  info@avtomaster29.ru
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>г. Архангельск,<br />ул. Мастеровая, д. 15</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                <span>Ежедневно: 8:00 — 21:00</span>
              </li>
            </ul>
          </motion.div>

          {/* Region Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-display font-semibold text-lg mb-4">Регион</h3>
            <div className="glass rounded-2xl p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-gold">
                <span className="font-display text-2xl font-bold text-primary-foreground">29</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Обслуживаем автомобили по всей Архангельской области
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} АвтоМастер. Все права защищены.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Пользовательское соглашение
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
