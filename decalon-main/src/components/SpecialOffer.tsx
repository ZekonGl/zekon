import { Gift } from 'lucide-react';

interface SpecialOfferProps {
  onNavigate: (page: string) => void;
}

export default function SpecialOffer({ onNavigate }: SpecialOfferProps) {
  return (
    <section className="py-16 bg-gradient-to-r from-[#1518FF] to-[#0EF1E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <Gift className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                New Customers: Get $100 Off Your First Shipment
              </h3>
              <p className="text-white/90">
                Start your journey with Zekon and experience world-class logistics service
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 bg-white text-[#1518FF] rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-xl whitespace-nowrap"
          >
            Claim Offer
          </button>
        </div>
      </div>
    </section>
  );
}
