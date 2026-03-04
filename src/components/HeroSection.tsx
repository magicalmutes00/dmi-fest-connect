import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const targetDate = new Date("2026-03-15T09:00:00").getTime();

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = targetDate - Date.now();
      if (diff <= 0) { clearInterval(timer); return; }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img src={heroBanner} alt="Sports Day and College Day Banner" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-secondary/70" />
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-3xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-4 leading-tight">
          DMI Engineering College<br />
          <span className="text-event-orange">Sports Day</span> & <span className="text-primary">College Day</span> 2026
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-lg md:text-xl text-secondary-foreground/80 mb-6">
          Celebrating Talent, Unity, and Excellence
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex flex-wrap justify-center gap-6 mb-8 text-secondary-foreground">
          {Object.entries(timeLeft).map(([label, val]) => (
            <div key={label} className="bg-primary/20 backdrop-blur rounded-lg p-3 min-w-[70px]">
              <div className="text-2xl md:text-3xl font-bold text-event-orange">{val}</div>
              <div className="text-xs uppercase tracking-wider text-secondary-foreground/70">{label}</div>
            </div>
          ))}
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="space-y-2">
          <p className="text-secondary-foreground/70 text-sm">📅 March 15, 2026 | 📍 DMI Engineering College, Aravaimozhi</p>
          <Button size="lg" className="bg-event-orange hover:bg-event-orange/90 text-primary-foreground font-semibold px-8" onClick={() => document.querySelector("#register")?.scrollIntoView({ behavior: "smooth" })}>
            Register Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
