import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, Share2, BookOpen, ChevronLeft,
  ChevronRight, Check, FileText, Menu, X, Mail, Phone
} from "lucide-react";
import { blogs } from "../../data/blog.data";

/* ─── Reading progress hook ─── */
const useReadingProgress = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return progress;
};

/* ─── Section renderer ─── */
const Section = ({ section, isFirstSection, pageNumber }) => {
  return (
    <div className="mb-10">
      {section.heading && (
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 mt-10 mb-5 tracking-tight"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          {section.heading}
        </h2>
      )}

      {section.paragraphs.map((para, i) => {
        const isDropCap = isFirstSection && i === 0 && pageNumber === 1;
        return (
          <motion.p
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: Math.min(i * 0.05, 0.35) }}
            className={`text-gray-700 leading-[1.95] text-[17px] mb-6 ${isDropCap ? "drop-cap" : ""}`}
            style={{
              textAlign: "justify",
              hyphens: "auto",
              fontFamily: "'Georgia', 'Times New Roman', serif",
            }}
          >
            {para}
          </motion.p>
        );
      })}
    </div>
  );
};

/* ─── Main component ─── */
const BlogDetails = () => {
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(0);
  const [copied, setCopied] = useState(false);
  const [tocOpen, setTocOpen] = useState(false);
  const topRef = useRef(null);
  const scrollProgress = useReadingProgress();

  const blog = blogs.find((b) => b.id === id) || null;

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [currentPage]);

  const handleShare = () => {
    navigator.clipboard.writeText(`${window.location.origin}/blogs/${id}`).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  if (!blog) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center gap-5 bg-[#faf9f6]"
        style={{ fontFamily: "'Georgia', serif" }}
      >
        <FileText size={44} className="text-gray-200" />
        <h2 className="text-2xl font-bold text-gray-500">Blog not found</h2>
        <Link to="/blogs" className="flex items-center gap-2 text-sm text-[#d4a847] hover:underline">
          <ArrowLeft size={14} /> Back to Blogs
        </Link>
      </div>
    );
  }

  const pages = blog.pages || [];
  const page = pages[currentPage];
  const totalPages = pages.length;

  const wordCount = pages.reduce(
    (acc, p) => acc + p.sections.reduce((a, s) => a + s.paragraphs.join(" ").split(" ").length, 0),
    0
  );
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <div className="min-h-screen bg-[#faf9f6]" ref={topRef}>

      {/* ── Scroll progress bar ── */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-gray-200/60">
        <motion.div
          className="h-full bg-[#d4a847]"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* ── Sticky nav ── */}
      <nav className="sticky top-0 z-40 bg-[#faf9f6]/96 backdrop-blur-sm border-b border-gray-100/80">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between gap-4">

          {/* back */}
          <Link
            to="/blogs"
            className="flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-gray-800 transition"
            style={{ fontFamily: "system-ui, sans-serif" }}
          >
            <ArrowLeft size={13} /> Blogs
          </Link>

          {/* page pill dots */}
          <div className="flex items-center gap-2">
            {pages.map((p, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                title={p.label}
                className={`transition-all duration-300 rounded-full ${
                  i === currentPage
                    ? "w-7 h-2.5 bg-[#d4a847]"
                    : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* TOC */}
            <button
              onClick={() => setTocOpen(!tocOpen)}
              className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition"
            >
              {tocOpen ? <X size={14} /> : <Menu size={14} />}
            </button>

            {/* Share */}
            <motion.button
              whileTap={{ scale: 0.93 }}
              onClick={handleShare}
              className="flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-full border border-gray-200 hover:border-[#d4a847] text-gray-500 hover:text-[#8B4513] transition"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              {copied ? <Check size={12} className="text-green-500" /> : <Share2 size={12} />}
              {copied ? "Copied!" : "Share"}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* ── TOC dropdown ── */}
      <AnimatePresence>
        {tocOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="sticky top-14 z-30 bg-white border-b border-gray-100 shadow-md"
          >
            <div className="max-w-4xl mx-auto px-6 py-5" style={{ fontFamily: "system-ui, sans-serif" }}>
              <p className="text-[9px] font-black uppercase tracking-[0.25em] text-gray-400 mb-3">
                Table of Contents
              </p>
              <div className="flex flex-wrap gap-2">
                {pages.map((p, i) => (
                  <button
                    key={i}
                    onClick={() => { setCurrentPage(i); setTocOpen(false); }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border transition ${
                      i === currentPage
                        ? "bg-[#1a1209] text-[#d4a847] border-[#1a1209]"
                        : "bg-gray-50 text-gray-600 border-gray-200 hover:border-[#d4a847]/50 hover:text-gray-900"
                    }`}
                  >
                    <span className="text-[9px] font-black opacity-50">{String(i + 1).padStart(2, "0")}</span>
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Page content ── */}
      <main className="max-w-2xl mx-auto px-6 pb-32">

        {/* Cover block — only on first page */}
        {currentPage === 0 && (
          <motion.header
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="pt-16 pb-12 border-b-2 border-[#d4a847]/25 mb-12"
          >
            {/* ornamental divider */}
            <div className="flex items-center gap-4 mb-9">
              <div className="h-px bg-gradient-to-r from-[#d4a847] to-transparent flex-1" />
              <span
                className="text-[#d4a847] text-[9px] font-black uppercase tracking-[0.3em]"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                {blog.category || "Essay"}
              </span>
              <div className="h-px bg-gradient-to-l from-[#d4a847] to-transparent flex-1" />
            </div>

            <h1
              className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-6"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              {blog.title}
            </h1>

            {blog.subtitle && (
              <p
                className="text-lg sm:text-xl text-gray-500 italic leading-relaxed mb-9"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {blog.subtitle}
              </p>
            )}

            {/* byline row */}
            <div
              className="flex flex-wrap items-center gap-6 text-sm text-gray-500"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              <span className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#1a1209] flex items-center justify-center text-[#d4a847] font-bold">
                  {blog.author?.charAt(0)}
                </div>
                <span className="font-semibold text-gray-800">{blog.author}</span>
              </span>
              <span className="flex items-center gap-1.5 text-gray-400">
                <BookOpen size={12} />
                {readingTime} min read
              </span>
              <span className="text-gray-400">{blog.copyright}</span>
            </div>

            {/* tags */}
            {blog.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-7" style={{ fontFamily: "system-ui, sans-serif" }}>
                {blog.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] font-semibold text-gray-500 bg-gray-50 border border-gray-200 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </motion.header>
        )}

        {/* Page section label (pages 2+) */}
        {currentPage > 0 && (
          <div className="pt-12 mb-10">
            <div className="flex items-center gap-4">
              <div className="h-px bg-gradient-to-r from-[#d4a847]/50 to-transparent flex-1" />
              <span
                className="text-[9px] font-black uppercase tracking-[0.25em] text-[#d4a847]"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                Page {page.pageNumber} — {page.label}
              </span>
              <div className="h-px bg-gradient-to-l from-[#d4a847]/50 to-transparent flex-1" />
            </div>
          </div>
        )}

        {/* Sections */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            {page?.sections.map((section, si) => (
              <Section
                key={si}
                section={section}
                isFirstSection={si === 0}
                pageNumber={page.pageNumber}
              />
            ))}

            {/* ── Author card on final page ── */}
            {currentPage === totalPages - 1 && (
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-16 rounded-3xl bg-[#1a1209] text-white overflow-hidden"
              >
                {/* gold top bar */}
                <div className="h-1 bg-gradient-to-r from-[#d4a847] via-[#e8c56a] to-[#d4a847]" />

                <div className="p-8">
                  <p
                    className="text-[9px] font-black uppercase tracking-[0.3em] text-[#d4a847] mb-6"
                    style={{ fontFamily: "system-ui, sans-serif" }}
                  >
                    Written By
                  </p>

                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-[#d4a847]/15 border border-[#d4a847]/30 flex items-center justify-center text-[#d4a847] font-bold text-2xl shrink-0">
                      {blog.author?.charAt(0)}
                    </div>
                    <div style={{ fontFamily: "system-ui, sans-serif" }}>
                      <p className="font-bold text-lg text-white">{blog.author}</p>
                      {blog.authorTitle && (
                        <p className="text-[#d4a847]/70 text-xs mt-0.5">{blog.authorTitle}</p>
                      )}

                      <div className="flex flex-col gap-2 mt-4">
                        {blog.contact && (
                          <a
                            href={`tel:${blog.contact.split("/")[0].trim()}`}
                            className="flex items-center gap-2 text-xs text-white/60 hover:text-[#d4a847] transition"
                          >
                            <Phone size={12} />
                            {blog.contact}
                          </a>
                        )}
                        {blog.email && (
                          <a
                            href={`mailto:${blog.email}`}
                            className="flex items-center gap-2 text-xs text-white/60 hover:text-[#d4a847] transition"
                          >
                            <Mail size={12} />
                            {blog.email}
                          </a>
                        )}
                      </div>

                      <p className="text-[10px] text-white/30 mt-4">{blog.copyright}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* ── Page navigation ── */}
        <div
          className="flex items-center justify-between mt-16 pt-6 border-t border-gray-100"
          style={{ fontFamily: "system-ui, sans-serif" }}
        >
          <button
            onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
            disabled={currentPage === 0}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition ${
              currentPage === 0
                ? "text-gray-300 border-gray-100 cursor-not-allowed"
                : "text-gray-700 border-gray-200 hover:border-[#d4a847] hover:text-[#7a3a0a]"
            }`}
          >
            <ChevronLeft size={15} /> Previous
          </button>

          <span className="text-xs text-gray-400">
            {currentPage + 1} / {totalPages}
          </span>

          {currentPage < totalPages - 1 ? (
            <button
              onClick={() => setCurrentPage((p) => p + 1)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-[#1a1209] text-[#d4a847] hover:bg-[#2d1f0a] transition"
            >
              Next <ChevronRight size={15} />
            </button>
          ) : (
            <Link
              to="/blogs"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-[#d4a847] text-white hover:bg-[#b8912e] transition"
            >
              All Blogs <ChevronRight size={15} />
            </Link>
          )}
        </div>
      </main>

      {/* Drop cap CSS */}
      <style>{`
        .drop-cap::first-letter {
          font-size: 4.5rem;
          font-weight: 700;
          float: left;
          line-height: 0.78;
          margin: 0.05em 0.12em 0 0;
          color: #1a1209;
          font-family: 'Georgia', serif;
        }
      `}</style>
    </div>
  );
};

export default BlogDetails;