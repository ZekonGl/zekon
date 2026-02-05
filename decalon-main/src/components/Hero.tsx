import { ArrowRight, Play } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-block px-4 py-2 bg-[#0EF1E2]/10 border border-[#0EF1E2]/20 rounded-full text-sm font-medium text-[#1518FF] mb-6">
              Trusted by Leading Importers and Exporters
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Global Multimodal Logistics –
              <span className="text-[#1518FF]"> Air, Sea, Road & Rail</span> with Confidence
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Zekong Global coordinates time-critical, high-value shipments with disciplined operations across air, sea, road, and rail networks—end to end.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="group px-8 py-4 bg-[#1518FF] text-white rounded-lg font-semibold hover:bg-[#1518FF]/90 transition-all shadow-lg shadow-[#1518FF]/20 hover:shadow-xl hover:shadow-[#1518FF]/30 flex items-center justify-center gap-2"
              >
                Get Free Quote
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('about')}
                className="group px-8 py-4 bg-[#0EF1E2] text-gray-900 rounded-lg font-semibold hover:bg-[#0EF1E2]/90 transition-all shadow-lg shadow-[#0EF1E2]/20 hover:shadow-xl hover:shadow-[#0EF1E2]/30 flex items-center justify-center gap-2"
              >
                <Play className="h-5 w-5" />
                Learn More
              </button>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1518FF]">Air</div>
                <div className="text-sm text-gray-600 mt-1">Priority Freight</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1518FF]">Sea</div>
                <div className="text-sm text-gray-600 mt-1">FCL / LCL</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1518FF]">Road</div>
                <div className="text-sm text-gray-600 mt-1">Cross-Border</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1518FF]">Rail</div>
                <div className="text-sm text-gray-600 mt-1">Intermodal</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1518FF]/20 to-[#0EF1E2]/20 rounded-3xl blur-3xl"></div>
            <img
              src="https://images.pexels.com/photos/2881632/pexels-photo-2881632.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Logistics Operations"
              className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />

            {/* Mode badges */}
            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-white/40">
                <div className="text-xs font-semibold text-[#1518FF]">AIR FREIGHT</div>
                <div className="text-sm text-gray-700">Speed & control for critical cargo</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-white/40">
                <div className="text-xs font-semibold text-[#1518FF]">SEA FREIGHT</div>
                <div className="text-sm text-gray-700">FCL/LCL with disciplined documentation</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-white/40">
                <div className="text-xs font-semibold text-[#1518FF]">ROAD FREIGHT</div>
                <div className="text-sm text-gray-700">Reliable fleet and last-mile coordination</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-white/40">
                <div className="text-xs font-semibold text-[#1518FF]">RAIL FREIGHT</div>
                <div className="text-sm text-gray-700">Stable intermodal corridors</div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
