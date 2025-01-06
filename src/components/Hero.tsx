import { Button } from "@/components/ui/button";
import { GraduationCap, Scale } from "lucide-react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

export const Hero = () => {
  const legalPhrases = [
    "Fiat Justitia",
    "Lex Non Scripta",
    "Corpus Juris",
    "De Facto",
    "De Jure",
    "Mens Rea",
    "Actus Reus",
    "Sine Die"
  ];

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
        <source src="https://player.vimeo.com/external/496797583.sd.mp4?s=b5c5d0d641f2b0977a14c6a6a4f2a14cee07a397&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
      </video>
      <div className="container mx-auto px-4 z-20 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center gap-4 mb-8"
        >
          <GraduationCap className="w-16 h-16 text-campaign-gold animate-bounce" />
          <Scale className="w-16 h-16 text-campaign-gold animate-bounce delay-100" />
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
          Pro Justitia et Aequitate
        </motion.p>
        <motion.h2 
          className="text-2xl md:text-3xl mb-12 max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          "Advocating for Excellence, Leading with Justice"
        </motion.h2>
        <Marquee 
          className="mb-12 py-4 bg-white/5 backdrop-blur-sm"
          gradient={true}
          speed={50}
        >
          {legalPhrases.map((phrase, index) => (
            <span key={index} className="mx-8 text-xl text-campaign-gold font-serif italic">
              {phrase}
            </span>
          ))}
        </Marquee>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Button 
            className="bg-campaign-burgundy hover:bg-campaign-burgundy/90 text-white px-8 py-6 text-lg transform transition-transform hover:scale-105"
            onClick={() => document.getElementById("get-involved")?.scrollIntoView({ behavior: "smooth" })}
          >
            Vox Populi - Join the Movement
          </Button>
        </motion.div>
      </div>
    </div>
  );
};