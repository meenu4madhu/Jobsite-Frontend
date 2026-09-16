import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
  Send,
} from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 inline-flex items-center rounded-full border border-violet-100 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-600">
              <Mail size={16} className="mr-2" />
              Get in touch
            </div>

            <h2 className="max-w-xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Have questions?
              <span className="block bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                We’re here to help.
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-base leading-7 text-slate-500 sm:text-lg">
              Whether you are looking for your next opportunity or searching
              for the right talent, feel free to reach out to us.
            </p>

            {/* Contact Details */}
            <div className="mt-8 space-y-5">

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  <Mail size={19} />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    Email
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    hello@jobly.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Phone size={19} />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    Phone
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    +91 9182736455
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  <MapPin size={19} />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    Location
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    Kerala, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            {/* Background glow */}
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-violet-500/10 to-indigo-500/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8">

              {/* Small decorative gradient */}
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-violet-100/60 blur-2xl" />

              <div className="relative">
                <h3 className="text-xl font-bold text-slate-900">
                  Send us a message
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  We’ll get back to you as soon as possible.
                </p>

                <form className="mt-7 space-y-5">

                  {/* Name */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Your Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-500/10"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-500/10"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Message
                    </label>

                    <textarea
                      rows={4}
                      placeholder="How can we help you?"
                      className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3.5 text-sm leading-6 text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-500/10"
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/30"
                  >
                    Send Message
                    <Send size={17} />
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;