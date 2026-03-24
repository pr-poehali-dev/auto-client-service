import { useState } from "react";
import Icon from "@/components/ui/icon";

const navItems = [
  { label: "Главная", href: "#home" },
  { label: "О нас", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Галерея", href: "#gallery" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

interface NavbarProps {
  onScroll: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export default function Navbar({ onScroll }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    onScroll(e, href);
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-md bg-background/80">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" onClick={(e) => handleScroll(e, "#home")} className="flex items-center gap-3">
          <div className="w-8 h-8 neon-border border rounded flex items-center justify-center animate-pulse-neon">
            <Icon name="Settings" size={16} className="text-primary" />
          </div>
          <span className="text-lg font-semibold tracking-widest uppercase" style={{ fontFamily: 'Oswald, sans-serif' }}>
            Pro<span className="neon-text">Auto</span>
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
  );
}