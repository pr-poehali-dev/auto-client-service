import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/d29cc1fd-e31e-42a4-962c-b2700660945a/files/789d5c5e-5b26-4d1d-991d-8b74aa8770dd.jpg";
const MECHANIC_IMG = "https://cdn.poehali.dev/projects/d29cc1fd-e31e-42a4-962c-b2700660945a/files/ba702409-d031-488f-a0f8-62ab30007f9d.jpg";
const CAR_IMG = "https://cdn.poehali.dev/projects/d29cc1fd-e31e-42a4-962c-b2700660945a/files/bef88b47-fdde-482c-b5d1-e967b968f45a.jpg";

const services = [
  { icon: "Cpu", title: "Компьютерная диагностика", desc: "Профессиональное сканирование всех систем автомобиля современным оборудованием.", price: "от 1 500 ₽" },
  { icon: "Settings", title: "Техническое обслуживание", desc: "Замена масла, фильтров, тормозных колодок и плановый сервис любых марок.", price: "от 2 500 ₽" },
  { icon: "Zap", title: "Электрика и электроника", desc: "Ремонт проводки, диагностика и замена электронных блоков управления.", price: "от 2 000 ₽" },
  { icon: "Shield", title: "Кузовной ремонт", desc: "Устранение вмятин, царапин, покраска отдельных элементов и полная покраска.", price: "от 5 000 ₽" },
  { icon: "Wind", title: "Обслуживание кондиционера", desc: "Заправка хладагентом, чистка системы, замена компрессора.", price: "от 1 800 ₽" },
  { icon: "Activity", title: "Ходовая часть", desc: "Ремонт подвески, замена амортизаторов, стоек, рулевых наконечников.", price: "от 3 000 ₽" },
];

const reviews = [
  { name: "Алексей М.", car: "BMW 5 Series", text: "Отличный сервис! Сделали диагностику и заменили ходовую за один день. Цены адекватные, мастера знают своё дело.", rating: 5 },
  { name: "Ирина К.", car: "Toyota Camry", text: "Обратилась с проблемой в электрике, которую не могли найти в двух других сервисах. Здесь определили и устранили за 3 часа.", rating: 5 },
  { name: "Дмитрий П.", car: "Mercedes GLE", text: "Давно ищу надёжный сервис для своего Мерседеса. Наконец нашёл — профессионалы своего дела, оборудование на высоте.", rating: 5 },
  { name: "Наталья В.", car: "Volkswagen Tiguan", text: "Записалась онлайн, приехала точно по времени. Ждала в комфортной зоне ожидания. Всё чётко и без лишних трат.", rating: 4 },
  { name: "Сергей Л.", car: "Audi A6", text: "Профессиональный подход, объяснили всё доступным языком. Кузовной ремонт сделали идеально, не отличить от заводского.", rating: 5 },
  { name: "Марина Г.", car: "Hyundai Tucson", text: "Третий раз приезжаю сюда. Стабильное качество, честные цены и очень вежливый персонал. Рекомендую всем!", rating: 5 },
];

const gallery = [
  { img: HERO_IMG, caption: "Современные подъёмники" },
  { img: MECHANIC_IMG, caption: "Мастера высокого класса" },
  { img: CAR_IMG, caption: "Результат нашей работы" },
  { img: HERO_IMG, caption: "Диагностическое оборудование" },
  { img: MECHANIC_IMG, caption: "Точность и аккуратность" },
  { img: CAR_IMG, caption: "Детейлинг и полировка" },
];

