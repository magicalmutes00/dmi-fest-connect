import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
        Contact <span className="text-event-orange">Us</span>
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
          <div className="flex items-start gap-4">
            <MapPin className="text-primary mt-1 shrink-0" size={22} />
            <div>
              <h4 className="font-semibold text-foreground">Address</h4>
              <p className="text-muted-foreground text-sm">DMI Engineering College, Aravaimozhi, Kanyakumari District, Tamil Nadu - 629301</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="text-primary mt-1 shrink-0" size={22} />
            <div>
              <h4 className="font-semibold text-foreground">Phone</h4>
              <p className="text-muted-foreground text-sm">+91 4651 250 566</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="text-primary mt-1 shrink-0" size={22} />
            <div>
              <h4 className="font-semibold text-foreground">Email</h4>
              <p className="text-muted-foreground text-sm">info@dmice.ac.in</p>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-xl overflow-hidden shadow-md h-64 md:h-full min-h-[250px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.066!2d77.283!3d8.283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDMI+Engineering+College!5e0!3m2!1sen!2sin!4v1"
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="College Location"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
