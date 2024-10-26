"use client";

import React, { useState } from 'react';

const Section = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6">
      <h2 
        className="text-xl font-semibold mb-2 cursor-pointer flex items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '▼' : '▶'} {title}
      </h2>
      {isOpen && <div className="pl-4">{children}</div>}
    </div>
  );
};

const TermsOfService = () => {
  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Terms of Service</h1>
      
      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
        <p className="mb-6">
          Welcome to <strong>MeetMe</strong>. By using our services, you agree to comply with and be bound by the following terms and conditions. Please review these terms carefully. If you do not agree with these terms, you should not use our service.
        </p>

        <Section title="1. Acceptance of Terms">
          <p>
            By accessing or using <strong>MeetMe</strong>, you agree to be bound by these Terms of Service. We reserve the right to modify these terms at any time, and we will notify you of any changes by updating the date at the top of this document or by other reasonable means.
          </p>
        </Section>

        <Section title="2. Description of Service">
          <p>
            <strong>MeetMe</strong> is a scheduling and meeting management service that allows users to book meetings, manage schedules, and access related tools. We provide our users with the tools to streamline meeting organization.
          </p>
        </Section>

        <Section title="3. User Responsibilities">
          <p>
            You are responsible for maintaining the confidentiality of your account and password, and for restricting access to your computer or device. You agree to accept responsibility for all activities that occur under your account.
          </p>
          <p className="mt-2">You agree not to:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Use <strong>MeetMe</strong> for any unlawful purpose.</li>
            <li>Interfere with or disrupt the service or servers/networks connected to the service.</li>
            <li>Attempt to gain unauthorized access to any part of the service, user accounts, or computer systems or networks.</li>
          </ul>
        </Section>

        <Section title="4. Account Termination">
          <p>
            We reserve the right to terminate or suspend your account at any time without notice or liability, for any reason, including but not limited to a breach of these Terms of Service.
          </p>
        </Section>

        <Section title="5. Third-Party Links">
          <p>
            <strong>MeetMe</strong> may contain links to third-party websites or services that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
          </p>
        </Section>

        <Section title="6. Limitation of Liability">
          <p>
            To the maximum extent permitted by law, <strong>MeetMe</strong> and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
          </p>
        </Section>

        <Section title="7. Governing Law">
          <p>
            These terms are governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.
          </p>
        </Section>

        <Section title="8. Changes to the Service">
          <p>
            We reserve the right to modify or discontinue, temporarily or permanently, the service or any part of it with or without notice.
          </p>
        </Section>

        <Section title="9. Contact Information">
          <p>If you have any questions about these Terms, please contact us at:</p>
          <p className="mt-2">
            <strong>Email</strong>: baranwalabhishek21@gmail.com<br />
          </p>
        </Section>
      </div>
    </div>
  );
};

export default TermsOfService;