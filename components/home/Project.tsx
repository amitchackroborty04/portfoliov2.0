"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/ui/border-beam";
import Image from "next/image";
import Link from "next/link";
import { Grid, List, Sparkles } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Beatbox Music ",
    image:
      "/project1.png",
    description:
      "BeatBox Music is a modern, responsive music platform with a clean interface and smooth audio experience. Users can easily browse, play, and enjoy their favorite tracks across all devices.",
    tech: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://beatboksmusic.com",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "publypost",
    image:
      "/project2.png",
    description:
      "PublyPost is a modern publishing platform designed to share and discover engaging content through a clean, responsive, and user-friendly interface",
    tech: ["Next.js", "API", "Tailwind"],
    liveUrl: "https://publypost.com/",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Wood Talks",
    image:
      "/project3.png",
    description:
      "Wood Talks is a professional kitchen cabinetry website showcasing high-quality kitchen products and custom design services, with dedicated product, exhibition, and contact sections.",
    tech: ["Socket.io", "Express", "JWT"],
    liveUrl: "https://www.woodtalks.net/",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Bridge Point Solutions",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    description:
      "Bridge Point Solutions is a real estate and property services platform that helps users discover apartments, submit tenant applications, and access trusted contractor and extermination services through one convenient platform.",
    tech: ["MERN", "CMS", "Cloudinary"],
    liveUrl: "https://mybridgepointsolutions.com/",
    githubUrl: "#",
  },
];

