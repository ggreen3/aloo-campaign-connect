import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';
import { useState } from "react";
import { motion } from "framer-motion";

export const GetInvolved = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      await emailjs.sendForm(
        'service_your_service_id',
        'template_your_template_id',
        form,
        'your_public_key'
      );

      toast({
        title: "Gratias tibi! (Thank you!)",
        description: "Your message has been sent. Pro bono publico - for the public good.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error Juris (Error of Law)",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="get-involved" className="py-20 bg-campaign-navy text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <video 
          className="w-full h-full object-cover opacity-10"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="https://player.vimeo.com/external/528726481.sd.mp4?s=a845b998f9f8a316213d3c623ac5b4afc4d5ccea&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Vox Populi, Vox Dei
        </motion.h2>
        <motion.p 
          className="text-xl text-center mb-16 text-campaign-gold italic"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          The voice of the people is the voice of God
        </motion.p>
        <motion.div 
          className="max-w-md mx-auto glass-morphism p-8 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                name="name"
                placeholder="Your Name"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                required
              />
            </div>
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                required
              />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Pro Bono Publico - Share your thoughts for the public good"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 min-h-[100px]"
                required
              />
            </div>
            <Button 
              type="submit"
              className="w-full bg-campaign-burgundy hover:bg-campaign-burgundy/90 text-white transform transition-transform hover:scale-105"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Carpe Diem - Seize the Day!"}
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};