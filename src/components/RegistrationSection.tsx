import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  department: z.string().min(1, "Department is required"),
  year: z.string().min(1, "Year is required"),
  event: z.string().min(1, "Event is required"),
});

const RegistrationSection = () => {
  const [form, setForm] = useState({ name: "", department: "", year: "", event: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }
    setSubmitted(true);
    toast.success("Registration successful!");
  };

  if (submitted) {
    return (
      <section id="register" className="py-20 bg-card">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold text-card-foreground mb-2">Registration Successful!</h2>
          <p className="text-muted-foreground">Thank you for registering. See you at the event!</p>
          <Button className="mt-6 bg-event-orange hover:bg-event-orange/90 text-primary-foreground" onClick={() => { setSubmitted(false); setForm({ name: "", department: "", year: "", event: "" }); }}>
            Register Another
          </Button>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="register" className="py-20 bg-card">
      <div className="container mx-auto px-4 max-w-md">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center mb-12 text-card-foreground">
          <span className="text-event-orange">Register</span> Now
        </motion.h2>
        <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} onSubmit={handleSubmit} className="space-y-4">
          <Input placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="bg-background" />
          <Select onValueChange={(v) => setForm({ ...form, department: v })}>
            <SelectTrigger className="bg-background"><SelectValue placeholder="Department" /></SelectTrigger>
            <SelectContent>
              {["CSE", "ECE", "EEE", "Mech", "Civil", "IT"].map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select onValueChange={(v) => setForm({ ...form, year: v })}>
            <SelectTrigger className="bg-background"><SelectValue placeholder="Year" /></SelectTrigger>
            <SelectContent>
              {["1st Year", "2nd Year", "3rd Year", "4th Year"].map((y) => <SelectItem key={y} value={y}>{y}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select onValueChange={(v) => setForm({ ...form, event: v })}>
            <SelectTrigger className="bg-background"><SelectValue placeholder="Select Event" /></SelectTrigger>
            <SelectContent>
              {["100m Race", "Relay", "Cricket", "Football", "Volleyball", "Dance", "Singing", "Drama", "Fashion Show"].map((e) => <SelectItem key={e} value={e}>{e}</SelectItem>)}
            </SelectContent>
          </Select>
          <Button type="submit" className="w-full bg-event-orange hover:bg-event-orange/90 text-primary-foreground font-semibold">Submit Registration</Button>
        </motion.form>
      </div>
    </section>
  );
};

export default RegistrationSection;
