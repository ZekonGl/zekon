export default function ClientSlider() {
  const clients = [
    'ACME Corp',
    'GlobalTrade Inc',
    'EuroShip',
    'TransAsia Ltd',
    'MegaFreight',
    'PrimeLogistics',
    'SwiftCargo',
    'TopTier Transport',
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-500 mb-8 uppercase tracking-wider">
          Trusted by Leading Companies
        </p>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 px-8 py-4 text-gray-400 text-lg font-semibold whitespace-nowrap"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
