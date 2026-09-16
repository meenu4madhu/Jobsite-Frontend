import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  BriefcaseBusiness,
  Building2,
  MapPin,
  FileText,
  Layers3,
  Sparkles,
  Send,
} from "lucide-react";

const PostJobModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    category: "",
    location: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    // Temporary simulation.
    // Later this will be replaced with the backend API call.
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        title: "",
        company: "",
        category: "",
        location: "",
        description: "",
      });
      onClose();
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
         className="fixed inset-0 z-[100] flex min-h-screen items-center justify-center bg-slate-950/40 px-4 py-6 backdrop-blur-sm sm:px-6 sm:py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              onClose();
            }
          }}
        >
          {/* Animated background glow */}
          <motion.div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/20 blur-3xl"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.4, 0.65, 0.4],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Modal */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 25,
              scale: 0.97,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
            className="relative  w-full max-w-2xl overflow-hidden rounded-3xl border border-white/60 bg-white shadow-2xl shadow-slate-950/30"
          >
            {/* Top gradient decoration */}
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-violet-500 via-indigo-500 to-violet-600" />

            {/* Decorative circles */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-100/70 blur-2xl" />
            <div className="pointer-events-none absolute -left-20 bottom-10 h-40 w-40 rounded-full bg-indigo-100/60 blur-2xl" />

            {/* Header */}
            <div className="relative border-b border-slate-100 px-6 pb-5 pt-7 sm:px-8 sm:pt-8">
              <button
                type="button"
                onClick={onClose}
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-300 hover:rotate-90 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600"
              >
                <X size={18} />
              </button>

              <div className="flex items-start gap-4 pr-10">
                <motion.div
                  initial={{ rotate: -10, scale: 0.8 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ delay: 0.15 }}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25"
                >
                  <BriefcaseBusiness size={22} />
                </motion.div>

                <div>
                  <div className="mb-1 flex items-center gap-2">
                    <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                      Post a Job
                    </h2>

                    <Sparkles
                      size={17}
                      className="text-violet-500"
                    />
                  </div>

                  <p className="text-sm leading-6 text-slate-500">
                    Find the right talent for your team and grow your company.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="relative max-h-[calc(100vh-180px)] overflow-y-auto px-6 py-6 sm:px-8 sm:py-7">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className="flex min-h-[350px] flex-col items-center justify-center text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      delay: 0.1,
                    }}
                    className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 text-white shadow-xl shadow-violet-500/25"
                  >
                    <Send size={30} />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    Job Posted Successfully!
                  </h3>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                    Your job opportunity has been submitted successfully.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Job Title */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Job Title
                    </label>

                    <div className="group relative">
                      <BriefcaseBusiness
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-violet-500"
                      />

                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="e.g. MERN Stack Developer"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/70 py-3.5 pl-11 pr-4 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-500/10"
                      />
                    </div>
                  </div>

                  {/* Company + Category */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    {/* Company */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Company Name
                      </label>

                      <div className="group relative">
                        <Building2
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-violet-500"
                        />

                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="e.g. TechNova"
                          required
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/70 py-3.5 pl-11 pr-4 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-500/10"
                        />
                      </div>
                    </div>

                    {/* Category */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Category
                      </label>

                      <div className="group relative">
                        <Layers3
                          size={18}
                          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-violet-500"
                        />

                        <select
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          required
                          className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/70 py-3.5 pl-11 pr-4 text-sm text-slate-700 outline-none transition-all duration-300 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-500/10"
                        >
                          <option value="">Select category</option>
                          <option value="Development">
                            Development
                          </option>
                          <option value="Design">Design</option>
                          <option value="Marketing">Marketing</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Location
                    </label>

                    <div className="group relative">
                      <MapPin
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-violet-500"
                      />

                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="e.g. Kochi, Kerala / Remote"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/70 py-3.5 pl-11 pr-4 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-500/10"
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Job Description
                    </label>

                    <div className="group relative">
                      <FileText
                        size={18}
                        className="absolute left-4 top-4 text-slate-400 transition-colors group-focus-within:text-violet-500"
                      />

                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Describe the role, responsibilities, skills and requirements..."
                        rows={5}
                        required
                        className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/70 py-3.5 pl-11 pr-4 text-sm leading-6 text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-500/10"
                      />
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:justify-end">
                    <button
                      type="button"
                      onClick={onClose}
                      className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
                    >
                      Cancel
                    </button>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/30 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          Posting...
                        </>
                      ) : (
                        <>
                          <Send size={17} />
                          Post Job
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PostJobModal;