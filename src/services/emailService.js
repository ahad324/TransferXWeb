import resend from '@src/lib/resend';

/**
 * Service to handle all email-related logic using Resend.
 */
export const EmailService = {
    /**
     * Sends a contact form email.
     * @param {Object} data - The contact form data.
     * @param {string} data.name - Sender's name.
     * @param {string} data.email - Sender's email.
     * @param {string} data.message - Message content.
     */
    async sendContactEmail({ name, email, message }) {
        try {
            const { data, error } = await resend.emails.send({
                from: `${name} <${process.env.CONTACT_EMAIL_FROM || 'onboarding@resend.dev'}>`,
                to: [process.env.CONTACT_EMAIL_TO],
                subject: `New Contact Message from ${name}`,
                reply_to: email,
                html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            .email-container { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
            .header { background: #0f172a; padding: 40px 32px; text-align: center; }
            .header h1 { color: #ffffff; margin: 0; font-size: 28px; letter-spacing: -0.05em; font-weight: 800; }
            .content { padding: 48px 40px; color: #1e293b; line-height: 1.6; }
            .badge { display: inline-block; padding: 6px 14px; background-color: #f1f5f9; color: #475569; border-radius: 9999px; font-size: 13px; font-weight: 700; margin-bottom: 24px; text-transform: uppercase; letter-spacing: 0.025em; }
            .main-title { color: #0f172a; margin: 0 0 12px 0; font-size: 24px; font-weight: 800; letter-spacing: -0.025em; }
            .subtitle { color: #64748b; font-size: 16px; margin-bottom: 32px; font-weight: 400; }
            .info-card { background-color: #f8fafc; border-radius: 12px; padding: 32px; border: 1px solid #f1f5f9; margin-bottom: 32px; }
            .info-item { margin-bottom: 24px; }
            .info-label { font-size: 12px; font-weight: 800; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px; }
            .info-value { font-size: 18px; color: #0f172a; font-weight: 700; }
            .message-box { background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 32px; }
            .message-text { color: #334155; font-size: 16px; line-height: 1.8; white-space: pre-wrap; font-weight: 400; }
            .footer { padding: 32px; background-color: #f8fafc; text-align: center; font-size: 13px; color: #94a3b8; border-top: 1px solid #f1f5f9; }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="header">
              <h1>TransferX</h1>
            </div>
            <div class="content">
              <div class="badge">Inquiry</div>
              <h2 class="main-title">New Message Received</h2>
              <p class="subtitle">You have a new submission from the TransferX contact form.</p>
              
              <div class="info-card">
                <div class="info-item">
                  <div class="info-label">From Name</div>
                  <div class="info-value">${name}</div>
                </div>
                <div class="info-item" style="margin-bottom: 0;">
                  <div class="info-label">Email Address</div>
                  <div class="info-value"><a href="mailto:${email}" style="color: #0f172a; text-decoration: underline;">${email}</a></div>
                </div>
              </div>

              <div class="message-box">
                <div class="info-label" style="margin-bottom: 16px;">Message</div>
                <div class="message-text">${message}</div>
              </div>
            </div>
            <div class="footer">
              &copy; ${new Date().getFullYear()} TransferX. All rights reserved.<br>
              This is an automated notification from your web portal.
            </div>
          </div>
        </body>
        </html>
        `,
            });

            if (error) {
                console.error('Resend Error:', error);
                throw new Error(error.message);
            }

            return data;
        } catch (err) {
            console.error('Email Service Error:', err);
            throw err;
        }
    },

    /**
     * Template management methods for programmatic use.
     */
    templates: {
        async create(config) {
            return await resend.templates.create(config);
        },
        async get(id) {
            return await resend.templates.get(id);
        },
        async update(id, config) {
            return await resend.templates.update(id, config);
        },
        async list(params) {
            return await resend.templates.list(params);
        },
        async remove(id) {
            return await resend.templates.remove(id);
        }
    }
};
