"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Users, Cpu, Server, Code, Sparkles } from "lucide-react";

export default function About() {
  const skills = [
    { name: "Artificial Intelligence", level: 95 },
    { name: "Machine Learning", level: 90 },
    { name: "Full Stack Development", level: 92 },
    { name: "Next.js & React", level: 95 },
    { name: "Python", level: 90 },
    { name: "Event Management", level: 98 },
    { name: "Public Speaking", level: 95 },
    { name: "Leadership", level: 98 },
  ];

  const timeline = [
    {
      type: "education",
      year: "2026 (Expected)",
      title: "BTech CSE (AI & ML)",
      institution: "Dr. APJ Abdul Kalam Technical University, Lucknow",
      icon: GraduationCap,
    },
    {
      type: "leadership",
      year: "2024 - 2025",
      title: "GFG Student Chapter Lead",
      institution: "GeeksforGeeks",
      icon: Users,
    },
    {
      type: "leadership",
      year: "2023 - 2025",
      title: "College Technical Community Lead",
      institution: "Technical Board",
      icon: Users,
    },
    {
      type: "education",
      year: "2022",
      title: "Class 12th Board",
      institution: "Jaypee Vidya Mandir",
      icon: GraduationCap,
    },
    {
      type: "education",
      year: "2020",
      title: "Class 10th Board",
      institution: "Jaypee Vidya Mandir",
      icon: GraduationCap,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
          About <span className="text-gradient">Me</span>
        </h1>
        
        {/* Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-6 text-lg text-gray-400">
            <p>
              I am an AI Engineer, Full Stack Developer, and the <strong className="text-white">Founder & CEO of Infyna Technologies Pvt Ltd</strong>. 
              My mission is to democratize artificial intelligence education by conducting workshops in schools, seminars in established companies, and leading future-proof tech communities.
            </p>
            <p>
              Under my leadership at Infyna Technologies, we bridge the gap between academic learning and industry expectations. 
              I am passionate about not just building cutting-edge predictive ML models and next-generation web applications, but also empowering the next wave of engineers to do the same.
            </p>
            <p>
              Beyond coding, I am an avid public speaker, event organizer, and visionary leader striving to collaborate closely with the government and enterprises to build a massive educational footprint.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 border border-white/5 h-fit">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-blue-400" /> Current Focus
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex gap-2"><Sparkles className="w-5 h-5 text-yellow-400 shrink-0" /> Scaling Infyna Technologies</li>
              <li className="flex gap-2"><Sparkles className="w-5 h-5 text-yellow-400 shrink-0" /> AI Workshop Curriculum Design</li>
              <li className="flex gap-2"><Sparkles className="w-5 h-5 text-yellow-400 shrink-0" /> Gov Collaborations for EdTech</li>
            </ul>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">Journey</h2>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-800 before:to-transparent">
            {timeline.map((item, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-800 bg-[#05050a] group-hover:bg-blue-900 group-hover:border-blue-500 text-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors">
                  <item.icon className="w-4 h-4" />
                </div>
                {/* Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-5 rounded-xl border border-white/5 transition-all group-hover:border-blue-500/30">
                  <div className="flex flex-col mb-1 text-blue-400 font-mono text-xs uppercase font-semibold">
                    {item.year}
                  </div>
                  <h3 className="font-bold text-white text-lg">{item.title}</h3>
                  <div className="text-gray-400 text-sm">{item.institution}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            Core Expertise
          </h2>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="glass p-6 rounded-2xl border border-white/5">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Cpu className="text-blue-400" /> Technologies & Soft Skills
              </h3>
              <div className="space-y-5">
                {skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                      <span className="text-sm font-medium text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="bg-blue-500 h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass p-6 rounded-2xl border border-white/5 flex items-center gap-6">
              <div className="p-4 bg-blue-900/20 rounded-full border border-blue-500/20">
                <Server className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Full Stack Architecture</h4>
                <p className="text-sm text-gray-400">Designing highly scalable applications with modern toolchains.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
