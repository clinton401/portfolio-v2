import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fadeInUp, scaleIn } from '@/lib/framer-motion-utils';

interface CTAButton {
  text: string;
  href: string;
}

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCTA: CTAButton;
  secondaryCTA?: CTAButton;
}

export const Hero = ({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
}: HeroProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-40">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {/* Main heading - centered, bold, readable */}
          <motion.h1
            variants={fadeInUp}
            className="font-fira font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground leading-[0.9] tracking-tight mb-6"
          >
            {title}
          </motion.h1>

          {/* Subtle accent line under title */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-accent-subtle to-transparent mb-8"
          />

          {/* Subtitle - muted, readable */}
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12"
          >
            {subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-4"
          >
            <Button size="lg" className="rounded-full px-8 h-12" asChild>
              <a href={primaryCTA.href}>{primaryCTA.text}</a>
            </Button>

            {secondaryCTA && (
              <Button
                variant="outline"
                size="lg"
                className="rounded-full aspect-square h-12 p-0"
                asChild
              >
                <a href={secondaryCTA.href} aria-label={secondaryCTA.text}>
                  <ArrowRight size={20} />
                </a>
              </Button>
            )}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={scaleIn}
            className="mt-20 flex flex-col items-center gap-2"
          >
            <span className="text-xs text-muted-foreground uppercase tracking-wider">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};