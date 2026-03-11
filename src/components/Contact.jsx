import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const Contact = ({ scrollToSection }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "891cb755-5f34-437c-b2b3-ae59175e4c7c",
          ...formData,
          subject: `New Project Inquiry from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', budget: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter"
        >
          Build <span className="text-gradient">Impact</span>
        </motion.h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
          Have a project in mind? I'm available for freelance work and always excited to collaborate on <span className="text-white">innovative ideas</span>.
        </p>

        <div className="flex flex-wrap gap-6 justify-center mb-16">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:muhammedmudassir40@gmail.com"
            className="btn-primary flex items-center gap-3 px-10 py-5"
          >
            <Mail className="w-5 h-5" />
            Email Me
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/MudassirSafi"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center gap-3 px-10 py-5"
          >
            <Github className="w-5 h-5" />
            GitHub
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/923209820283"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center gap-3 px-10 py-5"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            WhatsApp
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 sm:p-12 text-left"
        >
          <h3 className="text-3xl font-black font-display uppercase mb-8">Start a Conversation</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
              />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>
            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="Project Budget (USD)"
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
            />
            <textarea
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors resize-none"
            />

            <button
              type="submit"
              disabled={status === 'submitting'}
              className={`w-full btn-primary py-5 text-lg flex items-center justify-center gap-3 transition-all ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''
                }`}
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-6 h-6 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-6 h-6" />
                  Send Message
                </>
              )}
            </button>

            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center gap-3 text-emerald-400"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <p className="font-bold">Message sent successfully! I'll get back to you soon.</p>
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-500"
                >
                  <AlertCircle className="w-5 h-5" />
                  <p className="font-bold">Oops! Something went wrong. Please try again later.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
