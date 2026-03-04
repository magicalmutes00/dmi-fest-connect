import { motion } from "framer-motion";

const schedule = [
  { time: "8:00 AM", event: "Inauguration & March Past", type: "morning" },
  { time: "9:00 AM", event: "100m & 200m Track Events", type: "morning" },
  { time: "10:30 AM", event: "Team Games – Cricket & Football", type: "morning" },
  { time: "12:00 PM", event: "Relay Race & Field Events", type: "morning" },
  { time: "1:00 PM", event: "Lunch Break", type: "break" },
  { time: "2:30 PM", event: "Prize Distribution – Sports", type: "evening" },
  { time: "3:30 PM", event: "Cultural Programs Begin – Dance & Music", type: "evening" },
  { time: "5:00 PM", event: "Drama & Fashion Show", type: "evening" },
  { time: "6:30 PM", event: "Grand Finale & Prize Distribution", type: "evening" },
];

const ScheduleSection = () => (
  <section id="schedule" className="py-20 bg-card">
    <div className="container mx-auto px-4 max-w-2xl">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center mb-12 text-card-foreground">
        Event <span className="text-event-orange">Schedule</span>
      </motion.h2>
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />
        {schedule.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`relative flex items-center mb-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}>
            <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full -translate-x-1/2 z-10" style={{ backgroundColor: item.type === "morning" ? "hsl(200 98% 39%)" : item.type === "evening" ? "hsl(24 95% 53%)" : "hsl(215 20% 65%)" }} />
            <div className={`ml-10 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"} bg-background rounded-lg p-4 shadow-sm`}>
              <span className={`text-xs font-semibold uppercase ${item.type === "morning" ? "text-primary" : item.type === "evening" ? "text-event-orange" : "text-muted-foreground"}`}>{item.time}</span>
              <p className="text-foreground font-medium mt-1">{item.event}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ScheduleSection;
