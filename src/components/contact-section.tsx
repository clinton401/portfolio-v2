
import { motion } from 'motion/react';
import { Mail, ArrowUpRight } from "lucide-react";
import { Button } from '@/components/ui/button';
import type { SocialLink } from '@/types';
import { fadeInUp } from '@/lib/framer-motion-utils';

interface ContactSectionProps {
  socialLinks: SocialLink[];
  email?: string;
}

export const ContactSection = ({
  socialLinks,
  email = "clintonphillips464@gmail.com",
}: ContactSectionProps) => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Main Content */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-ring/5 rounded-2xl -z-10" />

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-2xl border border-border bg-card/50 backdrop-blur-sm"
          >
            <div className="max-w-2xl">
              {/* Heading */}
              <h2 className="font-fira font-black text-4xl sm:text-5xl text-foreground mb-4">
                Let's Build Something
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Open to freelance projects, full-time opportunities, and
                collaborations. If you have an idea or need help bringing your
                vision to life, let's talk.
              </p>

              {/* Email CTA */}
              <Button
                size="lg"
                className="rounded-full px-8 mb-12 group"
                asChild
              >
                <a href={`mailto:${email}`} className="flex items-center gap-2">
                  <Mail size={18} />
                  <span>Get In Touch</span>
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </a>
              </Button>

              {/* Social Grid */}
              <div>
                <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">
                  Connect Online
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {socialLinks.map(({ name, icon: Icon, url }) => (
                    <a
                      key={name}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center gap-2 p-4 rounded-lg border border-border hover:border-accent/50 bg-background/50 hover:bg-accent/5 transition-all"
                    >
                      <Icon
                        size={24}
                        className="text-muted-foreground group-hover:text-foreground transition-colors"
                      />
                      <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                        {name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};