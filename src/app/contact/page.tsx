"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  Send,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { submitContactForm } from "../../actions/contact";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    purpose: "Collaboration",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await submitContactForm({
        name: formData.name,
        email: formData.email,
        purpose: formData.purpose,
        message: formData.message,
      });

      if (response.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", purpose: "Collaboration", message: "" });
      } else {
        setSubmitStatus("error");
        console.error(response.message);
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      // Reset status overlay after 5s
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "tarunsinghchaudharyy@gmail.com", href: "mailto:tarunsinghchaudharyy@gmail.com" },
    { icon: Phone, label: "Mobile", value: "+91 9027806285", href: "tel:+919027806285" }, 
  ];

  const socialLinks = [
    { icon: FaInstagram, label: "Instagram", href: "https://instagram.com/tarunsinghchdhry", bg: "bg-pink-600" },
    { icon: FaTelegram, label: "Telegram", href: "https://t.me/tarunkumar", bg: "bg-blue-500" },
    { icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/919027806285", bg: "bg-green-500" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center md:text-left"
      >
        <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl mb-4">
          Get in <span className="text-gradient">Touch</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl">
          Whether you have a question, want to collaborate, or invite me to speak.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-10"
        >
          <div className="glass-panel p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-white mb-6">Direct Contact</h3>
            <div className="space-y-6">
              {contactInfo.map((info, idx) => (
                <a 
                  key={idx} 
                  href={info.href}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 group"
                >
                  <div className={`p-3 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-slate-300 group-hover:scale-110 transition-transform shadow-inner`}>
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-mono tracking-widest uppercase text-slate-400 mb-1">{info.label}</p>
                    <p className="text-white font-medium tracking-tight">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="glass-panel p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-white mb-6">Connect on Socials</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex flex-col items-center justify-center gap-2 w-24 h-24 rounded-2xl ${social.bg} text-white hover:opacity-90 hover:-translate-y-1 transition-all shadow-xl`}
                >
                  <social.icon className="w-7 h-7" />
                  <span className="text-xs font-medium">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden shadow-2xl">
            {submitStatus === "success" && (
              <div className="absolute inset-0 bg-[#05050a]/90 backdrop-blur-sm z-50 flex flex-col items-center justify-center text-center p-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-6"
                >
                  <CheckCircle2 className="w-10 h-10" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">Your message has been securely submitted to the database.</p>
              </div>
            )}
            
            {submitStatus === "error" && (
              <div className="absolute inset-0 bg-[#05050a]/90 backdrop-blur-sm z-50 flex flex-col items-center justify-center text-center p-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-20 h-20 bg-red-500/20 text-red-400 rounded-full flex items-center justify-center mb-6"
                >
                  <AlertCircle className="w-10 h-10" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Failed</h3>
                <p className="text-gray-400">Unable to connect to the database. Please try again later.</p>
              </div>
            )}

            <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-mono tracking-widest text-slate-400 uppercase ml-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-900/40 border border-slate-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-slate-400 focus:bg-slate-800/60 shadow-inner transition-all placeholder:text-slate-600"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-mono tracking-widest text-slate-400 uppercase ml-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-900/40 border border-slate-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-slate-400 focus:bg-slate-800/60 shadow-inner transition-all placeholder:text-slate-600"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="purpose" className="text-xs font-mono tracking-widest text-slate-400 uppercase ml-1">Purpose</label>
                <select
                  id="purpose"
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  className="w-full bg-slate-900/40 border border-slate-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-slate-400 focus:bg-slate-800/60 shadow-inner transition-all appearance-none"
                >
                  <option value="Collaboration">Collaboration / Project</option>
                  <option value="Hiring">Hiring / Job Opportunity</option>
                  <option value="Workshop">Book a Workshop</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-mono tracking-widest text-slate-400 uppercase ml-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-900/40 border border-slate-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-slate-400 focus:bg-slate-800/60 shadow-inner transition-all resize-none placeholder:text-slate-600"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white font-bold transition-all shadow-lg ${
                  isSubmitting ? "bg-slate-800 cursor-not-allowed" : "glass hover:bg-white/10 hover:shadow-xl hover:-translate-y-[1px]"
                }`}
              >
                {isSubmitting ? (
                  <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : (
                  <>Send Message <Send className="w-5 h-5" /></>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
