const sgMail = require("@sendgrid/mail");

const API_KEY = process.env.SENDGRID_API_KEY;
const EMAIL_FROM = process.env.SENGRID_EMAIL_FROM;
const PORT = process.env.PORT || 3001;

sgMail.setApiKey(API_KEY);

const htmlTemplate = ({ verificationToken }) => {
  return `<div> 
        <p style="padding:18px 0px 18px 0px; line-height:22px; text-align:center;">
        To use your account, verify your email. <b>Click the button under this text.</b>
        </p>
        <a href="http://localhost:${PORT}/users/verify/${verificationToken}" style="font-size:16px; background-color:#c9adf0;  border-radius:5px; color:#ffffff; display:block; letter-spacing:1px; line-height:normal; padding:15px 22px 15px 22px; text-align:center; max-width:300px; margin:0 auto; text-decoration:none; font-family:georgia,serif;">
        Verify Your Account
        </a>
        </div>`;
};
const sendEmailVerificationToken = ({ email, verificationToken }) => {
  const msg = {
    to: email,
    from: EMAIL_FROM,
    subject: "Confirm Email",
    html: htmlTemplate({ verificationToken }),
  };

  sgMail.send(msg);
};

module.exports = sendEmailVerificationToken;
