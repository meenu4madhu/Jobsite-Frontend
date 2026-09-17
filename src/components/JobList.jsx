
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SearchX } from "lucide-react";

import JobCard from "./JobCard";
import CategoryFilter from "./CategoryFilter";
import api from "../api/axios";

const JobList = ({ refreshJobs }) => {
  const [jobs, setJobs] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch jobs from backend
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await api.get("/jobs");

        setJobs(response.data);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
        setError("Failed to load jobs. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [refreshJobs]);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesCategory =
        activeCategory === "All" ||
        job.category === activeCategory;

      const search = searchTerm.toLowerCase();

      const matchesSearch =
        job.title.toLowerCase().includes(search) ||
        job.company.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [jobs, activeCategory, searchTerm]);

  return (
    <section
      id="jobs"
      className="scroll-mt-24 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-violet-600">
            Opportunities
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Explore Opportunities
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-500 sm:text-base">
            Find a role that matches your skills, interests, and career goals.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-8 max-w-xl"
        >
          <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-5 py-3 transition focus-within:border-violet-300 focus-within:bg-white focus-within:ring-4 focus-within:ring-violet-50">
            <SearchX
              size={19}
              className="text-slate-400"
            />

            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by job title or company..."
              className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
            />
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <CategoryFilter
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </motion.div>

        {/* Job Grid */}
        <div className="mt-12">
          <AnimatePresence mode="popLayout">

            {/* Loading */}
            {loading ? (
              <div className="py-16 text-center">
                <p className="text-sm text-slate-500">
                  Loading jobs...
                </p>
              </div>

            /* Error */
            ) : error ? (
              <div className="py-16 text-center">
                <p className="text-sm text-red-500">
                  {error}
                </p>
              </div>

            /* Jobs */
            ) : filteredJobs.length > 0 ? (
              <motion.div
                layout
                className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
              >
                {filteredJobs.map((job) => (
                  <JobCard
                    key={job._id}
                    job={job}
                  />
                ))}
              </motion.div>

            /* No Jobs */
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-16 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
                  <SearchX
                    size={24}
                    className="text-slate-400"
                  />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  No jobs found
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Try another search or category.
                </p>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Job Count */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-400">
            Showing{" "}
            <span className="font-semibold text-slate-700">
              {filteredJobs.length}
            </span>{" "}
            {filteredJobs.length === 1 ? "job" : "jobs"}
          </p>
        </div>

      </div>
    </section>
  );
};

export default JobList;
