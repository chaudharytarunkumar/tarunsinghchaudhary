"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  // Using React.use to unwrap params asynchronously per Next.js 15 app router standards
  const resolvedParams = use(params);
  
  // Placeholder logic for slug routing
  const post = {
    title: resolvedParams.slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "),
    author: "Tarun Kumar",
    date: "Mar 15, 2025",
    readTime: "5 min read",
    content: "This is a placeholder for the blog content. Implementing a robust headless CMS like Sanity or Markdown processor is perfect for fetching full articles here.\n\n" + 
             "Artificial Intelligence is rapidly transforming the technological landscape. " +
             "As developers, we are at the forefront of this shift, ensuring that AI is equitable, accessible, and scalable to address real-world challenges.\n\n" +
             "In future iterations, this page will statically generate from markdown files located in your project repository.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop"
  };

  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20 pb-32">
      <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-10 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Blog
      </Link>

      <motion.article 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass rounded-3xl overflow-hidden border border-white/5"
      >
        <div className="h-[40vh] min-h-[300px] relative">
          <div className="absolute inset-0 bg-gradient-to-t from-[#05050a] to-transparent z-10 w-full h-full"></div>
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>
        
        <div className="p-8 md:p-12 -mt-20 relative z-20">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-10 pb-10 border-b border-white/5">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-blue-400" /> {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" /> {post.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" /> {post.readTime}
            </div>
          </div>

          <div className="prose prose-invert prose-lg max-w-none text-gray-300">
            {post.content.split('\n\n').map((paragraph, i) => (
              <p key={i} className="mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-white/5 flex items-center justify-between">
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-white/5 text-gray-300 text-xs rounded-full border border-white/10">Technology</span>
              <span className="px-3 py-1 bg-white/5 text-gray-300 text-xs rounded-full border border-white/10">AI</span>
            </div>
            <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
              <Share2 className="w-4 h-4" /> Share Article
            </button>
          </div>
        </div>
      </motion.article>
    </div>
  );
}