export default function FeaturedProjectsSection() {
  const [viewMode, setViewMode] = useState("grid");
  const [expandedDescriptions, setExpandedDescriptions] = useState<number[]>([]);

  const handleViewToggle = (mode: string) => {
    setViewMode(mode);
  };

  const toggleDescription = (projectId: number) => {
    setExpandedDescriptions((current) =>
      current.includes(projectId)
        ? current.filter((id) => id !== projectId)
        : [...current, projectId]
    );
  };

  const isDescriptionExpanded = (projectId: number) =>
    expandedDescriptions.includes(projectId);

  return (
    <section className="min-h-screen overflow-hidden bg-slate-50 px-5 py-12 text-slate-900 dark:bg-[#070d28] dark:text-white sm:px-8 lg:px-12 xl:px-5">
      <div className="mx-auto container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
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
            Featured Projects
          </motion.div>

          <div className="mt-7 flex items-center justify-between">
            <div>
              <h6 className="text-[32px] font-normal text-slate-900 dark:text-white sm:text-[40px] lg:!text-[48px]">
                Turning Ideas into Interactive Solutions
              </h6>
              <p className="mt-3 text-[13px] text-slate-600 dark:text-slate-300 sm:text-[20px]">
                Showcasing real-world applications built with modern technologies
              </p>
            </div>
            <div className="hidden gap-4 lg:flex">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleViewToggle("grid")}
                className={
                  viewMode === "grid"
                    ? "text-purple-600 hover:text-purple-700"
                    : "text-slate-500 hover:text-slate-700 dark:text-slate-300 dark:hover:text-white"
                }
              >
                <Grid size={24} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleViewToggle("list")}
                className={
                  viewMode === "list"
                    ? "text-purple-600 hover:text-purple-700"
                    : "text-slate-500 hover:text-slate-700 dark:text-slate-300 dark:hover:text-white"
                }
              >
                <List size={24} />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* ───────────── GRID VIEW ───────────── */}
        {viewMode === "grid" && (
          <div className="mt-8 grid auto-rows-fr gap-7 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="h-full"
              >
                <Card className="group relative h-full overflow-hidden rounded-[10px] border border-slate-200 bg-white p-0 text-slate-900 shadow-[0_14px_35px_rgba(15,23,42,0.12)] transition-all duration-300 hover:bg-slate-50 hover:shadow-[0_20px_50px_rgba(15,23,42,0.18)] dark:border-white/5 dark:bg-[#20253C] dark:text-white dark:hover:bg-[#252e4e] dark:hover:shadow-[0_28px_80px_rgba(0,0,0,0.42)]">
                  <CardContent className="flex h-full flex-col p-3 sm:p-4">
                    <div className="relative overflow-hidden rounded-[6px] bg-slate-200 dark:bg-slate-800">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={1000}
                        height={600}
                        className="h-[168px] w-full object-cover transition duration-700 group-hover:scale-110 sm:h-[205px] lg:h-[380px]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#070d28]/35" />
                    </div>

                    <div className="mt-3 flex flex-col gap-3 sm:mt-4 sm:flex-row sm:items-start sm:justify-between">
                      <h6 className="font-serif text-[18px] leading-tight text-slate-900 dark:text-white sm:text-[32px]">
                        {project.title}
                      </h6>

                      <div className="flex shrink-0 items-center gap-2">
                        <div className="inline-flex rounded-full bg-[linear-gradient(95.47deg,_#A64DFF_0.6%,_#D741C3_39.66%,_#5716A7_78.1%,_#5D00B9_99.4%)] p-[2px] shadow-[0_0_18px_rgba(188,75,255,0.18)]">
                          <Button
                            asChild
                            size="sm"
                            variant="ghost"
                            className="flex h-[34px] items-center justify-between rounded-full bg-slate-900 px-4 text-[12px] font-semibold text-white hover:bg-slate-800 dark:bg-[#20253C] dark:text-white dark:hover:bg-[#bc4bff]/15 dark:hover:text-white sm:h-[44px] sm:px-6 sm:text-[16px]"
                          >
                            <Link
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Live Link
                              <Image
                                src="/send.png"
                                alt="Send"
                                width={1000}
                                height={1000}
                                className="!h-[16px] !w-[16px] sm:!h-[24px] sm:!w-[24px]"
                              />
                            </Link>
                          </Button>
                        </div>
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            size="sm"
                            className="h-[36px] rounded-full bg-slate-200 px-4 text-[12px] font-semibold text-slate-900 hover:bg-slate-300 dark:bg-[#FFFFFF3D] dark:text-white dark:hover:bg-white/20 sm:h-[48px] sm:px-6 sm:text-[16px]"
                          >
                            <Image
                              src="/github logo.png"
                              alt="Github"
                              width={1000}
                              height={1000}
                              className="h-4 w-4 sm:h-5 sm:w-5"
                            />
                            <span>Github</span>
                          </Button>
                        </Link>
                      </div>
                    </div>

                    <div className="mt-3 h-[92px] max-w-[95%] sm:mt-4 sm:h-[128px]">
                      <p
                        className={`text-[13px] leading-5 text-slate-700 dark:text-white sm:text-[20px] sm:leading-6 ${
                          isDescriptionExpanded(project.id)
                            ? "max-h-[62px] overflow-y-auto pr-1 sm:max-h-[92px]"
                            : "overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] sm:[-webkit-line-clamp:3]"
                        }`}
                      >
                        {project.description}
                      </p>
                      <button
                        type="button"
                        onClick={() => toggleDescription(project.id)}
                        className="mt-1 text-[12px] font-semibold text-purple-600 transition hover:text-purple-700 dark:text-purple-300 dark:hover:text-purple-200 sm:text-sm"
                      >
                        {isDescriptionExpanded(project.id) ? "Less" : "More"}
                      </button>
                    </div>
                  </CardContent>
                  <BorderBeam
                    duration={6}
                    delay={3}
                    size={400}
                    borderWidth={2}
                    className="from-transparent via-blue-500 to-transparent"
                  />
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* ───────────── LIST VIEW ───────────── */}
        {viewMode === "list" && (
          <div className="mt-8 flex flex-col gap-5">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <Card className="group relative flex flex-col overflow-hidden rounded-[10px] border border-slate-200 bg-white p-0 text-slate-900 shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition-all duration-300 hover:shadow-[0_16px_40px_rgba(15,23,42,0.15)] dark:border-white/5 dark:bg-[#20253C] dark:text-white dark:hover:bg-[#252e4e] dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] sm:flex-row">

                  {/* Left purple gradient accent bar */}
                  <div className="h-1 w-full shrink-0 bg-gradient-to-r from-[#A64DFF] via-[#D741C3] to-[#5D00B9] sm:h-auto sm:w-1 sm:bg-gradient-to-b" />

                  {/* Thumbnail */}
                  <div className="relative h-[142px] w-full shrink-0 overflow-hidden sm:h-auto sm:w-[220px]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    {/* Subtle dark overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/10 opacity-0 transition duration-300 group-hover:opacity-100 dark:to-[#070d28]/30" />
                  </div>

                  {/* Content */}
                  <CardContent className="flex flex-1 flex-col justify-between p-4 sm:p-6">
                    <div>
                      {/* Title row */}
                      <div className="flex items-start justify-between gap-3">
                        <h6 className="font-serif text-[18px] leading-tight text-slate-900 dark:text-white sm:text-[26px]">
                          {project.title}
                        </h6>
                        <span className="mt-1 shrink-0 rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-medium text-slate-400 dark:bg-white/10 dark:text-white/40 sm:px-3 sm:text-[11px]">
                          {String(index + 1).padStart(2, "0")}&nbsp;/&nbsp;{String(projects.length).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Description */}
                      <div className="mt-2 h-[78px] sm:h-[86px]">
                        <p
                          className={`text-[13px] leading-5 text-slate-600 dark:text-slate-300 sm:text-[15px] sm:leading-relaxed ${
                            isDescriptionExpanded(project.id)
                              ? "max-h-[52px] overflow-y-auto pr-1 sm:max-h-[58px]"
                              : "overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]"
                          }`}
                        >
                          {project.description}
                        </p>
                        <button
                          type="button"
                          onClick={() => toggleDescription(project.id)}
                          className="mt-1 text-[12px] font-semibold text-purple-600 transition hover:text-purple-700 dark:text-purple-300 dark:hover:text-purple-200"
                        >
                          {isDescriptionExpanded(project.id) ? "Less" : "More"}
                        </button>
                      </div>
                    </div>

                    {/* Footer: tech tags + buttons */}
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-[#AFA9EC] bg-[#EEEDFE] px-2.5 py-0.5 text-[10px] font-medium text-[#3C3489] dark:border-[#3C3489] dark:bg-[#26215C] dark:text-[#CECBF6] sm:px-3 sm:text-[11px]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Action buttons */}
                      <div className="flex shrink-0 items-center gap-2">
                        <div className="inline-flex rounded-full bg-[linear-gradient(95.47deg,_#A64DFF_0.6%,_#D741C3_39.66%,_#5716A7_78.1%,_#5D00B9_99.4%)] p-[1.5px]">
                          <Button
                            asChild
                            size="sm"
                            variant="ghost"
                            className="flex h-[34px] items-center gap-2 rounded-full bg-slate-900 px-4 text-[12px] font-semibold text-white hover:bg-slate-800 dark:bg-[#20253C] dark:text-white dark:hover:bg-[#bc4bff]/15 dark:hover:text-white sm:h-[38px] sm:px-5 sm:text-[13px]"
                          >
                            <Link
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Live Link
                              <Image
                                src="/send.png"
                                alt="Send"
                                width={16}
                                height={16}
                                className="!h-[14px] !w-[14px] sm:!h-[16px] sm:!w-[16px]"
                              />
                            </Link>
                          </Button>
                        </div>

                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            size="sm"
                            className="h-[34px] rounded-full bg-slate-200 px-4 text-[12px] font-semibold text-slate-900 hover:bg-slate-300 dark:bg-[#FFFFFF3D] dark:text-white dark:hover:bg-white/20 sm:h-[38px] sm:px-5 sm:text-[13px]"
                          >
                            <Image
                              src="/github logo.png"
                              alt="Github"
                              width={16}
                              height={16}
                              className="!h-[14px] !w-[14px] sm:!h-4 sm:!w-4"
                            />
                            <span>Github</span>
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                  <BorderBeam
                    duration={6}
                    delay={3}
                    size={400}
                    borderWidth={2}
                    className="from-transparent via-blue-500 to-transparent"
                  />
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* See More button */}
        <div className="mt-10 flex justify-center">
          <Button className="rounded-full bg-slate-900 px-8 py-3 text-[12px] font-semibold text-white transition hover:scale-105 hover:bg-slate-800 dark:bg-white/25 dark:text-white dark:hover:bg-white/35">
            See More
          </Button>
        </div>
      </div>
    </section>
  );
}
