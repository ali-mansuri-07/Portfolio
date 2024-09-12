const Contact = require("../models/Contacts");
const nodemailer = require("nodemailer");

// Create a transporter for sending emails
const transporter = nodemailer.createTransport({
  service: "gmail", // or any other email service you're using
  auth: {
    user: "mansurialihussain07@gmail.com",
    pass: "xpgs okuu qwnh zifv",
  },
});

// Controller function to handle form submission and email sending
const submitContactForm = async (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  console.log("data = " + name, email, phone, subject, message);
  try {
    // Save contact data to the database
    const contact = new Contact({ name, email, phone, subject, message });
    await contact.save();

    // Send email to the admin
    const mailOptions = {
      from: email,
      to: "mansurialihussain51@gmail.com",
      subject: "Enquiry mail from portfolio",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Subject: ${subject}
        Message: ${message}
      `,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send("Error sending email");
      }
      return res.status(200).send("Form submitted and email sent");
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    res.status(500).send("Internal Server Error");
  }
};

// Controller function to get all contact messages
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    console.error("Error fetching contact messages:", error);
    res.status(500).send("Internal Server Error");
  }
};


const deleteContact = async (req, res) => {
    try {
      const contactId = req.params.id;
      await Contact.findByIdAndDelete(contactId);
      res.status(200).send('Contact deleted successfully');
    } catch (error) {
      console.error('Error deleting contact:', error);
      res.status(500).send('Internal Server Error');
    }
  };
  

module.exports = { submitContactForm, getAllContacts, deleteContact };
