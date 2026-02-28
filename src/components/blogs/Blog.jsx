import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, User, Calendar, ArrowRight, Search, FileText, Tag } from "lucide-react";
import { blogs } from "../../data/blog.data";

const Blogs = () => {
  const [search, setSearch] = useState("");

  const filtered = blogs.filter(
    (b) =>
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase()) ||
      b.tags?.some((t) => t.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-[#faf9f6]" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>

      {/* ── Hero ── */}
      <section className="relative bg-[#1a1209] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg,#d4a847 0,#d4a847 1px,transparent 1px,transparent 72px)," +
              "repeating-linear-gradient(0deg,#d4a847 0,#d4a847 1px,transparent 1px,transparent 72px)",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a847]/50 to-transparent" />

        <div className="max-w-5xl mx-auto px-6 py-20 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-px bg-[#d4a847]" />
              <span className="text-[#d4a847] text-[10px] font-bold uppercase tracking-[0.25em]"
                style={{ fontFamily: "system-ui, sans-serif" }}>
                KDuah Ministries · Writing
              </span>
              <div className="w-10 h-px bg-[#d4a847]" />
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold leading-tight tracking-tight mb-5">
              Insights &<br />
              <span className="text-[#d4a847]">Reflections</span>
            </h1>

            <p className="text-white/45 text-base max-w-lg leading-relaxed">
              Thoughtful essays on faith, benevolence, and the quiet forces that shape human lives.
            </p>

            <div className="mt-9 relative max-w-sm" style={{ fontFamily: "system-ui, sans-serif" }}>
              <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
              <input
                type="text"
                placeholder="Search by title, author, or tag…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full bg-white/7 border border-white/10 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#d4a847]/50 transition"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Listing ── */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400" style={{ fontFamily: "system-ui, sans-serif" }}>
            <FileText size={40} className="mx-auto mb-4 opacity-25" />
            <p className="text-lg">No results for "{search}"</p>
          </div>
        ) : (
          <div className="space-y-10">
            {filtered.map((blog, i) => (
              <BlogCard key={blog.id} blog={blog} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

/* ─── Card ─── */
const BlogCard = ({ blog, index }) => {
  // Pull the first real paragraph from the first section of page 1 as preview
  const firstSection = blog.pages?.[0]?.sections?.[0];
  const preview = firstSection?.paragraphs?.[0]?.substring(0, 240) + "…";

  const totalPages = blog.pages?.length || 0;
  const wordCount = blog.pages?.reduce(
    (acc, p) => acc + p.sections.reduce((a, s) => a + s.paragraphs.join(" ").split(" ").length, 0),
    0
  ) || 0;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link to={`/blogs/${blog.id}`} className="block">
        <div
          className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-[#d4a847]/40 transition-all duration-400"
          style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.04)" }}
        >
          {/* gold top accent */}
          <div className="h-0.5 bg-gradient-to-r from-[#d4a847] via-[#e8c56a] to-transparent group-hover:from-[#b8912e] transition-colors" />

          <div className="p-8 sm:p-10">
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1 min-w-0">
                {/* category + read time */}
                <div className="flex items-center gap-3 mb-4" style={{ fontFamily: "system-ui, sans-serif" }}>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#d4a847]">
                    {blog.category || "Essay"}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span className="text-[10px] text-gray-400 font-medium">
                    {readingTime} min read · {totalPages} pages
                  </span>
                </div>

                {/* title */}
                <h2
                  className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug mb-3 group-hover:text-[#7a3a0a] transition-colors duration-300"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {blog.title}
                </h2>

                {/* subtitle */}
                {blog.subtitle && (
                  <p className="text-base text-gray-500 italic mb-5 leading-relaxed" style={{ fontFamily: "'Georgia', serif" }}>
                    {blog.subtitle}
                  </p>
                )}

                {/* byline */}
                <div className="flex flex-wrap items-center gap-4 mb-6" style={{ fontFamily: "system-ui, sans-serif" }}>
                  <span className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#1a1209] flex items-center justify-center text-[#d4a847] text-xs font-bold">
                      {blog.author?.charAt(0)}
                    </div>
                    <span className="text-sm font-semibold text-gray-700">{blog.author}</span>
                  </span>
                  {blog.copyright && (
                    <span className="text-xs text-gray-400">{blog.copyright}</span>
                  )}
                </div>

                {/* preview paragraph */}
                <p className="text-gray-600 text-[15px] leading-relaxed line-clamp-3" style={{ fontFamily: "'Georgia', serif" }}>
                  {preview}
                </p>

                {/* tags */}
                {blog.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-5" style={{ fontFamily: "system-ui, sans-serif" }}>
                    {blog.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-semibold text-gray-500 bg-gray-50 border border-gray-150 px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* arrow circle */}
              <div className="shrink-0 w-12 h-12 rounded-full border border-gray-100 group-hover:border-[#d4a847] group-hover:bg-[#1a1209] flex items-center justify-center transition-all duration-300 mt-1">
                <ArrowRight size={16} className="text-gray-300 group-hover:text-[#d4a847] transition-colors duration-300" />
              </div>
            </div>

            {/* page strip */}
            <div
              className="mt-7 pt-5 border-t border-gray-50 flex items-center justify-between"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              <div className="flex items-center gap-2">
                <BookOpen size={12} className="text-gray-300" />
                <div className="flex gap-1">
                  {blog.pages?.map((p, i) => (
                    <div key={i} className="group/dot flex items-center gap-1">
                      <div className="w-6 h-1 rounded-full bg-gray-100 group-hover:bg-[#d4a847]/30 transition-colors" />
                      {i < blog.pages.length - 1 && (
                        <span className="text-gray-200 text-[9px]">·</span>
                      )}
                    </div>
                  ))}
                </div>
                <span className="text-[10px] text-gray-300">{totalPages} pages</span>
              </div>

              <span className="text-xs text-[#d4a847] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
                Read essay <ArrowRight size={11} />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default Blogs;