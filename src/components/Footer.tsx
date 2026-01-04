import { Phone, MapPin, Mail, Clock, Instagram, MessageCircle, Send, Car } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="font-display font-bold text-white text-xl">A</span>
              </div>
              <div>
                <span className="font-display font-bold text-xl">АвтоМастер</span>
                <span className="text-sm text-white/60 block">Архангельск</span>
              </div>
            </div>
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              Профессиональный автосервис с 15-летним опытом работы. 
              Качественный ремонт и обслуживание автомобилей в Архангельске.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Услуги</h3>
            <ul className="space-y-3">
              {[
                "Компьютерная диагностика",
                "Ремонт двигателя",
                "Ремонт подвески",
                "Кузовной ремонт",
                "Замена масел",
                "Шиномонтаж"
              ].map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection("#services")}
                    className="text-white/70 text-sm hover:text-primary transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="text-white/70 text-sm block">г. Архангельск,</span>
                  <span className="text-white text-sm font-medium">ул. Мастеровая, д. 15</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <a href="tel:+78182123456" className="text-white font-medium hover:text-primary transition-colors">
                  +7 (8182) 123-456
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <a href="mailto:info@avtomaster29.ru" className="text-white/70 text-sm hover:text-primary transition-colors">
                  info@avtomaster29.ru
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="text-white font-medium text-sm">8:00 — 21:00</span>
                  <span className="text-white/50 text-sm block">ежедневно</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Region Badge */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Регион</h3>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="font-display text-2xl font-bold text-white">29</span>
                </div>
                <div>
                  <span className="text-white font-semibold block">Архангельская</span>
                  <span className="text-white/60 text-sm">область</span>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Обслуживаем автомобили по всему региону. Знаем особенности северного климата.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <Car className="w-4 h-4" />
              <span>© {currentYear} АвтоМастер. Все права защищены.</span>
            </div>
            <div className="flex gap-6 text-sm text-white/50">
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
