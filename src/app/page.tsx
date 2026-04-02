"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, Cpu, Presentation, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-20">
      {/* Hero Section */}
      <section className="relative px-6 pt-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900/40 via-[#030509] to-[#030509]"></div>
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-300 text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                <span>AI Engineer & Founder</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                Hi, I&apos;m Tarun Kumar. <br/>
                <span className="text-gradient">Building the Future</span> with AI.
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-400 max-w-2xl mx-auto lg:mx-0">
                Founder & CEO of Infyna Technologies. Transforming education and businesses through AI integration, full-stack development, and community leadership.
              </p>
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
                <Link
                  href="/projects"
                  className="rounded-full bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg hover:bg-white transition-all hover:scale-105 flex items-center gap-2"
                >
                  View Projects <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors">
                  Book a Workshop <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 w-full max-w-md lg:max-w-none"
            >
              <div className="aspect-[4/5] sm:aspect-[3/2] lg:aspect-[4/5] rounded-3xl bg-gradient-to-tr from-slate-800/50 to-slate-900/50 p-[1px] relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-[url('/tarun_profile.jpg')] bg-cover bg-[center_top] opacity-90"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#030509] via-transparent to-transparent opacity-80"></div>
                <div className="w-full h-full rounded-[23px] bg-transparent flex items-end p-6 relative z-10">
                  <div className="glass-panel w-full rounded-2xl p-5">
                    <p className="text-xs text-slate-400 font-mono uppercase tracking-widest mb-1">Status</p>
                    <p className="text-lg font-semibold text-white tracking-tight">Leading Infyna Technologies</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats/Highlights */}
      <section className="px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Cpu, label: "AI Projects", value: "10+", color: "text-blue-400" },
              { icon: Presentation, label: "Workshops Hosted", value: "25+", color: "text-purple-400" },
              { icon: Code2, label: "Lines of Code", value: "100k+", color: "text-green-400" },
              { icon: Sparkles, label: "Lives Impacted", value: "5000+", color: "text-yellow-400" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-panel rounded-3xl p-6 hover:bg-white/[0.02] transition-colors group"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6 text-slate-300" />
                </div>
                <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Featured AI Work</h2>
              <p className="mt-2 text-lg leading-8 text-gray-400">Innovations pushing the boundaries of technology.</p>
            </div>
            <Link href="/projects" className="hidden md:flex text-sm font-semibold text-blue-400 hover:text-blue-300 items-center gap-1">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel rounded-3xl p-8 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-slate-500/5 blur-3xl rounded-full -mr-20 -mt-20 transition-all group-hover:bg-slate-500/10"></div>
              <h3 className="text-2xl font-bold text-white mb-3">PDFGenie</h3>
              <p className="text-gray-400 mb-6 relative z-10">AI-powered PDF summarizer and chat assistant. Instantly extract insights and converse with your documents.</p>
              <div className="flex gap-2 mb-6">
                <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300">Next.js</span>
                <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300">OpenAI</span>
                <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300">Python</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel rounded-3xl p-8 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-slate-500/5 blur-3xl rounded-full -mr-20 -mt-20 transition-all group-hover:bg-slate-500/10"></div>
              <h3 className="text-2xl font-bold text-white mb-3">AIHealthGuard</h3>
              <p className="text-gray-400 mb-6 relative z-10">Predictive ML model for Ischaemic Heart Disease. Assisting medical professionals with early detection.</p>
              <div className="flex gap-2 mb-6">
                <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300">TensorFlow</span>
                <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300">Pandas</span>
                <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300">Flask</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Highlight */}
      <section className="px-6 lg:px-8">
        <div className="mx-auto max-w-7xl glass rounded-3xl overflow-hidden border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/30 border border-red-500/30 text-red-300 text-xs w-fit mb-6 uppercase tracking-wider font-semibold">
                Major Event
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">Hackfinity</h2>
              <p className="text-lg text-gray-400 mb-8">
                Organized and hosted the All India Technical Event, bringing together thousands of students, developers, and AI enthusiasts for a 48-hour innovation marathon.
              </p>
              <Link
                href="/events"
                className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black shadow-sm hover:bg-gray-200 transition-all w-fit"
              >
                Explore Events
              </Link>
            </div>
            <div className="bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center min-h-[300px] lg:min-h-full">
               {/* Event Image Cover */}
               <div className="w-full h-full bg-gradient-to-r from-[#0a0f1c] to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Bottom CTA */}
      <section className="px-6 lg:px-8 pt-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">Ready to collaborate?</h2>
            <p className="text-lg text-gray-400 mb-8">
              Whether you need a cutting-edge web application, an AI integration, or an inspiring workshop for your institution.
            </p>
            <Link
              href="/contact"
              className="glass rounded-full px-8 py-4 text-base font-bold text-white hover:bg-white/5 transition-all hover:scale-105 flex items-center justify-center"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
