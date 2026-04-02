"use client";

import { motion } from "framer-motion";
import { Building2, Users, Trophy, Calendar } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Founder, CEO & Chairman",
      company: "Infyna Technologies Pvt Ltd",
      period: "Present",
      description: "Leading an EdTech startup focused on revolutionizing AI education. Orchestrating school workshops, corporate seminars, and specialized tech meetups. Responsible for overall strategic direction, product development, and scaling the educational footprint.",
      achievements: [
        "Conducted multiple high-impact AI workshops across regional schools",
        "Pioneering collaboration strategies with government and institutions",
        "Built a team of dedicated developers and educators"
      ],
      icon: Building2,
      color: "blue"
    },
    {
      role: "Chapter Lead",
      company: "GeeksforGeeks Student Chapter",
      period: "2024 - 2025",
      description: "Headed the competitive programming and technical chapter at university. Facilitated workshops, coding contests, and peer-to-peer mentoring sessions.",
      achievements: [
        "Grew active member base by 200%",
        "Organized 10+ technical events and hackathons",
        "Fostered a strong coding culture leading to improved placement metrics"
      ],
      icon: Users,
      color: "green"
    },
    {
      role: "Lead",
      company: "College Technical Community",
      period: "2023 - 2025",
      description: "Spearheaded the technical community, bridging the gap between curriculum and industry-standard technologies.",
      achievements: [
        "Organized 'Hackfinity', an All India Technical Event",
        "Hosted 4 major internal AI events and seminars",
        "Mentored juniors in web development and machine learning"
      ],
      icon: Users,
      color: "purple"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
          Professional <span className="text-gradient">Experience</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl">
          My journey building companies, leading communities, and organizing massive technical events.
        </p>
      </motion.div>

      <div className="space-y-12">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass rounded-3xl p-8 lg:p-10 border border-white/5 relative overflow-hidden group"
          >
            <div className={`absolute top-0 right-0 w-64 h-64 bg-${exp.color}-500/5 blur-3xl rounded-full -mr-20 -mt-20 transition-all group-hover:bg-${exp.color}-500/10`}></div>
            
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative z-10">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                  <exp.icon className={`w-8 h-8 text-${exp.color}-400`} />
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-400">
                  <Calendar className="w-4 h-4" />
                  {exp.period}
                </div>
              </div>
              
              <div className="flex-1">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">{exp.role}</h2>
                <h3 className={`text-lg font-semibold text-${exp.color}-400 mb-6`}>{exp.company}</h3>
                
                <p className="text-gray-300 leading-relaxed mb-8">
                  {exp.description}
                </p>
                
                <div>
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-500" /> Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400">
                        <span className={`mt-1.5 block w-1.5 h-1.5 rounded-full bg-${exp.color}-400 shrink-0`}></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
