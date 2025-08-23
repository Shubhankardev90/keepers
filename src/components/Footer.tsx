import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Keepers Being Spotless</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for professional cleaning and facility maintenance services. 
              Creating spotless, safe, and sustainable environments for homes and businesses.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/keepersbeingspotless" className="text-gray-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.315 0-.595-.122-.807-.315-.21-.21-.315-.49-.315-.807s.105-.595.315-.807c.21-.21.49-.315.807-.315s.595.105.807.315c.21.21.315.49.315.807s-.105.595-.315.807c-.21.193-.49.315-.807.315z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors">Commercial Cleaning</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors">Residential Cleaning</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors">Hospital Sanitization</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors">Hotel Cleaning</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Industries</h4>
            <ul className="space-y-2">
              <li><Link href="/industries" className="text-gray-300 hover:text-blue-400 transition-colors">Healthcare</Link></li>
              <li><Link href="/industries" className="text-gray-300 hover:text-blue-400 transition-colors">Hospitality</Link></li>
              <li><Link href="/industries" className="text-gray-300 hover:text-blue-400 transition-colors">Corporate Offices</Link></li>
              <li><Link href="/industries" className="text-gray-300 hover:text-blue-400 transition-colors">Retail & Malls</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Keepers Being Spotless (KBS). All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}