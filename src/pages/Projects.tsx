import React, { useState } from "react";
import { Helmet } from "react-helmet-async"; // Per-page SEO
import { motion } from "framer-motion"; // Smooth transitions
import { ScrollArea } from "@/components/ui/scroll-area";


/**
 * Projects Page
 * - Left: list of projects with hover underline and scale
 * - Right: preview panel showing image for the hovered project
 * - Fully responsive and accessible
 */
const Projects: React.FC = () => {
  // Define our project entries with optional external URLs
  const projects = [
    {
      name: "Car rental platform",
      image: "/images/projects/car rental.png",
      url: "https://car-rental-ochre-eight.vercel.app/", // Optional deploy link
    },
    {
      name: "Personalized Job Tracker",
      image: "/images/projects/job-tracker.png",
      url: "https://personlized-job-tracking-i80vx8ue8-rc4990797-9203s-projects.vercel.app/",
    },
    {
      name: "ADmyBrand Landing Page",
      image: "/images/projects/Admybrand.png",
      url: "admy-brand-seven.vercel.app",
    },
    
  ];

  // Track which project is being hovered for the preview panel (default to first)
  const [activeIndex, setActiveIndex] = useState(0);

  // Simple variants for page fade-in
  const pageVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen flex flex-col md:flex-row" aria-labelledby="projects-heading">
      <Helmet>
        <title>Projects | Frontend Developer Portfolio</title>
        <meta
          name="description"
          content="Explore projects including development dashboards, UI kits, and SEO insights with dynamic previews."
        />
        <link
          rel="canonical"
          href={typeof window !== "undefined" ? window.location.origin + "/projects" : "/projects"}
        />
      </Helmet>

      {/* LEFT LIST */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={pageVariants}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex-1 p-8 md:p-12 border-b md:border-b-0 md:h-screen flex flex-col"
      >
        {/* Single H1 with keyword */}
        <h1
          id="projects-heading"
          className="font-raleway text-gradient text-3xl md:text-5xl font-bold mb-8"
        >
          Projects
        </h1>

        <ScrollArea className="flex-1 pr-2">
          <ul className="space-y-6">
            {projects.map((p, idx) => {
              const hasValidLink = p.url && p.url !== "#" && p.url.trim() !== "";
              return (
                <li key={p.name} className="flex items-center justify-between">
                  {/* Project name with underline animation, hover scale,
                      and click-to-open only if URL is valid */}
                  <button
                    type="button"
                    onMouseEnter={() => setActiveIndex(idx)}
                    onClick={() => {
                      if (hasValidLink) {
                        // Prepend protocol if missing
                        const finalUrl = p.url.startsWith("http") ? p.url : `https://${p.url}`;
                        // Open in new tab safely
                        window.open(finalUrl, "_blank", "noopener,noreferrer");
                      }
                    }}
                    // Cursor pointer only for clickable items to indicate interactivity
                    className={`text-left font-arvo text-2xl md:text-3xl text-gradient story-link transition-transform duration-200 hover:scale-105 ${
                      hasValidLink ? "cursor-pointer" : "cursor-default"
                    }`}
                    aria-controls="project-preview"
                    aria-label={`Preview ${p.name}`}
                  >
                    {p.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </ScrollArea>
      </motion.section>

      {/* RIGHT PREVIEW */}
      <motion.section
        id="project-preview"
        initial="hidden"
        animate="visible"
        variants={pageVariants}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
        className="flex-1 grid place-items-center p-8 md:p-12 md:h-screen"
        aria-label="Project preview"
      >
        {/* Selected project's preview image with alt text for accessibility */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="w-full max-w-4xl aspect-video overflow-hidden rounded-lg border ambient-shadow transition-all duration-500"
        >
          <img
            src={projects[activeIndex].image}
            alt={`${projects[activeIndex].name} preview image`}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </motion.div>
      </motion.section>
    </main>
  );
};

export default Projects;
