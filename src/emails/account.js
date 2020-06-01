const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "kushrokz95@gmail.com",
    subject: "This is my first creation!",
    text: `I hope this one actually get to ${name}.batao app kaisa laga`,
  });
};

const sendGoodbyeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "kushrokz95@gmail.com",
    subject: `bye bye ${name} bro`,
    text: `Kyo ${name} bhai pasand nhi aaya kya`,
  });
};

module.exports = { sendWelcomeEmail, sendGoodbyeEmail };
