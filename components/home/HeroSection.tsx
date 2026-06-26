"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const heroData = {
  title: "Transforming Ideas Into Interactive Web",
  description:
    "I am Amit Chakrabarti, a Full-Stack Developer passionate about turning design into code. With React, JavaScript, and modern CSS, I build responsive scalable interfaces that deliver smooth user experiences.",

  stats: [
    { value: "15+", label: "Projects Completed", img: "/icon2.png" },
    { value: "2yrs", label: "Experience", img: "/icon1 (3).png" },
    { value: "10+", label: "Technologies", img: "/icon3.png" },
  ],
};

const tools = [
  { img: "/github logo.png" },
  { img: "/postman.png" },
  { img: "/compas.png" },
  { img: "/figma.png" },
  { img: "/vscode.png" },
];

const skill = [
  // { img: "/react.png" },
  { img: "/nextjs.png" },
  { img: "/Node.js logo.png" },
  { img: "/ts.png" },
  { img: "/mongodb.png" },
  { img: "/express.png" },
  { img: "/Tailwind logo.png" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0 },
};

function CountUpValue({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    const match = value.match(/^(\d+)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const endValue = Number(match[1]);
    const suffix = match[2] ?? "";
    const duration = 1200;
    let frameId = 0;
    let startTime = 0;

    setDisplayValue(`0${suffix}`);

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.round(endValue * easedProgress);

      setDisplayValue(`${currentValue}${suffix}`);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [value]);

  return <>{displayValue}</>;
}

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 py-14 text-slate-900 dark:from-[#080D27] dark:via-[#080D27] dark:to-[#080D27] dark:text-white lg:py-20">
      {/* Animated Background Glow */}
      <motion.div
        className="absolute left-[-120px] top-[-100px] h-[300px] w-[300px] rounded-full bg-purple-500/30 blur-[120px] dark:bg-purple-600/30"
        animate={{ x: [0, 80, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[-120px] right-[-100px] h-[320px] w-[320px] rounded-full bg-fuchsia-400/20 blur-[130px] dark:bg-pink-500/20"
        animate={{ x: [0, -70, 0], y: [0, -60, 0], scale: [1, 1.25, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative z-10 mx-auto grid grid-cols-12 items-center gap-8 px-4 sm:px-6 md:gap-10 lg:gap-12">
        {/* LEFT SIDE */}
        <motion.div
          className="col-span-12 text-center md:col-span-7 md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ staggerChildren: 0.14 }}
        >
          <motion.div variants={fadeUp}>
            <div className="relative inline-block">
              <motion.div
                className="absolute right-0 top-[-18px] h-8 w-8 sm:right-4 sm:h-9 sm:w-9 md:right-[270px] md:h-10 md:w-10"
                animate={{ y: [0, -12, 0], rotate: [0, 12, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/boll.png"
                  alt="decorative ball"
                  width={100}
                  height={100}
                  className="h-full w-full"
                />
              </motion.div>

              <h1 className="max-w-[340px] text-3xl font-normal leading-[130%] tracking-[1px] sm:max-w-[500px] sm:text-4xl md:max-w-[690px] md:text-[48px] md:leading-[140%] lg:text-[56px] lg:leading-[150%]">
                {heroData.title}
              </h1>
            </div>

            <motion.div
              className="mx-auto mt-3 w-[180px] sm:w-[260px] md:mx-0 md:w-[300px]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ transformOrigin: "left" }}
            >
              <Image
                src="/underline.png"
                alt="underline"
                width={500}
                height={200}
                className="h-full w-full"
              />
            </motion.div>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-[340px] text-sm leading-[170%] text-slate-600 dark:text-gray-300 sm:max-w-[500px] sm:text-base md:mx-0 md:max-w-[600px] md:text-base lg:text-lg"
          >
            {heroData.description}
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start lg:mt-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="inline-block w-full rounded-full bg-[linear-gradient(95.47deg,#A64DFF_0.6%,#D741C3_39.66%,#5716A7_78.1%,#5D00B9_99.4%)] p-[2px] sm:w-auto"
            >
              <Button className="h-[46px] w-full rounded-full border-0 bg-slate-900 px-6 text-sm font-semibold text-white hover:bg-slate-800 dark:bg-[#070B2A] dark:text-white dark:hover:bg-[#0b1040] sm:h-[48px] sm:text-base">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="w-full sm:w-auto"
            >
              <Button className="h-[46px] w-full rounded-full border-0 bg-white px-6 text-sm font-semibold text-[#1E1E1E] shadow-sm hover:bg-slate-100 dark:bg-white dark:text-[#1E1E1E] dark:hover:bg-gray-100 sm:h-[50px] sm:text-base">
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </motion.div>
          </motion.div>

          {/* STATS */}
          <motion.div
            variants={fadeUp}
            className="mt-8 grid grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:mt-12 lg:flex lg:gap-10"
          >
            {heroData.stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8, scale: 1.04 }}
                className="flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-white/80 p-3 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/[6%] dark:shadow-none sm:flex-row sm:gap-3 sm:p-4 lg:dark:border-0 lg:dark:bg-transparent lg:dark:p-0"
              >
                <div className="h-[40px] w-[40px] shrink-0 sm:h-[52px] sm:w-[52px] lg:h-[60px] lg:w-[60px]">
                  <Image
                    src={stat.img}
                    alt={stat.label}
                    width={100}
                    height={100}
                    className="h-full w-full"
                  />
                </div>

                <div className="text-center sm:text-left">
                  <p className="text-lg font-bold tabular-nums sm:text-4xl">
                    <CountUpValue value={stat.value} />
                  </p>
                  <p className="text-[10px] font-normal leading-tight text-slate-600 dark:text-white/90 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="col-span-12 flex justify-center md:col-span-5"
          initial={{ opacity: 0, x: 70, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="relative h-[320px] w-full max-w-[320px] rounded-[28px] bg-gradient-to-br from-violet-400 via-fuchsia-500 to-indigo-700 dark:from-[#5716A7] dark:via-[#59004E] dark:to-[#220941] sm:h-[380px] sm:max-w-[380px] md:h-[460px] md:max-w-[460px] lg:h-[540px] lg:max-w-[580px]"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Left Floating Tools */}
            <motion.div
              className="absolute left-[-14px] top-[20%] z-50  rounded-full border border-slate-200 bg-white/85 p-2 shadow-lg backdrop-blur-[60px] dark:border-white/10 dark:bg-white/[8%] dark:shadow-none sm:block sm:left-[-16px] lg:left-[-20px] lg:p-3"
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {tools.map((tool, i) => (
                <motion.div
                  key={i}
                  className="mb-3 flex items-center last:mb-0 lg:mb-5"
                  animate={{ rotate: [0, 8, -8, 0] }}
                  transition={{
                    duration: 3,
                    delay: i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src={tool.img}
                    alt="tool icon"
                    width={50}
                    height={50}
                    className="h-7 w-7 rounded-full object-cover sm:h-8 sm:w-8 lg:h-10 lg:w-10"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom Floating Tools */}
            <motion.div
              className="absolute bottom-[-28px] left-[20%] z-50 w-auto max-w-[85%] rounded-full border border-slate-200 bg-white/85 p-2 shadow-lg backdrop-blur-[60px] dark:border-white/10 dark:bg-white/[8%] dark:shadow-none sm:bottom-[-35px] sm:p-3"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-5">
                {skill.map((tool, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Image
                      src={tool.img}
                      alt="tool icon"
                      width={1000}
                      height={1000}
                      className="h-7 w-7 rounded-full object-cover sm:h-9 sm:w-9 lg:h-10 lg:w-10"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              className="absolute left-[10px] top-[10px] h-full w-full overflow-hidden rounded-[18px] md:left-[16px] md:top-[16px] lg:left-[20px] lg:top-[20px]"
              whileHover={{ scale: 1.025, rotate: 1 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
            >
              <Image
                src="/myimage.png"
                alt="profile"
                width={1000}
                height={1000}
                className="h-full w-full rounded-[18px] object-cover"
                priority
              />

              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-purple-600/25 via-transparent to-pink-500/20"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