const navItems = [
  { label: "Главная", href: "#home" },
  { label: "О нас", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Галерея", href: "#gallery" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Icon key={i} name="Star" size={14} className={i < count ? "text-amber-400 fill-amber-400" : "text-gray-600"} />
    ))}
  </div>
);

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", car: "", date: "", service: "", comment: "" });
  const [sent, setSent] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-md bg-background/80">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" onClick={(e) => handleScroll(e, "#home")} className="flex items-center gap-3">
            <div className="w-8 h-8 neon-border border rounded flex items-center justify-center animate-pulse-neon">
              <Icon name="Settings" size={16} className="text-primary" />
            </div>
            <span className="text-lg font-semibold tracking-widest uppercase" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Auto<span className="neon-text">Pro</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={(e) => handleScroll(e, item.href)} className="nav-link">
                {item.label}
              </a>
            ))}
          </div>

          <a href="#booking" onClick={(e) => handleScroll(e, "#booking")}
            className="hidden md:flex neon-btn text-white px-5 py-2 text-sm font-medium rounded tracking-wide"
            style={{ fontFamily: 'Oswald, sans-serif', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Записаться
          </a>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-muted-foreground hover:text-primary transition-colors">
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={(e) => handleScroll(e, item.href)}
                className="nav-link text-base py-1">
                {item.label}
              </a>
            ))}
            <a href="#booking" onClick={(e) => handleScroll(e, "#booking")}
              className="neon-btn text-white px-5 py-2 text-sm font-medium rounded text-center mt-2"
              style={{ fontFamily: 'Oswald, sans-serif', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Записаться
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center tech-grid scan-line pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <img src={HERO_IMG} alt="Автосервис" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6 animate-fade-up">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-xs uppercase tracking-widest font-medium" style={{ fontFamily: 'Oswald, sans-serif' }}>
                Профессиональный автосервис
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-up delay-100"
              style={{ fontFamily: 'Oswald, sans-serif', lineHeight: 1.05 }}>
              ТОЧНОСТЬ.<br />
              <span className="neon-text">НАДЁЖНОСТЬ.</span><br />
              РЕЗУЛЬТАТ.
            </h1>

            <p className="text-lg text-muted-foreground mb-10 leading-relaxed animate-fade-up delay-200 max-w-lg">
              Профессиональное обслуживание автомобилей любых марок. Современное оборудование, опытные мастера и гарантия на все работы.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
              <a href="#booking" onClick={(e) => handleScroll(e, "#booking")}
                className="neon-btn text-white px-8 py-4 rounded text-base font-medium text-center"
                style={{ fontFamily: 'Oswald, sans-serif', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                Записаться на сервис
              </a>
              <a href="#services" onClick={(e) => handleScroll(e, "#services")}
                className="border border-border hover:border-primary/50 text-foreground px-8 py-4 rounded text-base font-medium text-center transition-all hover:bg-primary/5"
                style={{ fontFamily: 'Oswald, sans-serif', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                Наши услуги
              </a>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-border/50 bg-background/60 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: "10+", label: "Лет опыта" },
              { num: "5 000+", label: "Авто обслужено" },
              { num: "98%", label: "Довольных клиентов" },
              { num: "12", label: "Мастеров в штате" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="neon-text text-2xl md:text-3xl font-bold" style={{ fontFamily: 'Oswald, sans-serif' }}>{s.num}</div>
                <div className="text-muted-foreground text-xs mt-1 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 relative">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 stripe-bg" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="corner-accent relative">
                <img src={MECHANIC_IMG} alt="Мастера" className="w-full h-[480px] object-cover rounded-sm" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-sm" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="border neon-border rounded p-4 backdrop-blur-sm bg-background/40">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Icon name="Award" size={20} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">Сертифицированные специалисты</div>
                        <div className="text-xs text-muted-foreground">Прошли обучение у производителей</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-primary" />
                <span className="text-primary text-xs uppercase tracking-widest" style={{ fontFamily: 'Oswald, sans-serif' }}>О нас</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Oswald, sans-serif' }}>
                ЭКСПЕРТИЗА,<br /><span className="neon-text">КОТОРОЙ ДОВЕРЯЮТ</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Мы работаем с 2014 года и за это время обслужили более 5 000 автомобилей.
                Наши мастера регулярно проходят обучение и сертификацию, а оборудование
                соответствует стандартам официальных дилерских центров.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Мы специализируемся на автомобилях европейских, японских и корейских марок.
                Прозрачное ценообразование, письменная гарантия на все выполненные работы
                и только оригинальные запасные части.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "CheckCircle", text: "Гарантия на работы 12 месяцев" },
                  { icon: "Clock", text: "Срочный ремонт за 24 часа" },
                  { icon: "Package", text: "Только оригинальные запчасти" },
                  { icon: "Car", text: "Все марки автомобилей" },
                ].map((f) => (
                  <div key={f.text} className="flex items-start gap-3">
                    <Icon name={f.icon} fallback="CheckCircle" size={18} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{f.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="tech-divider mx-6" />

      {/* SERVICES */}
      <section id="services" className="py-24 tech-grid">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary text-xs uppercase tracking-widest" style={{ fontFamily: 'Oswald, sans-serif' }}>Что мы делаем</span>
              <div className="h-px w-8 bg-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Oswald, sans-serif' }}>
              НАШИ <span className="neon-text">УСЛУГИ</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="tech-card rounded-sm p-6 corner-accent">
                <div className="w-12 h-12 rounded bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                  <Icon name={s.icon} fallback="Settings" size={22} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.05em' }}>
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="neon-text font-semibold text-sm" style={{ fontFamily: 'Oswald, sans-serif' }}>{s.price}</span>
                  <a href="#booking" onClick={(e) => handleScroll(e, "#booking")}
                    className="text-xs text-primary hover:underline flex items-center gap-1 transition-colors">
                    Записаться <Icon name="ArrowRight" size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="tech-divider mx-6" />

      {/* GALLERY */}
      <section id="gallery" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary text-xs uppercase tracking-widest" style={{ fontFamily: 'Oswald, sans-serif' }}>Наши работы</span>
              <div className="h-px w-8 bg-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Oswald, sans-serif' }}>
              ГАЛЕРЕЯ <span className="neon-text">РАБОТ</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
              Фотографии нашего оборудования, мастерской и выполненных работ
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((g, i) => (
              <div key={i} className="relative group overflow-hidden rounded-sm border border-border hover:border-primary/40 transition-all duration-300">
                <img src={g.img} alt={g.caption}
                  className="w-full h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium text-white" style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.05em' }}>
                    {g.caption}
                  </p>
                </div>
                <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity animate-pulse-neon" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="tech-divider mx-6" />

      {/* REVIEWS */}
      <section id="reviews" className="py-24 tech-grid">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary text-xs uppercase tracking-widest" style={{ fontFamily: 'Oswald, sans-serif' }}>Клиенты о нас</span>
              <div className="h-px w-8 bg-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Oswald, sans-serif' }}>
              ОТЗЫВЫ <span className="neon-text">КЛИЕНТОВ</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="tech-card rounded-sm p-6 flex flex-col gap-4">
                <Stars count={r.rating} />
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">"{r.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-9 h-9 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center">
                    <Icon name="User" size={16} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.car}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                <a key={item.label} href={item.href} onClick={(e) => handleScroll(e, item.href)}
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
    </div>
  );
}