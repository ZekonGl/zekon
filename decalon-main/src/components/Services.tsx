import { Truck, Globe, FileText, Warehouse, MapPin, Shield } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: 'International Freight Forwarding',
      description: 'Seamless air, sea, and land freight solutions connecting continents with efficiency and reliability.',
    },
    {
      icon: Truck,
      title: 'Road Transport',
      description: 'Comprehensive trucking network across Türkiye, Europe, and the Caucasus with real-time tracking.',
    },
    {
      icon: FileText,
      title: 'Customs Documentation',
      description: 'Expert handling of all customs paperwork and clearance procedures for hassle-free cross-border shipping.',
    },
    {
      icon: Warehouse,
      title: 'Warehousing & Distribution',
      description: 'Strategic storage facilities and distribution centers optimized for your supply chain needs.',
    },
    {
      icon: MapPin,
      title: 'Real-time Tracking',
      description: 'Advanced digital platform providing 24/7 visibility of your cargo location and status.',
    },
    {
      icon: Shield,
      title: 'Cross-border Cargo Management',
      description: 'Specialized expertise in navigating complex international regulations and multi-country logistics.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Logistics Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            End-to-end services designed to streamline your supply chain and keep your business moving forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-xl hover:border-[#0EF1E2] transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#1518FF] to-[#0EF1E2] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
