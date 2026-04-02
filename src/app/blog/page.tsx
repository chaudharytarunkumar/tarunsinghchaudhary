"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";

export default function Blog() {
  const posts = [
    {
      slug: "future-of-ai-in-education",
      title: "The Future of AI in Education: Bridging the Gap",
      excerpt: "How Artificial Intelligence is personalizing learning experiences and reducing the gap between academic curriculum and industry demands.",
      date: "Mar 15, 2025",
      author: "Tarun Kumar",
      readTime: "5 min read",
      category: "EdTech",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop"
    },
    {
      slug: "building-scalable-rag-applications",
      title: "Building Scalable RAG Applications with Next.js",
      excerpt: "A deep dive into Retrieval-Augmented Generation (RAG) and how to seamlessly integrate it into your Next.js full-stack applications.",
      date: "Feb 28, 2025",
      author: "Tarun Kumar",
      readTime: "8 min read",
      category: "Engineering",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop"
    },
    {
      slug: "organizing-national-hackathons",
      title: "Lessons Learned from Organizing Hackfinity",
      excerpt: "From 100 to 1000 participants: How we scaled a college hackathon into a massive national event over a single weekend.",
      date: "Jan 10, 2025",
      author: "Tarun Kumar",
      readTime: "6 min read",
      category: "Leadership",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center md:text-left"
      >
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
          Tech <span className="text-gradient">Insights</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl">
          Thoughts on AI, software engineering, and building communities.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, idx) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col glass rounded-3xl overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all group"
          >
            <div className="h-48 overflow-hidden relative">
              <div className="absolute inset-0 bg-blue-900/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
              <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-black/50 backdrop-blur-md text-white border border-white/10">
                  {post.category}
                </span>
              </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
              </div>
              
              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>
              
              <p className="text-gray-400 text-sm flex-1 mb-6">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-900 border border-blue-500 flex items-center justify-center text-xs font-bold text-white shadow-inner">
                    TK
                  </div>
                  <span className="text-sm font-medium text-gray-300">{post.author}</span>
                </div>
                <Link href={`/blog/${post.slug}`} className="text-blue-400 hover:text-blue-300">
                  <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
