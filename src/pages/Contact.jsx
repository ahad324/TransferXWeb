import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaPaperPlane,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { containerVariants } from "../AnimationVariants";
import SEO from "../components/SEO";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [Message, setMessage] = useState({});
  const [loading, setLoading] = useState(false);

  const title = "Contact TransferX | Get in Touch for Demos and Partnerships";
  const description =
    "Contact TransferX for any inquiries or support. We are here to help you with your file transfer needs.";
  const keywords =
    "TransferX contact, file transfer support, TransferX inquiries";
  const canonical = "https://transferx.netlify.app/contact";
  const ogtitle = "Contact TransferX | Get in Touch for Demos and Partnerships";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const emailData = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send("service_6e7dx76", "TransferX_ID", emailData, "xKC9L2BrKrpGIQW2C")
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        setMessage({ success: "Your message has been sent successfully!" });
        setFormData({ name: "", email: "", message: "" }); // Reset form
      })
      .catch((err) => {
        console.error("Failed to send email. Error: ", err);
        setMessage({ error: "Failed to send your message. Please try again." });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <motion.div
      className="max-w-3xl mx-auto p-8 text-[--text-color]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        canonical={canonical}
        ogTitle={ogtitle}
      />
      <span className="flex justify-center items-center flex-col">
        <h1 className="heading">Contact Us</h1>
        <p className="mb-6">Reach out for any inquiries or support.</p>
      </span>
      {Message.success ? (
        <p className="text-[--success-color] mb-4">{Message.success}</p>
      ) : (
        <p className="text-[--error-color] mb-4">{Message.error}</p>
      )}
      <motion.form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label
            className="block text-sm font-medium text-[--text-color] mb-2"
            htmlFor="name"
          >
            <FaUser className="inline-block mr-2" /> Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input-style"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-[--text-color] mb-2"
            htmlFor="email"
          >
            <FaEnvelope className="inline-block mr-2" /> Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input-style"
            placeholder="you@example.com"
            required
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-[--text-color] mb-2"
            htmlFor="message"
          >
            <FaCommentDots className="inline-block mr-2" /> Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="input-style"
            placeholder="Your message"
            required
          ></textarea>
        </div>
        <div>
          <motion.button
            type="submit"
            className="button primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? (
              "Sending..."
            ) : (
              <>
                <FaPaperPlane className="mr-2" /> Send Message
              </>
            )}
          </motion.button>
        </div>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
