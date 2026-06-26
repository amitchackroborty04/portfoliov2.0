'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaFacebookF, FaWhatsapp, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="flex items-center border-t border-slate-200 bg-slate-100 px-4 py-12 text-slate-900 dark:border-white/10 dark:bg-[#05081a] dark:text-white sm:px-8 lg:px-16">
      {/* Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto w-full"
      >
        <div className="grid grid-cols-12 items-start gap-8">
          {/* Logo and Info */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3">
            <div className="w-[171px] h-[56px] hover:scale-105 transition-transform duration-300 hover:cursor-pointer">
              <Image src="/logo.png" alt="logo" width={1000} height={1000} className="w-full h-full" />
            </div>
            <p className="mt-6 text-sm text-slate-600 dark:text-white">
              Frontend & Full-Stack Developer <br />
              Crafting seamless digital experiences with precision
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 text-center lg:text-left">
            <h3 className="inline-block border-b-2 border-[#FFB400] pb-2 text-2xl font-medium text-slate-900 dark:text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-base text-slate-600 dark:text-white">
              <li>Home</li>
              <li>Properties</li>
              <li>Services</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 text-center lg:text-left">
            <h3 className="inline-block border-b-2 border-[#FFB400] pb-2 text-2xl font-medium text-slate-900 dark:text-white">Contact</h3>
            <ul className="mt-4 space-y-2 text-base text-slate-600 dark:text-white">
              <li>Phullbari, Dinajpur</li>
              <li>Phone: +01774130294</li>
              <li>Email: amitck803@mail.com</li>
            </ul>
          </div>

      <div className="col-span-12 text-center sm:col-span-6 lg:col-span-3 lg:text-left">
  
  <h3 className="inline-block border-b-2 border-[#FFB400] pb-2 text-2xl font-medium text-slate-900 dark:text-white">
    Media
  </h3>

  <div className="mt-4 flex justify-center gap-5 lg:justify-start">
    
    <a
      href="https://facebook.com"
      target="_blank"
      rel="noreferrer"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition-transform duration-300 hover:scale-110 hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
    >
      <FaFacebookF size={24} />
    </a>

    <a
      href="https://wa.me/8801774130294"
      target="_blank"
      rel="noreferrer"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition-transform duration-300 hover:scale-110 hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
    >
      <FaWhatsapp size={24} />
    </a>

    <a
      href="https://linkedin.com"
      target="_blank"
      rel="noreferrer"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition-transform duration-300 hover:scale-110 hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
    >
      <FaLinkedinIn size={24} />
    </a>

    <a
      href="mailto:amitck803@mail.com"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition-transform duration-300 hover:scale-110 hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
    >
      <FaEnvelope size={24} />
    </a>

  </div>
</div>
        </div>

     

        {/* Footer Text */}
        <motion.div
          className="mt-8 text-center text-sm text-slate-600 dark:text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p>© 2026 Amit Chakraborty. All Rights Reserved.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
