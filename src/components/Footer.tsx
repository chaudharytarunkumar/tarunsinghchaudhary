import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/50 mt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center space-x-6 md:order-2">
            <a href="https://github.com/tarunkumar" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <FaGithub className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/tarunkumar" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a href="https://instagram.com/tarunsinghchdhry" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
              <span className="sr-only">Instagram</span>
              <FaInstagram className="h-5 w-5" />
            </a>
            <a href="https://t.me/tarunkumar" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
              <span className="sr-only">Telegram</span>
              <Send className="h-5 w-5" />
            </a>
            <a href="mailto:tarunsinghchaudharyy@gmail.com" className="text-slate-500 hover:text-white transition-colors">
              <span className="sr-only">Email</span>
              <Mail className="h-5 w-5" />
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-sm font-mono tracking-widest text-slate-500 uppercase">
              &copy; {currentYear} Tarun Kumar. Founder of Infyna Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
