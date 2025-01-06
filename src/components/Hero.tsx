import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center bg-campaign-navy text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-campaign-navy/90 to-campaign-burgundy/80 z-10" />
      <video 
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1c4f0c53d&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
      </video>
      <div className="container mx-auto px-4 z-20 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <GraduationCap className="w-20 h-20 mx-auto mb-8 text-campaign-gold animate-bounce" />
        </motion.div>
        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Joel Aloo
        </motion.h1>
        <motion.p 
          className="text-3xl md:text-4xl mb-8 text-campaign-gold"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          For Law School Governor
        </motion.p>
        <motion.h2 
          className="text-2xl md:text-3xl mb-12 max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          "Advocating for Excellence, Leading with Justice"
        </motion.h2>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Button 
            className="bg-campaign-burgundy hover:bg-campaign-burgundy/90 text-white px-8 py-6 text-lg transform transition-transform hover:scale-105"
            onClick={() => document.getElementById("get-involved")?.scrollIntoView({ behavior: "smooth" })}
          >
            Join the Campaign
          </Button>
        </motion.div>
      </div>
    </div>
  );
};