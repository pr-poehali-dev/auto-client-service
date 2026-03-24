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

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Icon key={i} name="Star" size={14} className={i < count ? "text-amber-400 fill-amber-400" : "text-gray-600"} />
    ))}
  </div>
);

interface ServicesGalleryReviewsProps {
  onScroll: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export default function ServicesGalleryReviews({ onScroll }: ServicesGalleryReviewsProps) {
  return (
    <>
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
                  <a href="#booking" onClick={(e) => onScroll(e, "#booking")}
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
    </>
  );
}
