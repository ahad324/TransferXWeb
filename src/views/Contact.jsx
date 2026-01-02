"use client";
import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaPaperPlane,
} from "react-icons/fa";
import { containerVariants } from "@src/AnimationVariants";
import SectionWrapper from "@components/ui/SectionWrapper";
import { Input, Textarea } from "@components/ui/Input";
import Button from "@components/ui/Button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [Message, setMessage] = useState({});
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Frontend Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setMessage({ error: "All fields are required." });
      return;
    }

    if (!validateEmail(formData.email)) {
      setMessage({ error: "Please enter a valid email address." });
      return;
    }

    setLoading(true);
    setMessage({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage({ success: "Your message has been sent successfully!" });
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setMessage({ error: result.error || "Failed to send your message. Please try again." });
      }
    } catch (err) {
      console.error("Failed to send message:", err);
      setMessage({ error: "Something went wrong. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-wrapper">
      <SectionWrapper
        className="max-w-3xl mx-auto"
      >
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
