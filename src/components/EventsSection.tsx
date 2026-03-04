import { motion } from "framer-motion";
import { Zap, Bike, Dribbble, Flame, Music, Mic, Theater, Shirt } from "lucide-react";

const sports = [
  { icon: Zap, name: "100m Race" },
  { icon: Bike, name: "Relay Race" },
  { icon: Dribbble, name: "Cricket" },
  { icon: Flame, name: "Football" },
  { icon: Zap, name: "Volleyball" },
  { icon: Bike, name: "Badminton" },
];

const cultural = [
  { icon: Music, name: "Dance" },
  { icon: Mic, name: "Singing" },
  { icon: Theater, name: "Drama" },
  { icon: Shirt, name: "Fashion Show" },
  { icon: Music, name: "Classical Music" },
  { icon: Mic, name: "Stand-up" },
];

const EventCard = ({ icon: Icon, name, color }: { icon: any; name: string; color: string }) => (
  <motion.div whileHover={{ scale: 1.05, y: -5 }} className={`rounded-xl p-5 text-center cursor-pointer transition-shadow shadow-sm hover:shadow-lg ${color}`}>
    <Icon className="mx-auto mb-3" size={32} />
    <p className="font-medium text-sm">{name}</p>
  </motion.div>
);

const EventsSection = () => (
  <section id="events" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
        Our <span className="text-event-orange">Events</span>
      </motion.h2>
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-primary mb-6 text-center">🏅 Sports Events</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {sports.map((s, i) => (
            <EventCard key={i} {...s} color="bg-primary/10 text-primary" />
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-event-orange mb-6 text-center">🎭 Cultural Events</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {cultural.map((c, i) => (
            <EventCard key={i} {...c} color="bg-event-orange/10 text-event-orange" />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default EventsSection;
