import { Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-[#0EF1E2] mb-4">
              Zekon
            </div>
            <p className="text-gray-400 mb-4">
              A leading cross-border trading company in the Caucasus region, connecting markets worldwide with expertise.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-gray-400 hover:text-[#0EF1E2] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-gray-400 hover:text-[#0EF1E2] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-gray-400 hover:text-[#0EF1E2] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-[#0EF1E2] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">hello@zekon.co</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-[#0EF1E2] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">+995 592 86 86 88</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-[#0EF1E2] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">37M Ilia Chavchavadze Avenue, Tbilisi, Georgia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Zekon Logistics LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
