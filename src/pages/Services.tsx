import React from "react";
import { Helmet } from "react-helmet-async"; // SEO
import { motion } from "framer-motion"; // Animations
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"; // Design system cards
import { Code2, Palette, Rocket } from "lucide-react"; // Icons for service cards

/**
 * Services Page
 * - Grid of service cards with subtle hover effects
 * - Uses semantic tokens and responsive grid
 */
const Services: React.FC = () => {
  // Simple enter animation variants
  const pageVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
  };

  const services = [
    {
      title: "Web Development",
      icon: <Code2 className="w-6 h-6" />,
      desc: "Modern, performant, and accessible web apps using React, TypeScript, and best practices.",
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="w-6 h-6" />,
      desc: "Clean, intuitive interfaces with a strong focus on typography, spacing, and interactions.",
    },
    {
      title: "SEO Optimization",
      icon: <Rocket className="w-6 h-6" />,
      desc: "Technical and on-page SEO to improve visibility, performance, and user engagement.",
    },
  ];

  return (
    <main className="min-h-screen p-8 md:p-12" aria-labelledby="services-heading">
      <Helmet>
        <title>Services | Frontend Developer Portfolio</title>
        <meta name="description" content="Web development, UI/UX design, and SEO optimization services with responsive design and performance focus." />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.origin + '/services' : '/services'} />
      </Helmet>

      {/* Single H1 */}
      <motion.h1
        id="services-heading"
        initial="hidden"
        animate="visible"
        variants={pageVariants}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="font-raleway text-gradient text-3xl md:text-5xl font-bold mb-10"
      >
        Services
      </motion.h1>

      {/* Responsive grid of service cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s) => (
          <motion.div key={s.title} whileHover={{ scale: 1.03, rotate: 0 }} transition={{ type: "spring", stiffness: 220, damping: 18 }}>
            <Card className="h-full transition-shadow duration-200 hover:shadow-xl">
              <CardHeader className="flex flex-row items-center gap-3">
                <div aria-hidden>{s.icon}</div>
                <CardTitle className="font-arvo text-xl">{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>
    </main>
  );
};

export default Services;
