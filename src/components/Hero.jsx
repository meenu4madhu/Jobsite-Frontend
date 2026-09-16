import React from 'react'
import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  ArrowRight,
  Sparkles,
} from "lucide-react";
function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 pt-32 pb-20 sm:pt-36 sm:pb-24">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-violet-200/50 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-20 top-48 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl"
        />

        <div className="absolute left-1/2 top-20 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Main Hero Content */}
        <div className="mx-auto max-w-4xl text-center">

          {/* Small Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm"
          >
            <Sparkles size={15} className="text-violet-500" />
            Find opportunities that fit you
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl"
          >
            Find Your{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Dream Job.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg"
          >
            Discover exciting career opportunities from companies
            looking for talented people like you. Your next opportunity
            could be just one search away.
          </motion.p>

          {/* Search Box */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-10 max-w-3xl"
          >
            <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/60 sm:rounded-full">

              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">

                {/* Search Input */}
                <div className="flex flex-1 items-center gap-3 px-4 py-3">
                  <Search
                    size={20}
                    className="shrink-0 text-slate-400"
                  />

                  <input
                    type="text"
                    placeholder="Job title or company"
                    className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400 sm:text-base"
                  />
                </div>

                {/* Location */}
                <div className="hidden h-8 w-px bg-slate-200 sm:block" />

                <div className="hidden items-center gap-3 px-4 sm:flex">
                  <MapPin
                    size={19}
                    className="text-slate-400"
                  />

                  <span className="whitespace-nowrap text-sm text-slate-400">
                    Location
                  </span>
                </div>

                {/* Search Button */}
                <button
                  type="button"
                  className="group flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-violet-600 sm:rounded-full"
                >
                  Search Jobs

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

              </div>
            </div>
          </motion.div>

          {/* Popular Searches */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm"
          >
            <span className="text-slate-400">
              Popular:
            </span>

            <button className="text-slate-600 transition hover:text-violet-600">
              React Developer
            </button>

            <span className="text-slate-300">•</span>

            <button className="text-slate-600 transition hover:text-violet-600">
              UI/UX Designer
            </button>

            <span className="text-slate-300">•</span>

            <button className="text-slate-600 transition hover:text-violet-600">
              Marketing
            </button>
          </motion.div>

        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mx-auto mt-16 grid max-w-3xl grid-cols-3 border-y border-slate-200 py-7"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              500+
            </h3>

            <p className="mt-1 text-xs text-slate-400 sm:text-sm">
              Active Jobs
            </p>
          </div>

          <div className="border-x border-slate-200 text-center">
            <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              100+
            </h3>

            <p className="mt-1 text-xs text-slate-400 sm:text-sm">
              Companies
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              10K+
            </h3>

            <p className="mt-1 text-xs text-slate-400 sm:text-sm">
              Job Seekers
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero