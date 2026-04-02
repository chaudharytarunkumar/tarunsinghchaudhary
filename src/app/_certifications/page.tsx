"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Award, Calendar, CheckCircle } from "lucide-react";

export default function Certifications() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "AI/ML", "Development", "Data Science", "Leadership"];

  const certifications = [
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google / Coursera",
      date: "Oct 2023",
      category: "Data Science",
      skills: ["Data Analysis", "SQL", "Tableau", "R Programming"],
      link: "#"
    },
    {
      title: "Deep Learning Specialization",
      issuer: "DeepLearning.AI",
      date: "Dec 2024",
      category: "AI/ML",
      skills: ["Neural Networks", "TensorFlow", "Hyperparameter Tuning"],
      link: "#"
    },
    {
      title: "Full-Stack Web Development with React",
      issuer: "University of Science",
      date: "May 2024",
      category: "Development",
      skills: ["React", "Node.js", "MongoDB", "Express"],
      link: "#"
    },
    {
      title: "Agile Leadership Certification",
      issuer: "Agile Alliance",
      date: "Feb 2025",
      category: "Leadership",
      skills: ["Scrum", "Team Building", "Agile Management"],
      link: "#"
    },
    {
      title: "Applied Machine Learning in Python",
      issuer: "University of Michigan",
      date: "Jan 2024",
      category: "AI/ML",
      skills: ["Pandas", "Scikit-Learn", "Matplotlib"],
      link: "#"
    },
    {
      title: "Advanced Next.js App Router",
      issuer: "Vercel Academy",
      date: "Mar 2025",
      category: "Development",
      skills: ["Next.js 14", "React Server Components", "Performance"],
      link: "#"
    }
  ];

  const filteredCerts = filter === "All" 
    ? certifications 
    : certifications.filter(cert => cert.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
          Licenses & <span className="text-gradient">Certifications</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl">
          Continuous learning is the key to staying ahead in AI and Software Engineering.
        </p>
      </motion.div>

      {/* Filters */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-wrap gap-3 mb-12"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              filter === cat 
                ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
                : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/5"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredCerts.map((cert, idx) => (
            <motion.div
              key={cert.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="glass p-6 rounded-2xl border border-white/5 flex flex-col h-full group hover:border-blue-500/30"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-blue-900/20 rounded-xl border border-blue-500/20 text-blue-400">
                  <Award className="w-6 h-6" />
                </div>
                <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-gray-800 text-gray-300 border border-gray-700">
                  {cert.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-blue-400 font-medium text-sm mb-4">{cert.issuer}</p>
              
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                <Calendar className="w-4 h-4" /> Issued {cert.date}
              </div>
              
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.skills.map((skill, i) => (
                    <span key={i} className="text-xs text-gray-300 bg-white/5 px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-colors border border-white/5 group-hover:border-white/10"
                >
                  Verify Credential <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
