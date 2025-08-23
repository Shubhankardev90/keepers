import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Industries We Serve - Keepers Being Spotless',
  description: 'Professional cleaning services for healthcare, hospitality, corporate offices, retail, restaurants, and residential sectors. Specialized cleaning solutions for every industry.',
  keywords: 'healthcare cleaning, hospital sanitization, hotel cleaning, office cleaning, restaurant cleaning, retail cleaning, residential cleaning, commercial cleaning',
};

export default function Industries() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Professional cleaning and facility maintenance solutions across diverse industries with specialized expertise for each sector.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Healthcare */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">Healthcare & Medical Facilities</h2>
              <p className="text-gray-600 mb-6">
                Medical-grade sanitization and cleaning for hospitals, clinics, and healthcare facilities. 
                Strict adherence to infection control protocols and healthcare regulations.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <ul className="space-y-2">
                  <li>• Hospital Sanitization</li>
                  <li>• Clinic Cleaning</li>
                  <li>• Operating Room Cleaning</li>
                  <li>• Medical Equipment Cleaning</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Infection Control Protocols</li>
                  <li>• Biohazard Cleanup</li>
                  <li>• Emergency Sanitization</li>
                  <li>• Compliance Documentation</li>
                </ul>
              </div>
            </div>

            {/* Corporate Offices */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">Corporate Offices</h2>
              <p className="text-gray-600 mb-6">
                Professional office cleaning and maintenance services to create productive work environments. 
                Flexible scheduling to minimize disruption to business operations.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <ul className="space-y-2">
                  <li>• Daily Office Cleaning</li>
                  <li>• Conference Room Setup</li>
                  <li>• Workstation Sanitization</li>
                  <li>• Common Area Maintenance</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Floor Care & Polishing</li>
                  <li>• Window Cleaning</li>
                  <li>• Restroom Maintenance</li>
                  <li>• Waste Management</li>
                </ul>
              </div>
            </div>

            {/* Hospitality */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">Hotels & Hospitality</h2>
              <p className="text-gray-600 mb-6">
                Specialized cleaning for hotels, resorts, and hospitality venues ensuring guest satisfaction 
                and pristine accommodations with fast turnaround times.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <ul className="space-y-2">
                  <li>• Guest Room Cleaning</li>
                  <li>• Lobby Maintenance</li>
                  <li>• Restaurant Cleaning</li>
                  <li>• Event Space Setup</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Laundry Services</li>
                  <li>• Pool Area Cleaning</li>
                  <li>• Fitness Center Maintenance</li>
                  <li>• Deep Cleaning Services</li>
                </ul>
              </div>
            </div>

            {/* Retail & Malls */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">Retail & Shopping Centers</h2>
              <p className="text-gray-600 mb-6">
                Comprehensive cleaning for retail stores, shopping malls, and commercial spaces to maintain 
                attractive shopping environments and customer satisfaction.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <ul className="space-y-2">
                  <li>• Store Front Cleaning</li>
                  <li>• Mall Common Areas</li>
                  <li>• Food Court Maintenance</li>
                  <li>• Display Area Cleaning</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Floor Care & Waxing</li>
                  <li>• Glass & Mirror Cleaning</li>
                  <li>• Restroom Facilities</li>
                  <li>• Parking Area Cleaning</li>
                </ul>
              </div>
            </div>

            {/* Restaurants & Food Service */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">Restaurants & Food Service</h2>
              <p className="text-gray-600 mb-6">
                Food service cleaning with strict hygiene standards and health code compliance. 
                Kitchen deep cleaning, dining area maintenance, and sanitization protocols.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <ul className="space-y-2">
                  <li>• Kitchen Deep Cleaning</li>
                  <li>• Dining Area Maintenance</li>
                  <li>• Equipment Sanitization</li>
                  <li>• Grease Trap Cleaning</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Health Code Compliance</li>
                  <li>• Floor Degreasing</li>
                  <li>• Exhaust Hood Cleaning</li>
                  <li>• Pest Control Support</li>
                </ul>
              </div>
            </div>

            {/* Residential */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">Residential Homes</h2>
              <p className="text-gray-600 mb-6">
                Comprehensive home cleaning services for apartments, houses, and residential complexes. 
                From routine maintenance to deep cleaning transformations.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <ul className="space-y-2">
                  <li>• Regular House Cleaning</li>
                  <li>• Deep Cleaning Services</li>
                  <li>• Move-in/Move-out Cleaning</li>
                  <li>• Post-Construction Cleanup</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Carpet & Upholstery Cleaning</li>
                  <li>• Window & Glass Cleaning</li>
                  <li>• Kitchen & Bathroom Deep Clean</li>
                  <li>• Organizing Services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Industry Expertise?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Deep industry knowledge combined with specialized cleaning solutions for each sector.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified Cleaning Standards</h3>
              <p className="text-gray-600">All cleaning protocols meet industry-specific standards and regulatory requirements.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Safety & Compliance</h3>
              <p className="text-gray-600">Strict adherence to health, safety, and environmental regulations for each industry.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
              <p className="text-gray-600">Round-the-clock service availability for emergency cleaning across all industries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Professional Cleaning for Your Industry?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our industry expertise work for you. Contact us to discuss your specific cleaning requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/realprashantsharma29/30min" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Book Demo
            </a>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Get Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}