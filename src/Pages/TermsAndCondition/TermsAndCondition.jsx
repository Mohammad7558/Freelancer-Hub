import React from 'react';

const TermsAndCondition = () => {
  return (
    <div className="min-h-screen px-6 py-12 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          Terms and Conditions
        </h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p className="leading-relaxed">
            Welcome to our Freelance Marketplace. By using our platform, you agree to be bound by these terms and conditions. Please read them carefully.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">2. Account Registration</h2>
          <p className="leading-relaxed">
            To access our services, you must create an account. You are responsible for maintaining the confidentiality of your login credentials and all activities under your account.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">3. User Conduct</h2>
          <p className="leading-relaxed">
            You agree to use the platform ethically. Harassment, fraud, or any illegal activity will result in account suspension or termination.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">4. Payments</h2>
          <p className="leading-relaxed">
            All payments must be made through our secure platform. Freelancers will receive payouts after a 5-day security clearance period.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">5. Dispute Resolution</h2>
          <p className="leading-relaxed">
            In case of disputes between clients and freelancers, our support team will mediate based on evidence provided by both parties.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">6. Changes to Terms</h2>
          <p className="leading-relaxed">
            We may update these terms at any time. Continued use of the platform after changes means you accept the new terms.
          </p>
        </section>

        <div className="mt-10 text-sm">
          Last updated: May 21, 2025
        </div>
      </div>
    </div>
  );
};

export default TermsAndCondition;
