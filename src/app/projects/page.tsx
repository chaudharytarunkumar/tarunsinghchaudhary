"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2, Database, Layout } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "PDFGenie",
      category: "AI & Full Stack",
      problem: "Extracting specific insights from long, dense PDF documents takes too much time for researchers and students.",
      solution: "An AI-powered application that not only summarizes but allows users to chat natively with their PDFs using RAG architecture.",
      features: ["Instant Summarization", "Context-Aware Chat", "Multi-Document Support"],
      techStack: ["Next.js", "OpenAI API", "Python", "LangChain"],
      demoLink: "#",
      githubLink: "#",
      icon: Layout,
      color: "from-slate-400 to-slate-600"
    },
    {
      title: "AIHealthGuard",
      category: "Machine Learning",
      problem: "Early detection of Ischaemic Heart Disease is difficult without specialized screening tools.",
      solution: "A predictive ML model that analyzes patient vitals and history to assess the risk of Ischaemic Heart Disease with high accuracy.",
      features: ["Predictive Analytics", "Health Dashboard", "Exportable Reports"],
      techStack: ["TensorFlow", "Pandas", "Flask", "React"],
      demoLink: "#",
      githubLink: "#",
      icon: Database,
      color: "from-slate-500 to-slate-700"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 pb-32">
      <div className="text-center md:text-left mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold tracking-tighter text-white sm:text-5xl mb-4"
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-400 max-w-2xl"
        >
          A selection of my recent work in Artificial Intelligence, Machine Learning, and Full Stack Development.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-panel rounded-3xl overflow-hidden group hover:bg-white/[0.02] transition-colors"
          >
            <div className={`h-2 w-full bg-gradient-to-r ${project.color}`}></div>
            <div className="p-8 md:p-10">
              <div className="flex flex-col lg:flex-row gap-10">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-white/5 rounded-2xl border border-white/10 shadow-inner">
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-mono tracking-widest uppercase text-slate-400 mb-1">{project.category}</p>
                      <h2 className="text-3xl font-bold text-white tracking-tight">{project.title}</h2>
                    </div>
                  </div>
                  
                  <div className="space-y-6 mt-8">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">The Problem</h3>
                      <p className="text-gray-400 leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">The Solution</h3>
                      <p className="text-gray-400 leading-relaxed">{project.solution}</p>
                    </div>
                  </div>

                  <div className="mt-8 flex gap-4">
                    <Link href={project.demoLink} className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors border border-white/5">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </Link>
                    <Link href={project.githubLink} className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-transparent hover:bg-white/5 text-gray-300 hover:text-white font-medium transition-colors">
                      <FaGithub className="w-4 h-4" /> Source Code
                    </Link>
                  </div>
                </div>

                <div className="flex-1 lg:max-w-sm space-y-8">
                  <div className="bg-black/20 rounded-2xl p-6 border border-white/5">
                    <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4 flex items-center gap-2">
                       <Code2 className="w-4 h-4" /> Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="px-3 py-1.5 text-sm rounded-lg bg-slate-800/50 text-slate-300 border border-slate-700/50 shadow-inner">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-black/20 rounded-2xl p-6 border border-white/5">
                    <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
                       Key Features
                    </h3>
                    <ul className="space-y-3">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="mt-1 block w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
