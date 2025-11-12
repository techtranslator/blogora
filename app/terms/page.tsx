"use client";

import { motion } from "framer-motion";

export default function TermsOfServicePage() {
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
            Terms of <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Service</span>
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
            <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Service constitute a legally binding agreement made between you, 
              whether personally or on behalf of an entity (&quot;you&quot;) and Aurora Blog (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), 
              concerning your access to and use of the website as well as any other media form, media channel, 
              mobile website or mobile application related, linked, or otherwise connected thereto 
              (collectively, the &quot;Site&quot;).
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these 
              Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited 
              from using the Site and you must discontinue use immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Intellectual Property Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              Unless otherwise indicated, the Site is our proprietary property and all source code, databases, 
              functionality, software, website designs, audio, video, text, photographs, and graphics on the Site 
              (collectively, the &quot;Content&quot;) and the trademarks, service marks, and logos contained therein 
              (the &quot;Marks&quot;) are owned or controlled by us or licensed to us, and are protected by copyright 
              and trademark laws and various other intellectual property rights and unfair competition laws 
              of the United States, foreign jurisdictions, and international conventions.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              The Content and the Marks are provided on the Site &quot;AS IS&quot; for your information and personal use only. 
              Except as expressly provided in these Terms of Service, no part of the Site and no Content or Marks may 
              be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, 
              transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, 
              without our express prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">User Representations</h2>
            <p className="text-muted-foreground leading-relaxed">
              By using the Site, you represent and warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
              <li>All registration information you submit will be true, accurate, current, and complete</li>
              <li>You will maintain the accuracy of such information and promptly update such registration information as necessary</li>
              <li>You have the legal capacity and you agree to comply with these Terms of Service</li>
              <li>You are not a minor in the jurisdiction in which you reside</li>
              <li>You will not access the Site through automated or non-human means, whether through a bot, script or otherwise</li>
              <li>You will not use the Site for any illegal or unauthorized purpose</li>
              <li>Your use of the Site will not violate any applicable law or regulation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Prohibited Activities</h2>
            <p className="text-muted-foreground leading-relaxed">
              You may not access or use the Site for any purpose other than that for which we make the Site available. 
              The Site may not be used in connection with any commercial endeavors except those that are specifically 
              endorsed or approved by us.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              As a user of the Site, you agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
              <li>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us</li>
              <li>Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses</li>
              <li>Use the Site to advertise or offer to sell goods and services</li>
              <li>Engage in unauthorized framing of or linking to the Site</li>
              <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords</li>
              <li>Make improper use of our support services or submit false reports of abuse or misconduct</li>
              <li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Google AdSense</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use Google AdSense to display advertisements on our website. As a third-party vendor, 
              Google uses cookies to serve ads on our site. Google&apos;s use of the DART cookie enables it to serve 
              ads to our users based on their visit to our site and other sites on the Internet.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Users may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy. 
              We are not responsible for any content or privacy policies on third-party websites including Google.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">User Generated Contributions</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Site may invite you to chat, contribute to, or participate in blogs, message boards, 
              online forums, and other functionality, and may provide you with the opportunity to create, 
              submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials 
              to us or on the Site, including but not limited to text, writings, video, audio, photographs, 
              graphics, comments, suggestions, or personal information or other material (collectively, 
              &quot;Contributions&quot;).
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Contributions may be viewable by other users of the Site and through third-party websites. 
              As such, any Contributions you transmit may be treated as non-confidential and non-proprietary. 
              When you create or make available any Contributions, you thereby represent and warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
              <li>The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party</li>
              <li>You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Site, and other users of the Site to use your Contributions in any manner contemplated by the Site and these Terms of Service</li>
              <li>You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Site and these Terms of Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Site Management</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right, but not the obligation, to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
              <li>Monitor the Site for violations of these Terms of Service</li>
              <li>Take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Service</li>
              <li>Refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof</li>
              <li>Otherwise manage the Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Term and Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Service shall remain in full force and effect while you use the Site. 
              Without limiting any other provision of these Terms of Service, we reserve the right to, 
              in our sole discretion and without notice or liability, deny access to and use of the Site 
              (including blocking certain IP addresses), to any person for any reason or for no reason, 
              including without limitation for breach of any representation, warranty, or covenant contained 
              in these Terms of Service or of any applicable law or regulation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Modifications and Interruptions</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason 
              at our sole discretion without notice. However, we have no obligation to update any information on our Site. 
              We also reserve the right to modify or discontinue all or part of the Site without notice at any time.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We will not be liable to you or any third party for any modification, price change, suspension, 
              or discontinuance of the Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Service and your use of the Site are governed by and construed in accordance with 
              the laws of the State of California applicable to agreements made and to be entirely performed 
              within the State of California, without regard to its conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              In order to resolve a complaint regarding the Site or to receive further information regarding 
              use of the Site, please contact us at:
            </p>
            <div className="mt-4 p-4 glass rounded-lg">
              <p>Aurora Blog</p>
              <p>123 Terms Street</p>
              <p>San Francisco, CA 94103</p>
              <p>United States</p>
              <p className="mt-2">Email: terms@aurorablog.com</p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}