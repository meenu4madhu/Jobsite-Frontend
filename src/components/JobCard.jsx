import { motion } from "framer-motion";
import {
  MapPin,
  ArrowUpRight,
  BriefcaseBusiness,
} from "lucide-react";

const JobCard = ({ job }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-slate-200/60"
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-colors duration-300 group-hover:bg-violet-100 group-hover:text-violet-600">
          <BriefcaseBusiness size={21} />
        </div>

        <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-600">
          {job.category}
        </span>
      </div>

      {/* Job information */}
      <div className="mt-6">
        <h3 className="text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-violet-600">
          {job.title}
        </h3>

        <p className="mt-2 text-sm font-medium text-slate-500">
          {job.company}
        </p>
      </div>

      {/* Location */}
      <div className="mt-5 flex items-center gap-2 text-sm text-slate-400">
        <MapPin size={16} />
        <span>{job.location}</span>
      </div>

      {/* Description */}
      <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-500">
        {job.description}
      </p>

      {/* Bottom */}
      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
        <span className="text-xs font-medium text-slate-400">
          Posted recently
        </span>

        <button
          type="button"
          className="group/button flex items-center gap-1.5 text-sm font-semibold text-slate-800 transition-colors hover:text-violet-600"
        >
          View Job

          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1"
          />
        </button>
      </div>

      {/* Decorative gradient */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-violet-100/40 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  );
};

export default JobCard;