import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesGalleryReviews from "@/components/ServicesGalleryReviews";
import BookingContacts from "@/components/BookingContacts";

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar onScroll={handleScroll} />
      <HeroSection onScroll={handleScroll} />
      <ServicesGalleryReviews onScroll={handleScroll} />
      <BookingContacts onScroll={handleScroll} />
    </div>
  );
}
