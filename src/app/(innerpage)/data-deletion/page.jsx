"use client"
import BreadCumb from '@/app/Components/Common/BreadCumb';
import React from 'react';

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/images/bg/breadcumgBg.png"
        Title="Data Deletion Request"
      />
      
      <section className="data-deletion-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 mx-auto">
              <div className="data-deletion-content">
                <h1>Data Deletion Request - World Football Quiz</h1>
                
                <div className="intro-text">
                  <p>We respect your privacy and your right to control your personal data. If you would like to delete your account and all associated data from World Football Quiz, please use the form below.</p>
                </div>

                <div className="what-gets-deleted">
                  <h2>What data will be deleted?</h2>
                  <ul>
                    <li>Your user account and profile information</li>
                    <li>Quiz scores and game history</li>
                    <li>Match predictions and results</li>
                    <li>Achievements and rewards</li>
                    <li>Any saved preferences or settings</li>
                    <li>All personal information associated with your account</li>
                  </ul>
                </div>

                <div className="important-notes">
                  <h2>Important Notes</h2>
                  <ul>
                    <li><strong>This action is permanent:</strong> Once your data is deleted, it cannot be recovered</li>
                    <li><strong>Processing time:</strong> Data deletion requests are processed within 30 days</li>
                    <li><strong>Verification:</strong> We may contact you to verify your identity before processing the deletion</li>
                    <li><strong>Legal retention:</strong> Some data may be retained for legal compliance purposes as outlined in our Privacy Policy</li>
                  </ul>
                </div>

                <div className="deletion-form">
                  <h2>Request Data Deletion</h2>
                  <form 
                    action="mailto:worldcupquizz@gmail.com?subject=Data Deletion Request - World Football Quiz" 
                    method="post" 
                    encType="text/plain"
                  >
                    <div className="form-group">
                      <label htmlFor="email">Email Address Associated with Your Account *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        placeholder="Enter your email address"
                      />
                      <small>Please use the same email address you used to register for World Football Quiz</small>
                    </div>

                    <div className="form-group">
                      <label htmlFor="reason">Reason for Deletion (Optional)</label>
                      <textarea 
                        id="reason" 
                        name="reason" 
                        rows={4}
                        placeholder="Please let us know why you're deleting your account (this helps us improve our service)"
                      ></textarea>
                    </div>

                    <div className="form-group">
                      <div className="checkbox-wrapper">
                        <input 
                          type="checkbox" 
                          id="confirm" 
                          name="confirm" 
                          required 
                          style={{ width: 'auto', marginRight: '10px' }}
                        />
                        <label htmlFor="confirm">
                          I confirm that I want to permanently delete all my data from World Football Quiz and understand that this action cannot be undone.
                        </label>
                      </div>
                    </div>

                    <div className="form-group">
                      <button type="submit" className="theme-btn">
                        Send Email Request
                      </button>
                    </div>
                  </form>
                  
                  <div className="manual-email">
                    <h3>Alternative: Send Email Manually</h3>
                    <p>If the form above doesn't work, you can copy this email template and send it manually to <strong>worldcupquizz@gmail.com</strong>:</p>
                    <div className="email-template">
                      <strong>Subject:</strong> Data Deletion Request - World Football Quiz<br/>
                      <strong>Body:</strong><br/>
                      <em>
                        Hello,<br/><br/>
                        I am requesting the deletion of all my personal data associated with my World Football Quiz account.<br/><br/>
                        Email address: [YOUR EMAIL ADDRESS]<br/>
                        Reason (optional): [YOUR REASON]<br/><br/>
                        I confirm that I want to permanently delete all my data and understand this action cannot be undone.<br/><br/>
                        Thank you.
                      </em>
                    </div>
                  </div>
                </div>

                <div className="alternative-contact">
                  <h2>Alternative Contact Method</h2>
                  <p>If you prefer, you can also email us directly at <strong>worldcupquizz@gmail.com</strong> with the subject line "Data Deletion Request" and include:</p>
                  <ul>
                    <li>Your email address associated with the account</li>
                    <li>Confirmation that you want to delete all your data</li>
                    <li>Any additional information that might help us locate your account</li>
                  </ul>
                </div>

                <div className="response-info">
                  <h2>What Happens Next?</h2>
                  <ol>
                    <li>We will receive your deletion request</li>
                    <li>We may contact you within 5 business days to verify your identity</li>
                    <li>Once verified, we will process the deletion within 30 days</li>
                    <li>You will receive a confirmation email once the deletion is complete</li>
                  </ol>
                </div>

                <div className="contact-support">
                  <h2>Need Help?</h2>
                  <p>If you have any questions about data deletion or need assistance, please contact our support team at <strong>worldcupquizz@gmail.com</strong>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .data-deletion-section {
          background: #fff;
        }
        .data-deletion-content {
          background: white;
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }
        .data-deletion-content h1 {
          color: #333;
          margin-bottom: 30px;
          font-size: 2.5rem;
          text-align: center;
        }
        .data-deletion-content h2 {
          color: #5236FF;
          margin-top: 40px;
          margin-bottom: 20px;
          font-size: 1.5rem;
          border-bottom: 2px solid #5236FF;
          padding-bottom: 10px;
        }
        .data-deletion-content p {
          color: #666;
          line-height: 1.6;
          margin-bottom: 15px;
        }
        .data-deletion-content ul, ol {
          color: #666;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .data-deletion-content li {
          margin-bottom: 8px;
        }
        .intro-text {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 30px;
        }
        .intro-text p {
          margin: 0;
          font-size: 18px;
          font-weight: 500;
        }
        .important-notes {
          background: #fff3cd;
          padding: 20px;
          border-radius: 8px;
          border-left: 4px solid #ffc107;
          margin-bottom: 30px;
        }
        .deletion-form {
          background: #f8f9fa;
          padding: 30px;
          border-radius: 10px;
          margin: 30px 0;
        }
        .form-group {
          margin-bottom: 25px;
        }
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #333;
        }
        .form-group input[type="email"],
        .form-group textarea {
          width: 100%;
          padding: 12px 15px;
          border: 2px solid #ddd;
          border-radius: 8px;
          font-size: 16px;
          transition: border-color 0.3s ease;
        }
        .form-group input[type="email"]:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #5236FF;
        }
        .form-group small {
          color: #666;
          font-size: 14px;
          margin-top: 5px;
          display: block;
        }
        .checkbox-wrapper {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        .checkbox-wrapper input[type="checkbox"] {
          margin-top: 3px;
        }
        .checkbox-wrapper label {
          margin: 0;
          cursor: pointer;
        }
        .theme-btn {
          background: #5236FF;
          color: white;
          padding: 15px 30px;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .theme-btn:hover {
          background: #4a2de8;
          transform: translateY(-2px);
        }
        .alternative-contact {
          background: #e7f3ff;
          padding: 20px;
          border-radius: 8px;
          border-left: 4px solid #007bff;
          margin: 30px 0;
        }
        .response-info ol {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
        }
        .contact-support {
          text-align: center;
          background: #f0f8ff;
          padding: 20px;
          border-radius: 8px;
          margin-top: 30px;
        }
        .manual-email {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
          margin-top: 30px;
          border-left: 4px solid #28a745;
        }
        .manual-email h3 {
          color: #28a745;
          margin-bottom: 15px;
        }
        .email-template {
          background: #ffffff;
          padding: 15px;
          border-radius: 6px;
          border: 1px solid #ddd;
          font-family: monospace;
          font-size: 14px;
          line-height: 1.6;
          margin-top: 15px;
        }
      `}</style>
    </div>
  );
};

export default page;