import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaPaperPlane,
} from "react-icons/fa";
import { containerVariants } from "../AnimationVariants";
import SEO from "../components/SEO";
import emailjs from '@emailjs/browser';
import SectionWrapper from "../components/ui/SectionWrapper";
import { Input, Textarea } from "../components/ui/Input";
import Button from "../components/ui/Button";

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
    <div className="page-wrapper">
      <SectionWrapper
        className="max-w-3xl flex justify-center items-center flex-col mx-auto"
      >
        <SEO
          title={title}
          description={description}
          keywords={keywords}
          canonical={canonical}
          ogTitle={ogtitle}
        />
        <div className="w-full">
          <span className="flex justify-center items-center flex-col text-center">
            <h1 className="heading">Contact US</h1>
            <p className="mb-6">Reach out for any inquiries or support.</p>
          </span>
          {Message.success ? (
            <p className="text-[--success-color] mb-4">{Message.success}</p>
          ) : (
            <p className="text-[--error-color] mb-4">{Message.error}</p>
          )}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <Input
              label={<><FaUser className="inline-block mr-2" /> Name</>}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <Input
              label={<><FaEnvelope className="inline-block mr-2" /> Email</>}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
            <Textarea
              label={<><FaCommentDots className="inline-block mr-2" /> Message</>}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Your message"
              required
            />
            <div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full md:w-auto"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    <FaPaperPlane size={20} /> Send Message
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Contact;
