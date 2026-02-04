import { CheckCircle2 } from 'lucide-react';

export default function WhyChooseUs() {
  const benefits = [
    '7+ years of regional trade expertise in the Caucasus corridor',
    'Largest verified truck network in the Caucasus region',
    'Strategic focus on the Europe-Asia Middle Corridor',
    'Fast quotation process with digital workflow automation',
    'Reliable, verified carrier partnerships across multiple countries',
    'Dedicated support team available 24/7 for urgent shipments',
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Decalon Logistics?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We combine regional expertise with global reach to deliver unmatched logistics solutions tailored to your business needs.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0EF1E2]/20 flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="h-5 w-5 text-[#1518FF]" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1518FF]/10 to-[#0EF1E2]/10 rounded-3xl blur-2xl"></div>
            <img
              src="https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Logistics Excellence"
              className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover"
            />

            <div className="absolute -bottom-6 -left-6 p-6 bg-white rounded-xl shadow-xl">
              <div className="text-3xl font-bold text-[#1518FF] mb-1">99.8%</div>
              <div className="text-sm text-gray-600">On-Time Delivery</div>
            </div>

            <div className="absolute -top-6 -right-6 p-6 bg-white rounded-xl shadow-xl">
              <div className="text-3xl font-bold text-[#1518FF] mb-1">24/7</div>
              <div className="text-sm text-gray-600">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
