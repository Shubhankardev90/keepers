import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - KeeperBeingSpotless',
  description: 'Terms of service for KeeperBeingSpotless staffing services. Read our terms and conditions for using our platform.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function Terms() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last updated:</strong> January 1, 2025
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing and using KeeperBeingSpotless services, you accept and agree to be bound by 
              the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Provided</h2>
            <p className="text-gray-700 mb-4">
              KeeperBeingSpotless provides staffing and recruitment services including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Temporary staffing solutions</li>
              <li>Permanent placement services</li>
              <li>Contract-to-hire arrangements</li>
              <li>Workforce management solutions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
            <p className="text-gray-700 mb-4">
              Users agree to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Provide accurate and truthful information</li>
              <li>Maintain the confidentiality of account credentials</li>
              <li>Use services in compliance with applicable laws</li>
              <li>Respect the rights of other users and third parties</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Employment Terms</h2>
            <p className="text-gray-700 mb-4">
              For job seekers:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Employment is subject to successful completion of background checks</li>
              <li>Job placements are not guaranteed</li>
              <li>Workers must comply with client company policies</li>
              <li>Safety requirements must be followed at all times</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Client Obligations</h2>
            <p className="text-gray-700 mb-4">
              For employers:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Provide accurate job descriptions and requirements</li>
              <li>Maintain safe working conditions</li>
              <li>Pay agreed-upon fees in a timely manner</li>
              <li>Comply with employment laws and regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              KeeperBeingSpotless shall not be liable for any indirect, incidental, special, 
              consequential, or punitive damages arising from the use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Termination</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to terminate or suspend access to our services immediately, 
              without prior notice, for conduct that we believe violates these Terms of Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify these terms at any time. Changes will be effective 
              immediately upon posting on our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For questions about these Terms of Service, contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>KeeperBeingSpotless</strong><br />
                123 Industrial Blvd, Suite 200<br />
                Your City, ST 12345<br />
                Email: legal@keeperbeingspotless.com<br />
                Phone: (555) 123-4567
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}