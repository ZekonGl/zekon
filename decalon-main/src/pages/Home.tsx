import Hero from '../components/Hero';
import ClientSlider from '../components/ClientSlider';
import SpecialOffer from '../components/SpecialOffer';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import CTABanner from '../components/CTABanner';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <ClientSlider />
      <SpecialOffer onNavigate={onNavigate} />
      <Services />
      <WhyChooseUs />
      <CTABanner onNavigate={onNavigate} />
    </>
  );
}
