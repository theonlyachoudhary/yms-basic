import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react'
export default function Footer() {
  return(
    <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-teal-400">YMS</span> Sports
              </div>
              <p className="text-slate-300 mb-4">
                Empowering Muslim youth through sports while nurturing Islamic values and community bonds.
              </p>
              <div className="flex gap-4">
                <div className="bg-slate-700 p-2 rounded">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="bg-slate-700 p-2 rounded">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="bg-slate-700 p-2 rounded">
                  <MapPin className="h-4 w-4" />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 font-oswald">Programs</h3>
              <ul className="space-y-2 text-slate-300">
                <li><Link href="/programs" className="hover:text-white">Little Champions (5-7)</Link></li>
                <li><Link href="/programs" className="hover:text-white">Rising Stars (8-10)</Link></li>
                <li><Link href="/programs" className="hover:text-white">Future Leaders (11-13)</Link></li>
                <li><Link href="/programs" className="hover:text-white">Elite Athletes (14-16)</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 font-oswald">Quick Links</h3>
              <ul className="space-y-2 text-slate-300">
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/register" className="hover:text-white">Registration</Link></li>
                <li><Link href="/events" className="hover:text-white">Events</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 font-oswald">Contact Info</h3>
              <div className="space-y-2 text-slate-300">
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  (555) 123-4567
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  info@ymssports.com
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  123 Community Center Dr
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 YMS Sports. All rights reserved. | Empowering Muslim Youth Through Sports</p>
          </div>
        </div>
      </footer>
  );
}