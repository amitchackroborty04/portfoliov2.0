'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { BorderBeam } from '../ui/border-beam';

const experiencePoints = [
  'Built modern responsive websites using React and Next.js',
  'Worked with MongoDB and REST APIs',
  'Collaborated using Git and team workflows',
];

const techStack = [
  'React',
  'Next.js',
  'Typescript',
  'Tailwind CSS',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Git',
  'GitHub',
  'REST API',
];

export default function ExperienceSection() {
  return (
    <section className="min-h-screen bg-slate-100 py-16 dark:bg-[#070d28]">
      <div className="container mx-auto px-6 md:px-12 lg:px-5">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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
              animate={{
                rotate: [0, 15, -15, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Sparkles className="h-4 w-4" />
            </motion.span>

            My Expertise & Achievements
          </motion.div>

          <h1 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
            My Expertise & Achievements
          </h1>

          <p className="text-lg text-slate-600 dark:text-gray-400">
            Proven track record with recognized credentials
          </p>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-16 overflow-hidden rounded-xl border border-slate-200 bg-white p-8 shadow-xl hover:shadow-2xl dark:border-slate-700 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900"
        >
          
          {/* Content */}
          <div className="relative z-10">
            <div className="mb-6 flex flex-col gap-6 md:flex-row md:justify-between">
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-400" />

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white md:text-2xl">
                    Front End Developer
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-slate-600 dark:text-gray-300">
                  <span className="font-medium">
                    Scale Ads Agency
                  </span>

                  <span className="flex items-center gap-1 text-slate-500 dark:text-gray-500">
                    <MapPin size={16} />
                    Bangladesh
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-base text-slate-700 dark:text-white">
                <Calendar size={18} />
                <span>Since Jan 2025</span>
              </div>
            </div>

            <div className="mb-6 h-px bg-gradient-to-r from-slate-300 via-slate-400 to-transparent dark:from-slate-700 dark:via-slate-500" />

            <div className="mb-6 space-y-3">
              {experiencePoints.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="flex gap-2 text-slate-700 dark:text-gray-300"
                >
                  <span className="text-blue-400">▲</span>

                  <p>{item}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="rounded-lg border border-slate-200 bg-slate-100 px-4 py-2 text-sm text-slate-700 dark:border-slate-600 dark:bg-slate-700/50 dark:text-gray-300"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Border Beam */}
          <BorderBeam
            duration={6}
            delay={3}
            size={400}
            borderWidth={2}
             className="from-violet-400 via-fuchsia-500 to-indigo-700"
          />
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h6 className="mb-8 text-4xl font-normal text-slate-900 dark:text-white">
            Certifications
          </h6>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md dark:border-slate-700 dark:bg-slate-800">
              <Image
                src="/cartifiacte.jpeg"
                alt="certificate"
                width={1000}
                height={1000}
                className="h-auto w-full object-contain"
              />
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md dark:border-slate-700 dark:bg-slate-800">
              <Image
                src="/certificate.jpg"
                alt="certificate"
                width={1000}
                height={1000}
                className="h-auto w-full object-contain"
              />
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}