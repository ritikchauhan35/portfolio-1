import React, { FormEvent } from "react";
import { Helmet } from "react-helmet-async"; // SEO
import { motion } from "framer-motion"; // Animations
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"; // Icons
import { Input } from "@/components/ui/input"; // Design system input
import { Textarea } from "@/components/ui/textarea"; // Design system textarea
import { Button } from "@/components/ui/button"; // Design system button
import { toast } from "sonner"; // Lightweight toast for feedback

/**
 * Contact Page
 * - Left: contact details and social links
 * - Right: contact form with Name, Email, Message, and submit button
 */
const Contact: React.FC = () => {
  // Simple enter animation
  const pageVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
  };

  // Simulated submit handler (no backend). Provides feedback via toast.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent full-page reload
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;

    toast.success(`Thanks, ${name || "friend"}! I'll get back to you soon.`);
    form.reset(); // Clear the form for a fresh start
  };

  return (
    <main className="min-h-screen flex flex-col md:flex-row" aria-labelledby="contact-heading">
      <Helmet>
        <title>Contact | Frontend Developer Portfolio</title>
        <meta name="description" content="Get in touch via email, phone, or social links. Send a message using the contact form." />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.origin + '/contact' : '/contact'} />
      </Helmet>

      {/* LEFT: Details */}
      <motion.aside
        initial="hidden"
        animate="visible"
        variants={pageVariants}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="flex-1 p-8 md:p-12 space-y-6 border-b md:border-b-0 md:border-r"
      >
        <h1 id="contact-heading" className="font-raleway text-gradient text-3xl md:text-5xl font-bold">Contact</h1>
        <ul className="space-y-4">
          <li className="flex items-center gap-3"><Mail className="w-5 h-5" /><a href="mailto:you@example.com" className="story-link">you@example.com</a></li>
          <li className="flex items-center gap-3"><Phone className="w-5 h-5" /><a href="tel:+1234567890" className="story-link">+1 (234) 567-890</a></li>
          <li className="flex items-center gap-3"><MapPin className="w-5 h-5" /><span>City, Country</span></li>
        </ul>
        <div className="flex items-center gap-4 pt-2">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:scale-105 transition-transform"><Github /></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:scale-105 transition-transform"><Linkedin /></a>
        </div>
      </motion.aside>

      {/* RIGHT: Form */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={pageVariants}
        transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
        className="flex-1 p-8 md:p-12"
        aria-label="Contact form"
      >
        <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
          {/* Name */}
          <div className="grid gap-2">
            <label htmlFor="name" className="font-medium">Name</label>
            <Input id="name" name="name" placeholder="Your full name" required />
          </div>

          {/* Email */}
          <div className="grid gap-2">
            <label htmlFor="email" className="font-medium">Email</label>
            <Input id="email" type="email" name="email" placeholder="you@example.com" required />
          </div>

          {/* Message */}
          <div className="grid gap-2">
            <label htmlFor="message" className="font-medium">Message</label>
            <Textarea id="message" name="message" placeholder="How can I help?" rows={6} required />
          </div>

          {/* Submit */}
          <Button type="submit" className="transition-transform duration-200 hover:scale-105">Send Message</Button>
        </form>
      </motion.section>
    </main>
  );
};

export default Contact;
