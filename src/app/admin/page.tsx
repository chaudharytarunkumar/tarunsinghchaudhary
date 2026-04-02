"use client";

import { useState, useEffect } from "react";
import { fetchQueries, verifyAdminPassword, deleteQuery } from "../../actions/admin";
import { Lock, Unlock, Mail, Clock, ShieldCheck, ChevronRight, RefreshCw, Trash2, Search, Reply } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Query = {
  id: number;
  name: string;
  email: string;
  purpose: string;
  message: string;
  created_at: string;
};

export default function AdminDashboard() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [authError, setAuthError] = useState("");
  
  const [queries, setQueries] = useState<Query[]>([]);
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Handle Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticating(true);
    setAuthError("");

    const isValid = await verifyAdminPassword(password);
    
    if (isValid) {
      setIsAuthenticated(true);
      loadQueries();
    } else {
      setAuthError("Incorrect password");
      // Add a slight delay before resetting state to prevent brute-forcing rapidly (UX feel)
      setTimeout(() => setIsAuthenticating(false), 500);
    }
  };

  // Load Database Data
  const loadQueries = async () => {
    setIsLoadingData(true);
    try {
      const data = await fetchQueries(password); // Send password again for server-side verification
      setQueries(data as any);
    } catch (error) {
      console.error("Failed to fetch queries:", error);
    } finally {
      setIsLoadingData(false);
      setIsAuthenticating(false); // Clear auth spinning state if just logged in
    }
  };

  // handleDelete
  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm("Are you sure you want to permanently delete this query?");
    if (!confirmDelete) return;

    try {
      const res = await deleteQuery(id, password);
      if (res.success) {
        setQueries(queries.filter(q => q.id !== id));
      } else {
        alert("Failed to delete query");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Filter mechanics
  const filteredQueries = queries.filter(q => 
    q.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    q.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    q.purpose.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Parse Date helper
  const formatDate = (dateString: string) => {
    const d = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "2-digit",
      hour: "numeric",
      minute: "2-digit"
    }).format(d);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 relative pt-20">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel p-10 rounded-3xl shadow-2xl max-w-md w-full relative z-10 border border-slate-700/50"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-slate-800/80 border border-slate-700 shadow-inner flex items-center justify-center">
              <Lock className="w-8 h-8 text-slate-400" />
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-center text-white mb-2 tracking-tight">Admin Dashboard</h1>
          <p className="text-slate-400 text-center mb-8 text-sm">Please enter the master password to view incoming requests.</p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-900/40 border border-slate-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-slate-400 focus:bg-slate-800/60 shadow-inner transition-all placeholder:text-slate-600 text-center tracking-widest"
                placeholder="••••••••"
              />
              {authError && <p className="text-red-400 text-xs text-center">{authError}</p>}
            </div>

            <button
              type="submit"
              disabled={isAuthenticating || !password}
              className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white font-bold transition-all shadow-lg ${
                isAuthenticating || !password ? "bg-slate-800 cursor-not-allowed opacity-70" : "glass hover:bg-white/10 hover:shadow-xl hover:-translate-y-[1px]"
              }`}
            >
              {isAuthenticating ? (
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              ) : (
                <>Unlock Dashboard <Unlock className="w-4 h-4 ml-1" /></>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 min-h-screen">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/80 text-emerald-400 text-xs w-fit mb-4 uppercase tracking-widest font-semibold shadow-inner">
             <ShieldCheck className="w-3 h-3" /> Secure Connection
          </div>
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">
            Query <span className="text-gradient">Inbox</span>
          </h1>
          <p className="mt-2 text-slate-400">Manage all requests sent through the portfolio contact form.</p>
        </div>

        <div className="flex gap-4 items-center">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search via Name/Email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-slate-900/40 border border-slate-700/50 rounded-full pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-slate-400 shadow-inner w-64"
            />
          </div>

          <button 
            onClick={loadQueries}
            className="p-2 rounded-full glass hover:bg-white/10 transition-colors shadow-lg"
            title="Refresh Data"
          >
            <RefreshCw className={`w-5 h-5 text-white ${isLoadingData ? "animate-spin" : ""}`} />
          </button>
        </div>
      </div>

      <div className="glass-panel border border-slate-700/50 rounded-3xl overflow-hidden shadow-2xl relative">
        {isLoadingData && queries.length === 0 && (
           <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center">
             <span className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
           </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/[0.02] border-b border-white/5">
                <th className="px-6 py-4 text-xs font-mono tracking-widest text-slate-400 uppercase font-medium">Date</th>
                <th className="px-6 py-4 text-xs font-mono tracking-widest text-slate-400 uppercase font-medium">Sender</th>
                <th className="px-6 py-4 text-xs font-mono tracking-widest text-slate-400 uppercase font-medium">Purpose</th>
                <th className="px-6 py-4 text-xs font-mono tracking-widest text-slate-400 uppercase font-medium">Message Body</th>
                <th className="px-6 py-4 text-xs font-mono tracking-widest text-slate-400 uppercase font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredQueries.length === 0 && !isLoadingData ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                    No queries found.
                  </td>
                </tr>
              ) : (
                filteredQueries.map((query) => (
                  <tr key={query.id} className="hover:bg-white/[0.02] transition-colors align-top">
                    <td className="px-6 py-5 whitespace-nowrap">
                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <Clock className="w-3 h-3" />
                        {formatDate(query.created_at)}
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <p className="font-semibold text-white tracking-tight">{query.name}</p>
                      <a href={`mailto:${query.email}`} className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1 mt-1">
                        <Mail className="w-3 h-3" /> {query.email}
                      </a>
                    </td>
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700 shadow-inner whitespace-nowrap">
                        {query.purpose}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <p className="text-sm text-slate-300 leading-relaxed max-w-2xl break-words">
                        {query.message}
                      </p>
                    </td>
                    <td className="px-6 py-5 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-2">
                        <a 
                          href={`mailto:${query.email}?subject=Re: Portfolio Query - ${query.purpose}&body=Hi ${query.name},%0D%0A%0D%0A`}
                          className="p-2 bg-slate-800/80 hover:bg-emerald-500/20 text-slate-400 hover:text-emerald-400 rounded-lg transition-colors border border-slate-700/50 shadow-inner group"
                          title="Revert (Reply via Email)"
                        >
                          <Reply className="w-4 h-4 group-hover:-scale-x-100 transition-transform" />
                        </a>
                        <button 
                          onClick={() => handleDelete(query.id)}
                          className="p-2 bg-slate-800/80 hover:bg-red-500/20 text-slate-400 hover:text-red-400 rounded-lg transition-colors border border-slate-700/50 shadow-inner group"
                          title="Delete Query"
                        >
                          <Trash2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
