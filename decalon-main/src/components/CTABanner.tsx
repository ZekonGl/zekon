import { ArrowRight, TrendingUp } from 'lucide-react';

interface CTABannerProps {
  onNavigate: (page: string) => void;
}

export default function CTABanner({ onNavigate }: CTABannerProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1518FF] via-[#1518FF] to-[#0EF1E2] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white mb-6">
          <TrendingUp className="h-4 w-4" />
          <span className="text-sm font-medium">Join 500+ Businesses Already Moving with Us</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Move Your Cargo with Decalon — Get a Fast Quote Today
        </h2>

        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Experience the difference of working with the Caucasus region's most trusted logistics partner
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => onNavigate('contact')}
            className="group px-8 py-4 bg-white text-[#1518FF] rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-xl flex items-center justify-center gap-2"
          >
            Request Free Quote
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => onNavigate('about')}
            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#1518FF] transition-all"
          >
            Learn About Us
          </button>
        </div>
      </div>
    </section>
  );
}
