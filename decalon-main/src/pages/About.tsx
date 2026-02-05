import { Target, Eye, Users, Award, Globe2, Zap } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide reliable, efficient, and innovative logistics solutions that empower businesses to succeed in the global marketplace.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To become the digital backbone of Caucasus-based logistics, connecting businesses worldwide with cutting-edge technology and unmatched service.',
    },
  ];

  const strengths = [
    {
      icon: Globe2,
      title: 'Regional Expertise',
      description: 'Deep understanding of Caucasus, European, and Central Asian trade corridors',
    },
    {
      icon: Zap,
      title: 'Digital Innovation',
      description: 'Modern platform for real-time tracking and streamlined operations',
    },
    {
      icon: Award,
      title: 'Verified Network',
      description: 'Strongest and most reliable carrier partnerships in the region',
    },
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About Zekon Global Logistics
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Built by experienced international traders who understand the complexities of cross-border logistics, Zekong Global emerged from a vision to transform how businesses move goods across the Caucasus and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3778619/pexels-photo-3778619.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Our Story"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded by a team of experienced international traders, Zekong Global Logistics was born from firsthand experience with the challenges of moving cargo across the Caucasus region. We saw the need for a logistics partner that combined deep regional knowledge with modern digital capabilities.
                </p>
                <p>
                  With over 7 years of trade expertise and the largest verified truck network in the Caucasus, we've built a reputation for reliability, speed, and innovation. Our strategic focus on the Europe-Asia Middle Corridor positions us uniquely to serve businesses looking to expand their reach.
                </p>
                <p>
                  Today, Zekong Global operates a fleet of 500+ trucks and has successfully completed over 10,000 shipments, earning the trust of leading international businesses who demand excellence in every delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-2xl border border-gray-200"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#1518FF] to-[#0EF1E2] rounded-xl flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our unique combination of regional expertise and digital innovation makes us the partner of choice for businesses with ambitious growth plans
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {strengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-xl transition-all text-center"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#1518FF] to-[#0EF1E2] rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {strength.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {strength.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#1518FF] to-[#0EF1E2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Join Our Growing Network
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Partner with us to experience logistics excellence backed by regional expertise and digital innovation
          </p>
        </div>
      </section>
    </div>
  );
}
