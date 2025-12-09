import { motion } from "framer-motion";
import { AlertTriangle, Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerVariants } from "@/lib/framer-motion-utils";

const NotFound = () => {
  return (
      <div className=" flex items-center justify-center flex-1 p-6">
        <motion.div
          variants={staggerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl w-full text-center"
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <div className="inline-flex p-6 rounded-full bg-accent-subtle">
              <AlertTriangle size={64} className="text-foreground" />
            </div>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="font-fira font-black text-8xl sm:text-9xl text-foreground mb-4"
          >
            404
          </motion.h1>

          <motion.div variants={fadeInUp} className="space-y-4 mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Page Not Found
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link to="/" className="flex items-center gap-2">
                <Home size={18} />
                <span>Go Home</span>
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8"
              onClick={() => window.history.back()}
            >
              <ArrowLeft size={18} className="mr-2" />
              <span>Go Back</span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
  );
};

export default NotFound;
