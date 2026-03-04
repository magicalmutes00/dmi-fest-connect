import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground py-10">
    <div className="container mx-auto px-4 text-center space-y-4">
      <h3 className="text-xl font-bold">DMI Engineering College</h3>
      <p className="text-secondary-foreground/70 text-sm">Aravaimozhi, Tamil Nadu | Sports Day & College Day 2026</p>
      <div className="flex justify-center gap-4">
        {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
          <a key={i} href="#" className="text-secondary-foreground/60 hover:text-event-orange transition-colors">
            <Icon size={20} />
          </a>
        ))}
      </div>
      <p className="text-xs text-secondary-foreground/50">© 2026 DMI Engineering College. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
