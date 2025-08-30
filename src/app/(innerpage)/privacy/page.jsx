"use client"
import BreadCumb from '@/app/Components/Common/BreadCumb';
import React from 'react';

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/images/bg/breadcumgBg.png"
        Title="Privacy Policy"
      />
      
      <section className="privacy-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 mx-auto">
              <div className="privacy-content">
                <div className="last-update">
                  <p><strong>Last updated:</strong> August 30, 2025</p>
                </div>

                <h1>Privacy Policy - World Football Quiz</h1>
                
                <h2>1. Introduction</h2>
                <p>GetAppFully ("we," "our," or "us") operates the World Football Quiz mobile application (the "Service"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.</p>
                
                <h2>2. Information We Collect</h2>
                
                <h3>2.1 Personal Information</h3>
                <ul>
                  <li>Username and display name</li>
                  <li>Email address (optional, for account recovery)</li>
                  <li>Game progress and achievements</li>
                  <li>Quiz scores and rankings</li>
                  <li>Match predictions and results</li>
                </ul>

                <h3>2.2 Device Information</h3>
                <ul>
                  <li>Device type and operating system</li>
                  <li>Unique device identifiers</li>
                  <li>App version and usage statistics</li>
                  <li>Crash reports for app improvement</li>
                </ul>

                <h3>2.3 Game Data</h3>
                <ul>
                  <li>Quiz answers and response times</li>
                  <li>Game preferences and settings</li>
                  <li>In-app purchase history</li>
                  <li>Social features usage (if enabled)</li>
                </ul>

                <h2>3. How We Use Your Information</h2>
                <ul>
                  <li>Provide and maintain the quiz game service</li>
                  <li>Track your progress and maintain leaderboards</li>
                  <li>Enable match predictions and scoring features</li>
                  <li>Improve app performance and user experience</li>
                  <li>Send important updates about the app</li>
                  <li>Provide customer support</li>
                </ul>

                <h2>4. Information Sharing</h2>
                <p>We do not sell, trade, or rent your personal information to third parties. We may share information in the following circumstances:</p>
                <ul>
                  <li><strong>Service Providers:</strong> Trusted partners who assist in app operation (analytics, crash reporting)</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In connection with any merger or sale of our business</li>
                </ul>

                <h2>5. Children's Privacy (Under 13)</h2>
                <p>Our app is designed to be family-friendly and may be used by children under 13 with parental consent. We take special care to protect children's privacy:</p>
                <ul>
                  <li>We do not knowingly collect personal information from children under 13 without parental consent</li>
                  <li>No targeted advertising is shown to users under 13</li>
                  <li>No social features or chat functionality that could expose children to strangers</li>
                  <li>Parents can contact us to review, update, or delete their child's information</li>
                  <li>We comply with COPPA (Children's Online Privacy Protection Act) requirements</li>
                </ul>

                <h2>6. Data Security</h2>
                <p>We implement appropriate security measures to protect your information:</p>
                <ul>
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security audits and updates</li>
                  <li>Limited access to personal data by authorized personnel only</li>
                  <li>Secure servers and database protection</li>
                </ul>

                <h2>7. Data Retention</h2>
                <p>We retain your information only as long as necessary to provide our services and comply with legal obligations. Game data and scores are kept to maintain leaderboards and your gaming history.</p>

                <h2>8. Your Rights</h2>
                <p>You have the right to:</p>
                <ul>
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of certain data collection</li>
                  <li>Export your game data</li>
                </ul>

                <h2>9. Third-Party Services</h2>
                <p>Our app may integrate with third-party services:</p>
                <ul>
                  <li><strong>Google Play Games:</strong> For achievements and leaderboards</li>
                  <li><strong>Apple Game Center:</strong> For iOS gaming features</li>
                  <li><strong>Analytics Services:</strong> To improve app performance</li>
                  <li><strong>Advertising Networks:</strong> For non-personalized ads only</li>
                </ul>

                <h2>10. International Data Transfers</h2>
                <p>Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data.</p>

                <h2>11. Updates to This Policy</h2>
                <p>We may update this Privacy Policy from time to time. We will notify you of significant changes through the app or via email.</p>

                <h2>12. Contact Us</h2>
                <p>If you have questions about this Privacy Policy or your data, please contact us:</p>
                <ul>
                  <li><strong>Email:</strong> worldcupquizz@gmail.com</li>
                  <li><strong>Response Time:</strong> Within 24 hours</li>
                </ul>

                <h2>13. Compliance</h2>
                <p>This policy complies with:</p>
                <ul>
                  <li>Google Play Developer Policy</li>
                  <li>Apple App Store Guidelines</li>
                  <li>COPPA (Children's Online Privacy Protection Act)</li>
                  <li>GDPR (General Data Protection Regulation)</li>
                  <li>CCPA (California Consumer Privacy Act)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .privacy-section {
          background: #fff;
        }
        .privacy-content {
          background: white;
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }
        .privacy-content h1 {
          color: #333;
          margin-bottom: 30px;
          font-size: 2.5rem;
          text-align: center;
        }
        .privacy-content h2 {
          color: #5236FF;
          margin-top: 40px;
          margin-bottom: 20px;
          font-size: 1.5rem;
          border-bottom: 2px solid #5236FF;
          padding-bottom: 10px;
        }
        .privacy-content h3 {
          color: #333;
          margin-top: 25px;
          margin-bottom: 15px;
          font-size: 1.2rem;
        }
        .privacy-content p {
          color: #666;
          line-height: 1.6;
          margin-bottom: 15px;
        }
        .privacy-content ul {
          color: #666;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .privacy-content li {
          margin-bottom: 8px;
        }
        .last-update {
          text-align: center;
          margin-bottom: 30px;
          padding: 15px;
          background: #f8f9fa;
          border-radius: 8px;
        }
        .last-update p {
          margin: 0;
          color: #666;
          font-style: italic;
        }
      `}</style>
    </div>
  );
};

export default page;