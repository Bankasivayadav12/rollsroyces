"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchModal from "@/components/SearchModal";
import AccessibilityModal from "@/components/AccessibilityModal";
import {
  newsArticlesData,
  getArticleByIdOrNumeric,
  NewsArticle,
} from "@/data/newsArticles";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Clock,
  Share2,
  Copy,
  Check,
  Mail,
  ArrowRight,
  Printer,
  Sparkles,
  MapPin,
  Quote,
  Building,
} from "lucide-react";
import { motion } from "framer-motion";

interface NewsDetailPageProps {
  params: Promise<{ id: string }> | { id: string };
}

export default function NewsDetailPage({ params }: NewsDetailPageProps) {
  // Unpack params safely for Next.js 15/16 compatibility
  const resolvedParams = "then" in params ? use(params) : params;
  const articleId = resolvedParams.id;

  const article: NewsArticle =
    getArticleByIdOrNumeric(articleId) || newsArticlesData[0];

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("RollsRoyces@rollsroyces.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  // Other 3 articles for "Related Updates"
  const otherArticles = newsArticlesData.filter((a) => a.id !== article.id);

  return (
    <main className="min-h-screen bg-white flex flex-col selection:bg-[#001e62] selection:text-white">
      {/* 1. Main Navigation Bar */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen((prev) => !prev)}
        isSearchOpen={isSearchOpen}
      />

      {/* 2. Breadcrumbs Bar */}
      <div className="w-full bg-white border-b border-gray-100 py-3.5 px-4 sm:px-6 md:px-12 text-xs sm:text-sm">
        <div className="max-w-[1400px] mx-auto flex items-center gap-2 text-gray-600 font-normal">
          <Link href="/" className="hover:text-[#001e62] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 stroke-[2.2] text-gray-400" />
          <Link href="/#latest-updates" className="hover:text-[#001e62] transition-colors">
            Latest updates
          </Link>
          <ChevronRight className="w-3.5 h-3.5 stroke-[2.2] text-gray-400" />
          <span className="text-[#001e62] font-semibold truncate max-w-[260px] sm:max-w-md">
            {article.title}
          </span>
        </div>
      </div>

      {/* 3. Article Header Section */}
      <article className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 pt-8 sm:pt-12 pb-16 sm:pb-24">
        {/* Back Link */}
        <div className="mb-6 sm:mb-8">
          <Link
            href="/#latest-updates"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#001e62] hover:text-[#0a2f8c] transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Latest Updates</span>
          </Link>
        </div>

        {/* Metadata Badges & Date */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-[13px] font-semibold uppercase tracking-wider">
          <span className="px-3 py-1 rounded-full bg-[#001e62] text-white">
            {article.type}
          </span>
          <span className="flex items-center gap-1.5 text-gray-500 font-medium">
            <Calendar className="w-3.5 h-3.5 text-gray-400" />
            {article.date}
          </span>
          <span className="text-gray-300">•</span>
          <span className="flex items-center gap-1.5 text-gray-500 font-medium">
            <Clock className="w-3.5 h-3.5 text-gray-400" />
            {article.readTime}
          </span>
          <span className="text-gray-300">•</span>
          <span className="flex items-center gap-1.5 text-gray-500 font-medium">
            <MapPin className="w-3.5 h-3.5 text-gray-400" />
            {article.location}
          </span>
        </div>

        {/* Article Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-[#001438] tracking-tight leading-[1.15] mb-4 sm:mb-6">
          {article.title}
        </h1>

        {/* Subtitle / Executive Summary */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed font-normal mb-8 sm:mb-10 max-w-4xl border-l-4 border-[#001e62] pl-4 sm:pl-6 py-1">
          {article.subtitle}
        </p>

        {/* Actions Bar (Share, Print, Copy) */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-gray-200 mb-8 sm:mb-10 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-gray-500">
            <span className="font-medium text-gray-700">Published by:</span>
            <span>{article.author}</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition-colors cursor-pointer"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Link Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-gray-500" />
                  <span>Copy Link</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-gray-500" />
              <span>Print</span>
            </button>
          </div>
        </div>

        {/* Large Hero Featured Image Passed Directly */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[16/9] sm:aspect-[21/10] w-full rounded-xl overflow-hidden shadow-2xl bg-gray-900 mb-10 sm:mb-14 border border-gray-100 group"
        >
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10 text-white/90 text-xs sm:text-sm font-medium drop-shadow-md">
            <span>Official Rolls Royces Press Photography • {article.title}</span>
          </div>
        </motion.div>

        {/* Article Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Main Editorial Text Column (8 cols) */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8 text-base sm:text-lg leading-[1.8] text-gray-800">
            {article.content.map((paragraph, index) => (
              <p key={index} className="font-normal text-gray-700 leading-[1.85]">
                {paragraph}
              </p>
            ))}

            {/* Featured Pull Quote Block */}
            {article.quote && (
              <div className="my-8 sm:my-10 p-6 sm:p-8 rounded-xl bg-gradient-to-br from-blue-50/70 to-slate-50 border-l-4 border-[#001e62] shadow-sm">
                <Quote className="w-8 h-8 text-[#001e62]/40 mb-3" />
                <p className="text-lg sm:text-xl font-medium text-[#001438] italic leading-relaxed mb-4">
                  &ldquo;{article.quote.text}&rdquo;
                </p>
                <div className="text-sm font-bold text-[#001e62]">
                  {article.quote.speaker}
                </div>
                <div className="text-xs text-gray-500 font-medium">
                  {article.quote.role}
                </div>
              </div>
            )}

            {/* Key Performance Stats Grid */}
            <div className="mt-10 sm:mt-14 pt-8 border-t border-gray-200">
              <h3 className="text-xl sm:text-2xl font-bold text-[#001438] mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#001e62]" />
                <span>Key Programme Highlights &amp; Metrics</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {article.keyStats.map((stat, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-lg bg-gray-50 border border-gray-200/90 hover:border-[#001e62] transition-colors"
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-[#001e62] tracking-tight mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm font-semibold text-gray-800 mb-1">
                      {stat.label}
                    </div>
                    {stat.description && (
                      <div className="text-xs text-gray-500 font-normal">
                        {stat.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Tags Pills */}
            <div className="pt-8 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 mr-2">
                Related Topics:
              </span>
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 hover:bg-[#001e62] hover:text-white transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Media & Press Office Inquiries Box */}
            <div className="p-6 sm:p-7 rounded-xl bg-[#001438] text-white shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-cyan-300" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Media Inquiries</h4>
                  <span className="text-xs text-cyan-200 uppercase tracking-wider font-semibold">
                    Global Press Office
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-4">
                For press releases, broadcast assets, high-res photography, and executive interviews, please contact:
              </p>

              <div className="bg-white/10 p-3 rounded-lg mb-4 text-xs font-mono select-all flex items-center justify-between">
                <span>RollsRoyces@rollsroyces.com</span>
                <button
                  onClick={handleCopyEmail}
                  className="p-1 rounded text-cyan-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <a
                href="mailto:RollsRoyces@rollsroyces.com"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white text-[#001438] hover:bg-cyan-50 font-bold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                <span>Email Press Office</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Other Latest Updates Cards */}
            <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm">
              <h4 className="text-base font-bold text-[#001438] uppercase tracking-wider mb-5 pb-3 border-b border-gray-100 flex items-center justify-between">
                <span>Other Latest Updates</span>
                <span className="text-xs text-[#001e62] font-semibold">3 Stories</span>
              </h4>

              <div className="space-y-5">
                {otherArticles.map((other) => (
                  <Link
                    key={other.id}
                    href={`/news/${other.id}`}
                    className="group block"
                  >
                    <div className="flex gap-3.5 items-start">
                      <div className="w-20 h-16 rounded-md overflow-hidden bg-gray-100 shrink-0">
                        <img
                          src={other.image}
                          alt={other.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-108"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[10.5px] uppercase font-bold text-gray-500 block mb-1">
                          {other.date}
                        </span>
                        <h5 className="text-xs sm:text-[13px] font-semibold text-[#001e62] group-hover:text-[#0a2f8c] line-clamp-2 leading-snug transition-colors">
                          {other.title}
                        </h5>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="pt-5 mt-5 border-t border-gray-100">
                <Link
                  href="/#latest-updates"
                  className="text-xs font-bold uppercase tracking-wider text-[#001e62] hover:text-[#0a2f8c] flex items-center gap-1.5 transition-colors"
                >
                  <span>View All Updates on Home</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </article>

      {/* 4. Footer */}
      <Footer />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </main>
  );
}

