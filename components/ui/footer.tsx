import Link from 'next/link';

export default function Footer() {
  return(
    <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 justify-center text-center">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-teal-400">YMS</span> Sports
              </div>
              <p className="text-slate-300 mb-4">
                Empowering Muslim youth through sports while nurturing Islamic values and community bonds.
              </p>
              {/* Icons removed */}
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 font-oswald">Programs</h3>
              <ul className="space-y-2 text-slate-300">
                <li><Link href="/programs#Little-Champions" className="hover:text-white">Little Champions (5-7)</Link></li>
                <li><Link href="/programs#Rising-Stars" className="hover:text-white">Rising Stars (8-10)</Link></li>
                <li><Link href="/programs#Future-Leaders" className="hover:text-white">Future Leaders (11-13)</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 font-oswald">Quick Links</h3>
              <ul className="space-y-2 text-slate-300">
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/register" className="hover:text-white">Registration</Link></li>
              </ul>
            </div>
            
            {/* Contact Info column removed */}
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} YMS Sports. All rights reserved. | Empowering Muslim Youth Through Sports</p>
          </div>
        </div>
      </footer>
  );
}