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
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        form,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      toast({
        title: "Thank you for your support!",
        description: "We'll be in touch soon with campaign updates.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="get-involved" className="py-20 bg-campaign-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop')] opacity-10 bg-cover bg-center" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get Involved
        </motion.h2>
        <motion.div 
          className="max-w-md mx-auto"
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
                placeholder="Your Message"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 min-h-[100px]"
                required
              />
            </div>
            <Button 
              type="submit"
              className="w-full bg-campaign-burgundy hover:bg-campaign-burgundy/90 text-white transform transition-transform hover:scale-105"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Join the Movement"}
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};