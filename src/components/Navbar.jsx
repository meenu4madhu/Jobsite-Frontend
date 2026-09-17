import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, BriefcaseBusiness } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PostJobModal from "./PostJobModal";

const Navbar = ({ onJobPosted }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPostJobOpen, setIsPostJobOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Jobs", id: "jobs" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavigation = (id) => {
    setIsOpen(false);

    // Wait for mobile menu closing animation
    setTimeout(() => {
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => handleNavigation("home")}
          className="flex items-center gap-2.5"
        >
          <div className="flex h-11 w-11 items-center text-white justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 text-lg font-bold shadow-lg shadow-violet-500/20 transition duration-300 hover:backgr group-hover:scale-105">
            <BriefcaseBusiness size={20} />
          </div>

          <span className="text-xl font-bold tracking-tight text-slate-900">
            Jobly
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.name}
              type="button"
              onClick={() => handleNavigation(link.id)}
              className="text-sm font-medium text-slate-500 transition-colors duration-300 hover:text-slate-900"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Desktop Post Job */}
        <button
          type="button"
          onClick={() => setIsPostJobOpen(true)}
          className="hidden rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition duration-300 hover:-translate-y-0.5 hover:bg-violet-600 md:block"
        >
          Post a Job
        </button>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-slate-200 bg-white md:hidden"
          >
            <div className="space-y-2 px-5 py-5">

              {navLinks.map((link) => (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => handleNavigation(link.id)}
                  className="block w-full rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
                >
                  {link.name}
                </button>
              ))}

              {/* Mobile Post Job */}
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  setIsPostJobOpen(true);
                }}
                className="mt-2 block w-full rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-violet-600"
              >
                Post a Job
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Post Job Modal */}
      <PostJobModal
  isOpen={isPostJobOpen}
  onClose={() => setIsPostJobOpen(false)}
  onJobPosted={onJobPosted}
/>
    </header>
  );
};

export default Navbar;