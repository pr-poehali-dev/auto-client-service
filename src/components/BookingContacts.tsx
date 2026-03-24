import { useState } from "react";
import Icon from "@/components/ui/icon";

const services = [
  { title: "Компьютерная диагностика" },
  { title: "Техническое обслуживание" },
  { title: "Электрика и электроника" },
  { title: "Кузовной ремонт" },
  { title: "Обслуживание кондиционера" },
  { title: "Ходовая часть" },
];

const navItems = [
  { label: "Главная", href: "#home" },
  { label: "О нас", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Галерея", href: "#gallery" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

interface BookingContactsProps {
  onScroll: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export default function BookingContacts({ onScroll }: BookingContactsProps) {
  const [form, setForm] = useState({ name: "", phone: "", car: "", date: "", service: "", comment: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <div className="tech-divider mx-6" />

      {/* BOOKING */}
      <section id="booking" className="py-24 relative">
        <div className="absolute inset-0 stripe-bg opacity-50" />
        <div className="relative max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary text-xs uppercase tracking-widest" style={{ fontFamily: 'Oswald, sans-serif' }}>Онлайн запись</span>
              <div className="h-px w-8 bg-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Oswald, sans-serif' }}>
              ЗАПИСЬ НА <span className="neon-text">СЕРВИС</span>
            </h2>
            <p className="text-muted-foreground mt-4">Заполните форму и мы свяжемся с вами для подтверждения</p>
          </div>

          {sent ? (
            <div className="tech-card rounded-sm p-12 text-center corner-accent">
              <div className="w-16 h-16 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center mx-auto mb-6 animate-pulse-neon">
                <Icon name="CheckCircle" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Oswald, sans-serif' }}>Заявка принята!</h3>
              <p className="text-muted-foreground">Мы свяжемся с вами в течение 30 минут для подтверждения записи.</p>
              <button onClick={() => setSent(false)}
                className="mt-8 neon-btn text-white px-6 py-3 rounded text-sm"
                style={{ fontFamily: 'Oswald, sans-serif', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Новая запись
              </button>
            </div>
          ) : (
            <div className="tech-card rounded-sm p-8 corner-accent">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-muted-foreground uppercase tracking-wider mb-2"
                      style={{ fontFamily: 'Oswald, sans-serif' }}>Ваше имя *</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Иван Иванов"
                      className="w-full bg-secondary border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-muted-foreground uppercase tracking-wider mb-2"
                      style={{ fontFamily: 'Oswald, sans-serif' }}>Телефон *</label>
                    <input
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full bg-secondary border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-muted-foreground uppercase tracking-wider mb-2"
                      style={{ fontFamily: 'Oswald, sans-serif' }}>Марка и модель авто</label>
                    <input
                      value={form.car}
                      onChange={(e) => setForm({ ...form, car: e.target.value })}
                      placeholder="BMW 5 Series 2020"
                      className="w-full bg-secondary border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-muted-foreground uppercase tracking-wider mb-2"
                      style={{ fontFamily: 'Oswald, sans-serif' }}>Желаемая дата</label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="w-full bg-secondary border border-border rounded px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-muted-foreground uppercase tracking-wider mb-2"
                    style={{ fontFamily: 'Oswald, sans-serif' }}>Вид услуги</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full bg-secondary border border-border rounded px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  >
                    <option value="">Выберите услугу...</option>
                    {services.map((s) => (
                      <option key={s.title} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-muted-foreground uppercase tracking-wider mb-2"
                    style={{ fontFamily: 'Oswald, sans-serif' }}>Описание проблемы</label>
                  <textarea
                    value={form.comment}
                    onChange={(e) => setForm({ ...form, comment: e.target.value })}
                    placeholder="Опишите, что беспокоит или что нужно сделать..."
                    rows={3}
                    className="w-full bg-secondary border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  />
                </div>

                <button type="submit"
                  className="w-full neon-btn text-white py-4 rounded font-medium text-sm"
                  style={{ fontFamily: 'Oswald, sans-serif', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                  Отправить заявку
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            </div>
          )}
        </div>
      </section>

      <div className="tech-divider mx-6" />

      {/* CONTACTS */}
      <section id="contacts" className="py-24 tech-grid">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary text-xs uppercase tracking-widest" style={{ fontFamily: 'Oswald, sans-serif' }}>Найдите нас</span>
              <div className="h-px w-8 bg-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Oswald, sans-serif' }}>
              <span className="neon-text">КОНТАКТЫ</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: "MapPin", title: "Адрес", lines: ["ул. Автомобильная, 45", "Москва, 123456"] },
              { icon: "Phone", title: "Телефон", lines: ["+7 (495) 123-45-67", "+7 (495) 765-43-21"] },
              { icon: "Clock", title: "Режим работы", lines: ["Пн-Пт: 8:00 — 20:00", "Сб-Вс: 9:00 — 18:00"] },
            ].map((c) => (
              <div key={c.title} className="tech-card rounded-sm p-6 corner-accent text-center">
                <div className="w-12 h-12 rounded bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Icon name={c.icon} fallback="MapPin" size={22} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider"
                  style={{ fontFamily: 'Oswald, sans-serif' }}>{c.title}</h3>
                {c.lines.map((l) => (
                  <p key={l} className="text-muted-foreground text-sm">{l}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="relative h-64 rounded-sm border border-border overflow-hidden tech-card">
            <div className="absolute inset-0 tech-grid flex items-center justify-center">
              <div className="text-center">
                <Icon name="Map" size={40} className="text-primary/40 mx-auto mb-3" />
                <p className="text-muted-foreground text-sm">Карта будет добавлена после указания адреса</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 neon-border border rounded flex items-center justify-center">
                <Icon name="Settings" size={14} className="text-primary" />
              </div>
              <span className="font-semibold tracking-widest uppercase text-sm" style={{ fontFamily: 'Oswald, sans-serif' }}>
                Auto<span className="neon-text">Pro</span> Service
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} onClick={(e) => onScroll(e, item.href)}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
                  style={{ fontFamily: 'Oswald, sans-serif' }}>
                  {item.label}
                </a>
              ))}
            </div>

            <p className="text-xs text-muted-foreground">© 2025 AutoPro Service. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
