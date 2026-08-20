"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, MousePointer2 } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutMeSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax movement for background decorative elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-slate-50 px-4 py-14 lg:py-20 text-slate-900 dark:bg-[#070d28] dark:text-white sm:px-6 lg:px-5"
    >
      {/* Dynamic Background Accents */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-purple-600/10 blur-[100px]"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]"
      />

      <div className="mx-auto container relative z-10 grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8 inline-flex items-center gap-2 border border-slate-300 px-5  py-2 lg:py-3 text-lg md:text-xl font-semibold text-slate-700 dark:border-white/70 dark:text-white"
          >
            <motion.span
              animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.15, 1] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="h-4 w-4" />
            </motion.span>
            About Me
          </motion.div>

          {/* Subheading */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-4 text-xl font-medium text-slate-600 dark:text-white sm:text-3xl"
          >
            Meet Amit Chackraborty
          </motion.h3>

          {/* Main Heading */}
          <motion.h6
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mb-10 text-2xl font-normal leading-[1.1] sm:text-5xl lg:text-6xl"
          >
            Your{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Full-Stack Developer
            </span>
          </motion.h6>

          {/* Body Content */}
          <div className="max-w-2xl space-y-8 text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-xl text-justify md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              I’m a passionate MERN Stack Developer with{" "}
              <span className="relative inline-block font-semibold text-slate-900 dark:text-white">
                1 year of professional experience
                <span className="absolute bottom-1 left-0 h-2 w-full -z-10 bg-purple-500/20" />
              </span>{" "}
              at BDCalling Limited. I specialize in building full-stack web
              applications that are not only functional but also beautifully
              designed and user-friendly.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              My journey in web development started with a curiosity about how
              things work on the web. Over time, I’ve built a strong foundation
              in both frontend and backend technologies, allowing me to deliver
              complete solutions from concept to deployment.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center gap-3 italic text-slate-500 dark:text-slate-400"
            >
              <MousePointer2 className="h-5 w-5 text-purple-500" />
              When I’m not coding, I enjoy exploring new technologies,
              contributing to open-source projects, and sharing knowledge.
            </motion.p>
            <div>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-purple-600 px-5 py-3 text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                View My Resume
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Right Visual */}
        <div className="relative flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative h-[420px] w-[320px] sm:h-[520px] sm:w-[420px]"
          >
            {/* Animated Dashed Border */}
            <motion.div
              className="absolute -inset-6 rounded-[2.5rem] border-2 border-dashed border-purple-500/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />

            {/* Main Portrait */}
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] border-[6px] border-white shadow-2xl dark:border-slate-800">
              <Image
                src="/myimage2.png"
                alt="Amit Chackraborty"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>

            {/* Logo Badge */}
            {/* <motion.div
              initial={{ scale: 0, rotate: -45 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.8 }}
              className="absolute -top-8 -right-8 h-28 w-28 drop-shadow-2xl sm:h-36 sm:w-36"
            >
              <Image
                src="/big-logo.png"
                alt="Brand Logo"
                width={144}
                height={144}
                className="h-full w-full object-contain"
              />
            </motion.div> */}

            {/* Glassmorphic Creative Spaces Card */}
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="absolute -bottom-10 -left-6 w-[220px] sm:-bottom-12 sm:-left-12 sm:w-[260px]"
            >
              <Card className="overflow-hidden border-white/20 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/80">
                <CardContent className="p-0">
                  <div className="relative h-32 w-full">
                    <Image
                      src="/about image.png"
                      alt="Creative Space"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="mb-2 font-serif text-lg font-bold text-slate-900 dark:text-white">
                      Creative Spaces
                    </h4>
                    <p className="text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                      From coding to collaboration, I thrive in spaces that
                      spark innovation and precision.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
