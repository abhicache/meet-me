'use client';
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

const PrivacyPolicy = () => {
  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Privacy Policy</h1>
      
      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
        <p className="mb-6">
          MeetMe ("we," "our," "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information about you when you use our service.
        </p>

        <Section title="1. Information We Collect">
          <p>We collect the following types of information:</p>

          <h3 className="font-semibold mt-4 mb-2">a. Personal Information</h3>
          <p>
            When you sign up or create an account, we may collect personal information such as your name, email address, phone number, and any other details you voluntarily provide.
          </p>

          <h3 className="font-semibold mt-4 mb-2">b. Usage Information</h3>
          <p>
            We collect information about your interactions with our service, such as the pages or features you access, your activity within the app, and device information (e.g., browser type, operating system).
          </p>

          <h3 className="font-semibold mt-4 mb-2">c. Cookies and Tracking Technologies</h3>
          <p>
            We may use cookies and similar tracking technologies to track activity on our service and store certain information.
          </p>
        </Section>

        <Section title="2. How We Use Your Information">
          <p>We use your information for the following purposes:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>To provide and maintain our service.</li>
            <li>To improve, personalize, and expand our service.</li>
            <li>To communicate with you, including responding to your inquiries and sending updates.</li>
            <li>To monitor and analyze usage and trends to improve your experience.</li>
            <li>To prevent fraud and ensure the security of our service.</li>
          </ul>
        </Section>

        <Section title="3. Sharing Your Information">
          <p>We may share your information with third parties in the following circumstances:</p>

          <h3 className="font-semibold mt-4 mb-2">With Service Providers</h3>
          <p>
            We may share your information with third-party service providers who help us operate our platform and services.
          </p>

          <h3 className="font-semibold mt-4 mb-2">For Legal Reasons</h3>
          <p>
            We may disclose your information if required to do so by law or in response to valid requests by public authorities.
          </p>
        </Section>

        <Section title="4. Data Security">
          <p>
            We take data security seriously and implement reasonable administrative, technical, and physical measures to protect your information. However, no method of transmission over the Internet is completely secure, and we cannot guarantee absolute security.
          </p>
        </Section>

        <Section title="5. Your Choices">
          <p>
            You may choose not to provide us with certain information, but this may limit your ability to use certain features of MeetMe. You can also opt out of receiving communications from us by following the unsubscribe link in any email we send.
          </p>
        </Section>

        <Section title="6. Accessing and Updating Your Information">
          <p>
            You can access and update your personal information by logging into your account and editing your profile. If you wish to delete your account or request that we delete your personal data, please contact us at support@meetme.com.
          </p>
        </Section>

        <Section title="7. Children's Privacy">
          <p>
            Our service is not intended for use by anyone under the age of 13. We do not knowingly collect personal information from children under 13.
          </p>
        </Section>

        <Section title="8. Changes to this Privacy Policy">
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices. We will notify you of any significant changes by updating the effective date at the top of this page or by other reasonable means.
          </p>
        </Section>

        <Section title="9. Contact Us">
          <p>
            If you have any questions or concerns about this Privacy Policy or how we handle your information, please contact us at:
          </p>
          <p className="mt-2">
            Email: baranwalabhishek21@gmail.com<br />
          </p>
        </Section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;