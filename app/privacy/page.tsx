"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Privacy <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Policy</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="glass p-8 rounded-2xl space-y-8"
        >
          <section>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to Aurora Blog. We are committed to protecting your personal information and your right to privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
              our website and use our services. Please read this privacy policy carefully.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <div className="space-y-4 text-muted-foreground">
              <h3 className="text-xl font-semibold">Personal Information You Disclose to Us</h3>
              <p>
                We collect personal information that you voluntarily provide to us when you register on the Services, 
                express an interest in obtaining information about us or our products and services, when you participate 
                in activities on the Services, or otherwise when you contact us.
              </p>
              <p>The personal information we collect may include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Mailing address</li>
                <li>Job title</li>
                <li>Company name</li>
                <li>Payment information</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6">Information Automatically Collected</h3>
              <p>
                We automatically collect certain information when you visit, use, or navigate the Services. 
                This information does not reveal your specific identity but may include device and usage information.
              </p>
              <p>The information we collect automatically may include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address and browser type</li>
                <li>Internet service provider</li>
                <li>Operating system</li>
                <li>Referring/exit pages</li>
                <li>Date and time stamps</li>
                <li>Clickstream data</li>
                <li>Device characteristics</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use personal information collected via our Services for a variety of business purposes described below:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>To facilitate account creation and logon process</li>
              <li>To send administrative information to you</li>
              <li>To respond to user inquiries and offer support</li>
              <li>To send you marketing and promotional communications</li>
              <li>To protect our Services</li>
              <li>To comply with applicable laws and regulations</li>
              <li>To respond to legal requests and prevent harm</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may use cookies and similar tracking technologies to access or store information. 
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. 
              However, if you do not accept cookies, you may not be able to use some parts of our Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may employ third-party companies and individuals to facilitate our Service, 
              to provide the Service on our behalf, to perform Service-related services, 
              or to assist us in analyzing how our Service is used. These third parties have 
              access to your Personal Information only to perform these tasks on our behalf 
              and are obligated not to disclose or use it for any other purpose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Google AdSense</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use Google AdSense to display advertisements on our website. 
              Google, as a third-party vendor, uses cookies to serve ads on our site. 
              Google&apos;s use of the DART cookie enables it to serve ads to our users based on their visit to our site 
              and other sites on the Internet. Users may opt out of the use of the DART cookie by visiting 
              the Google ad and content network privacy policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use administrative, technical, and physical security measures to help protect your personal information. 
              While we have taken reasonable steps to secure the personal information you provide to us, 
              please be aware that despite our efforts, no security measures are perfect or impenetrable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Your Privacy Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>The right to access – You have the right to request copies of your personal data</li>
              <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate</li>
              <li>The right to erasure – You have the right to request that we erase your personal data</li>
              <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal data</li>
              <li>The right to object to processing – You have the right to object to our processing of your personal data</li>
              <li>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions or comments about this policy, you may email us at privacy@aurorablog.com 
              or by post to:
            </p>
            <div className="mt-4 p-4 glass rounded-lg">
              <p>Aurora Blog</p>
              <p>123 Privacy Street</p>
              <p>San Francisco, CA 94103</p>
              <p>United States</p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}