import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-fuchsia-900 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 border border-white/20">
        
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-8 tracking-wide drop-shadow-lg"
        >
          Get In Touch ✨
        </motion.h1>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Name Input */}
          <div className="col-span-1">
            <label className="block text-white font-medium mb-2 text-sm md:text-base">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 transition"
            />
          </div>

          {/* Email Input */}
          <div className="col-span-1">
            <label className="block text-white font-medium mb-2 text-sm md:text-base">
              Your Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
          </div>

          {/* Message Input (Full Width) */}
          <div className="col-span-1 md:col-span-2">
            <label className="block text-white font-medium mb-2 text-sm md:text-base">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            ></textarea>
          </div>

          {/* Submit Button (Full Width on small, center on large) */}
          <div className="col-span-1 md:col-span-2 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px #ec4899" }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full md:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-500 text-white font-semibold text-lg tracking-wide transition"
            >
              Send Message 🚀
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
