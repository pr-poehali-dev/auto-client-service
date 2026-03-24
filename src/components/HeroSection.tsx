const HERO_IMG = "https://cdn.poehali.dev/projects/d29cc1fd-e31e-42a4-962c-b2700660945a/files/789d5c5e-5b26-4d1d-991d-8b74aa8770dd.jpg";

interface HeroSectionProps {
  onScroll: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export default function HeroSection({ onScroll }: HeroSectionProps) {
  return (
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
            <a href="#booking" onClick={(e) => onScroll(e, "#booking")}
              className="neon-btn text-white px-8 py-4 rounded text-base font-medium text-center"
              style={{ fontFamily: 'Oswald, sans-serif', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
              Записаться на сервис
            </a>
            <a href="#services" onClick={(e) => onScroll(e, "#services")}
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
  );
}
