import { Link } from "react-router-dom"; // Client-side navigation
import { Helmet } from "react-helmet-async"; // Per-page SEO
import { motion } from "framer-motion"; // Smooth animations

/**
 * Landing Page
 * - Full-screen split layout (2 columns on desktop, stacked on mobile)
 * - Left: bottom-aligned headline and tagline
 * - Right: centered navigation links with large hover scale effect
 * - Uses gradient text via `.text-gradient` utility and themed fonts
 */
const Index = () => {
  // Simple page transition variants for a fade-slide-in effect
  const pageVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen flex flex-col md:flex-row">
      {/* SEO: Title + meta description + canonical */}
      <Helmet>
        <title>Frontend Developer Portfolio | Ritik Chauhan</title>
        <meta name="description" content="Frontend developer crafting interactive web experiences. Explore projects, services, and contact details." />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.origin + '/' : '/'} />
      </Helmet>

      {/* LEFT COLUMN */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={pageVariants}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex-1 p-8 md:p-12 flex flex-col items-start"
        aria-labelledby="intro-heading"
      >
        {/* Single H1 for SEO with main keyword and name */}
        <h1 id="intro-heading" className="font-raleway text-gradient text-4xl md:text-6xl font-bold leading-tight">
          <span className="block">Frontend Developer</span>
          <span className="block text-3xl md:text-5xl font-arvo mt-2">Your Name</span>
        </h1>
        {/* Tagline placed separately for clarity */}
        <p className="font-neuton text-gradient text-lg md:text-2xl mt-3">I’m a passionate Frontend Developer who loves transforming ideas into interactive, user-friendly, and visually appealing web experiences. With a strong command of HTML, CSS, and JavaScript—alongside modern frameworks like React—I focus on creating responsive designs, smooth animations, and optimized performance. My goal is to blend creativity with functionality, ensuring every project delivers both style and substance.</p>
      </motion.section>

      {/* RIGHT COLUMN */}
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={pageVariants}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
        className="flex-1 grid place-items-center overflow-hidden p-8 md:p-12"
        aria-label="Primary"
      >
        {/* Centered stack of big links */}
        <ul className="flex flex-col items-center gap-8 w-full max-w-md">
          {[
            { to: "/projects", label: "Projects" },
            { to: "/services", label: "Services" },
            { to: "/contact", label: "Contact Me" },
          ].map((item) => (
            <li key={item.to} className="w-full">
              {/*
                Use framer-motion to scale on hover so text nearly fills its row container.
                `overflow-hidden` on the parent prevents spill-over.
              */}
              <motion.div whileHover={{ scale: 1.08 }} transition={{ type: "spring", stiffness: 220, damping: 16 }} className="w-full">
                <Link
                  to={item.to}
                  className="block text-center font-arvo text-gradient text-3xl md:text-5xl py-4 story-link"
                >
                  {item.label}
                </Link>
              </motion.div>
            </li>
          ))}
        </ul>
      </motion.nav>
    </main>
  );
};

export default Index;
