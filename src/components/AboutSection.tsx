import { motion } from "framer-motion";
import { Trophy, Music, Target } from "lucide-react";

const items = [
  { icon: Trophy, title: "Sports Day", desc: "Thrilling track events, team games like cricket, football, volleyball, and more. Witness fierce competition and sportsmanship at its best." },
  { icon: Music, title: "College Day", desc: "A spectacular evening of cultural programs — dance, music, drama performances, fashion shows, and grand prize distribution ceremony." },
  { icon: Target, title: "Our Mission", desc: "To celebrate talent, foster unity among students and faculty, and create lasting memories through competitive spirit and cultural expression." },
];

const AboutSection = () => (
  <section id="about" className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center mb-12 text-card-foreground">
        About the <span className="text-event-orange">Event</span>
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <item.icon className="text-primary" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
