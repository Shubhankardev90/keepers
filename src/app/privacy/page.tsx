import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - KeeperBeingSpotless',
  description: 'Privacy policy for KeeperBeingSpotless staffing services. Learn how we protect your personal information and data.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function Privacy() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last updated:</strong> January 1, 2025
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We collect information you provide directly to us, such as when you create an account, 
              apply for jobs, or contact us. This may include:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Personal identification information (name, email address, phone number)</li>
              <li>Employment history and qualifications</li>
              <li>Resume and cover letter information</li>
              <li>References and background check information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Match you with suitable job opportunities</li>
              <li>Communicate with you about job placements</li>
              <li>Conduct background checks and verify qualifications</li>
              <li>Improve our services and website functionality</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
            <p className="text-gray-700 mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Potential employers when you apply for positions</li>
              <li>Third-party service providers who assist in our operations</li>
              <li>Legal authorities when required by law</li>
            </ul>
            <p className="text-gray-700 mb-4">
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
            <p className="text-gray-700 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Access and update your personal information</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications</li>
              <li>Request a copy of your data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>KeeperBeingSpotless</strong><br />
                123 Industrial Blvd, Suite 200<br />
                Your City, ST 12345<br />
                Email: privacy@keeperbeingspotless.com<br />
                Phone: (555) 123-4567
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}