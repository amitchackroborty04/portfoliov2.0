'use client';

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import type { Variants } from "motion/react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

type SkillItem = {
  name: string;
  imageSrc: string;
};

type CategoryItem = {
  label: string;
  align: "left" | "right";
  skills: SkillItem[];
};

// ── Data ─────────────────────────────────
const CATEGORIES: CategoryItem[] = [
  {
    label: "Frontend",
    align: "right",
    skills: [
      { name: "React", imageSrc: "/react.png" },
      { name: "Next Js", imageSrc: "/nextjs.png" },
      { name: "HTML", imageSrc: "/html.png" },
      { name: "CSS", imageSrc: "/css.png" },
      { name: "Tailwind", imageSrc: "/Tailwind logo.png" },
      { name: "TypeScript", imageSrc: "/ts.png" },
    ],
  },
  {
    label: "Backend",
    align: "left",
    skills: [
      { name: "Node Js", imageSrc: "/Node.js logo.png" },
      { name: "Express Js", imageSrc: "/express.png" },
      { name: "MongoDB", imageSrc: "/mongodb.png" },
      { name: "Mongoose", imageSrc: "/images.jpeg" },
      { name: "JWT ", imageSrc: "/jwt.png" },
      { name: "REST API ", imageSrc: "/rest.png" },
    ],
  },
  {
    label: "Tools",
    align: "right",
    skills: [
      { name: "Vs Code", imageSrc: "/vscode.png" },
      { name: "Postman", imageSrc: "/postman.png" },
      { name: "MongoDB Compass", imageSrc: "/compas.png" },
      { name: "Figma", imageSrc: "/figma.png" },
      { name: "Git Hub", imageSrc: "/github logo.png" },
      { name: "Git", imageSrc: "/git.png" },
    ],
  },
];

// ── Animation ─────────────────────────────
const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
};

// ── Tech Card ─────────────────────────────
function TechCard({ skill, index }: { skill: SkillItem; index: number }) {
  const { name, imageSrc } = skill;

  return (
    <motion.div
      variants={item}
      whileHover={{ scale: 1.05, y: -5 }}
      className="relative flex h-[164px] flex-col items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-purple-500/40 dark:border-white/10 dark:bg-[#FFFFFF1A] dark:shadow-none"
    >
      <motion.div
        animate={{
          opacity: [1, 0.4, 1],
          scale: [1, 0.85, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: index * 0.3,
        }}
        className="flex h-[80px] w-[80px] items-center justify-center "
      >
        <Image
          src={imageSrc}
          alt={name}
          width={80}
          height={80}
          className="h-[80px] w-[80px] object-contain"
        />
      </motion.div>

      <span className="text-sm text-slate-600 dark:text-gray-300">{name}</span>
    </motion.div>
  );
}

// ── Category Row ──────────────────────────
function CategoryRow({ category }: { category: CategoryItem }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="w-full"
    >
      {/* Label */}
      <div
        className={`mb-4 flex ${
          category.align === "right" ? "justify-end" : "justify-start"
        }`}
      >
        <h6 className="rounded-[4px] bg-slate-200 px-7 py-3 text-2xl font-normal text-slate-800 dark:bg-[#FFFFFF1A] dark:text-white">
          {category.label}
        </h6>
      </div>

      {/* Grid */}
      <motion.div
        variants={container}
        className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
      >
        {category.skills.map((skill, i) => (
          <TechCard key={i} skill={skill} index={i} />
        ))}
      </motion.div>
    </motion.div>
  );
}

// ── Main Component ────────────────────────
export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="bg-slate-50 px-5 py-16 dark:bg-[#080D27] lg:px-5">
      <div className=" container mx-auto ">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView && { opacity: 1, y: 0 }}
          className="mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8 inline-flex items-center gap-2 border border-slate-300 px-5 py-3 text-xl font-semibold text-slate-700 dark:border-white/70 dark:text-white"
          >
            <motion.span
              animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.15, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="h-4 w-4" />
            </motion.span>
            Skills & Technologies
          </motion.div>

          <h6 className="text-4xl font-normal text-slate-900 dark:text-white md:text-5xl">
            What I Can Do
          </h6>

          <p className="mt-2 text-xl text-slate-600 dark:text-white">
            Delivering complete solutions from frontend to backend
          </p>
        </motion.div>

        {/* Categories */}
        <div className="flex flex-col gap-12">
          {CATEGORIES.map((cat, i) => (
            <CategoryRow key={i} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
