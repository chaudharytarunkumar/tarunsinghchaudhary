"use client";

import { motion } from "framer-motion";
import { Mic, Users, Calendar, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Events() {
  const workshops = [
    {
      title: "AI & ML for Beginners",
      date: "August 2024",
      audience: "High School Students",
      location: "Various Schools (Infyna Technologies)",
      attendees: 500
    },
    {
      title: "Advanced Web Architecture",
      date: "October 2024",
      audience: "University Students",
      location: "College Campus",
      attendees: 200
    },
    {
      title: "Building Predictive Models",
      date: "January 2025",
      audience: "Tech Enthusiasts",
      location: "Virtual Seminar",
      attendees: 350
    },
    {
      title: "Future of EdTech with AI",
      date: "February 2025",
      audience: "Corporate Seminar",
      location: "Tech Hub",
      attendees: 150
    }
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop",
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl mb-4">
          Speaking & <span className="text-gradient">Events</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl">
          Evangelizing AI through community building, workshops, and massive technical events.
        </p>
      </motion.div>

      {/* Major Event Highlight: Hackfinity */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-panel rounded-3xl overflow-hidden shadow-2xl mb-20 relative group"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-800/30 to-transparent pointer-events-none"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10 transition-transform duration-700">
          <div className="p-8 lg:p-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/80 text-slate-300 text-xs w-fit mb-6 uppercase tracking-widest font-semibold shadow-inner">
              All India Event Highlight
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">Hackfinity</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Organized and hosted one of the most prestigious internal AI events turned All India Technical Fest. 
              Hackfinity brought together brilliant minds from across the country for a 48-hour innovation marathon. 
              As the Lead Organizer, I oversaw everything from sponsorships and jury panels to technical infrastructure and logistics.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <p className="text-3xl font-bold text-white mb-1">1000+</p>
                <p className="text-sm text-gray-400">Registrations</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white mb-1">48 Hrs</p>
                <p className="text-sm text-gray-400">Non-stop Coding</p>
              </div>
            </div>
          </div>
          <div className="bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center min-h-[300px] lg:min-h-full">
            <div className="w-full h-full bg-gradient-to-r from-slate-950 via-slate-950/80 lg:via-slate-900/50 to-transparent"></div>
          </div>
        </div>
      </motion.div>

      {/* Internal Events & Workshops */}
      <div className="mb-20">
        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 tracking-tighter">
          <Mic className="text-slate-400" /> Workshops Conducted
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workshops.map((workshop, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-6 rounded-3xl hover:bg-white/[0.02] transition-colors shadow-lg"
            >
              <h4 className="text-lg font-bold text-white mb-4 h-14 tracking-tight">{workshop.title}</h4>
              <div className="space-y-4 text-sm text-slate-400">
                <div className="flex items-center gap-3"><Calendar className="w-4 h-4 text-slate-500" />{workshop.date}</div>
                <div className="flex items-center gap-3"><Users className="w-4 h-4 text-slate-500" />{workshop.audience} <span className="text-xs glass px-2 py-0.5 rounded-md text-slate-300">{workshop.attendees}+</span></div>
                <div className="flex items-center gap-3"><MapPin className="w-4 h-4 text-slate-500" />{workshop.location}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div className="mb-20">
        <h3 className="text-2xl font-bold text-white mb-8">Event Gallery</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {gallery.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="aspect-square rounded-3xl glass p-2 shadow-xl group cursor-pointer"
            >
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img src={img} alt={`Event ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-panel rounded-3xl p-10 lg:p-16 text-center border-t border-white/10 shadow-2xl"
      >
        <h2 className="text-3xl font-bold text-white mb-4 tracking-tighter">Want me to speak at your next event?</h2>
        <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
          Need a speaker for AI, Tech Entrepreneurship, or Web Development? Let&apos;s make it happen. I conduct tailored workshops for schools, colleges, and corporate settings.
        </p>
        <Link
          href="/contact?subject=Speaking+Invitation"
          className="inline-flex flex-row items-center gap-2 rounded-full glass px-8 py-4 text-sm font-bold tracking-wide uppercase text-white shadow-lg hover:bg-white/10 transition-all hover:-translate-y-1"
        >
          Invite Me <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </div>
  );
}
