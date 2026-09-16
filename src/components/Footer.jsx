import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi2";
import {BriefcaseBusiness } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      icon: <FaLinkedinIn size={17} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/",
    },
    {
      icon: <FaGithub size={17} />,
      label: "GitHub",
      href: "https://github.com/",
    },
    {
      icon: <FaInstagram size={17} />,
      label: "Instagram",
      href: "#",
    },
    {
      icon: <FaEnvelope size={17} />,
      label: "Email",
      href: "mailto:hello@jobly.com",
    },
  ];

  const platformLinks = [
    { name: "Home", href: "#home" },
    { name: "Browse Jobs", href: "#jobs" },
    { name: "Contact", href: "#contact" },
  ];

  const employerLinks = [
    { name: "Find Talent", href: "#jobs" },
    { name: "Get Support", href: "#contact" },
    { name: "Post a Job", href: "#home" },
  ];

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-indigo-600/20 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-20 h-2 w-2 rounded-full bg-violet-400/50" />

      <div className="pointer-events-none absolute right-1/4 top-32 h-1.5 w-1.5 rounded-full bg-indigo-400/40" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Main Footer */}
        <div className="grid gap-10 border-b border-white/10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">

          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <a
              href="#home"
              className="group inline-flex items-center gap-3"
            >
              {/* Logo */}
              <div className="flex h-11 w-11 items-center text-black justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 text-lg font-bold shadow-lg shadow-violet-500/20 transition duration-300 hover:backgr group-hover:scale-105">
            <BriefcaseBusiness size={20} />
          </div>

              <span className="text-xl font-bold tracking-tight">
                Jobly
              </span>
            </a>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
              Connecting talented people with exciting opportunities.
              Discover jobs, find great talent, and take the next step
              in your career.
            </p>

            {/* Social Icons */}
            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target={social.href.startsWith("#") ? undefined : "_blank"}
                  rel={
                    social.href.startsWith("#")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -4,
                    scale: 1.05,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:border-violet-400/30 hover:bg-violet-500/10 hover:text-white"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Platform */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Platform
            </h3>

            <ul className="mt-5 space-y-3">
              {platformLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors duration-300 hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Employers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              For Employers
            </h3>

            <ul className="mt-5 space-y-3">
              {employerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors duration-300 hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">

          {/* Copyright */}
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Jobly. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-xs text-slate-500 transition-colors duration-300 hover:text-slate-300"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-xs text-slate-500 transition-colors duration-300 hover:text-slate-300"
            >
              Terms of Service
            </a>

            {/* Back to Top */}
            <motion.button
              type="button"
              onClick={scrollToTop}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:border-violet-400/30 hover:bg-violet-500/10 hover:text-white"
              aria-label="Back to top"
            >
              <HiArrowUp size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;