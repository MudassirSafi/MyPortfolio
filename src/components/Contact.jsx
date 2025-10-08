// src/components/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- Simple email sending through mailto ---
  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:muhammedmudassir@gmail.com?subject=Message from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-6 text-center bg-gradient-to-br from-black/60 to-neutral-900 backdrop-blur-md"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-10 text-cyan-300 drop-shadow-[0_0_15px_rgba(0,255,255,0.3)]"
      >
        Get in Touch
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto glassy-bg rounded-2xl p-8 shadow-[0_0_40px_rgba(0,255,255,0.2)] border border-cyan-400/20"
      >
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            onChange={handleChange}
            className="w-full p-3 bg-white/10 border border-cyan-400/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-cyan-300"
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            onChange={handleChange}
            className="w-full p-3 bg-white/10 border border-cyan-400/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-cyan-300"
          />
        </div>

        <div className="mb-6">
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            onChange={handleChange}
            className="w-full p-3 bg-white/10 border border-cyan-400/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-cyan-300"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-md bg-cyan-500 hover:bg-cyan-400 text-white font-semibold shadow-[0_0_15px_rgba(0,255,255,0.4)] transition-all"
        >
          Send Message
        </button>
      </motion.form>

      {/* Social Icons */}
      <div className="mt-10 flex justify-center gap-6 text-3xl">
        <a
          href="https://github.com/MudassirSafi/MyPortfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-cyan-300 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/muhammad-mudassir-843964272/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-cyan-300 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:muhammedmudassir@gmail.com"
          className="text-white hover:text-cyan-300 transition"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
}
