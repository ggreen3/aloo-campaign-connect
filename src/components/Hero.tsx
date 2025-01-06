import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-campaign-navy text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-campaign-navy/90 to-campaign-burgundy/80 z-10" />
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1920')",
        }}
      />
      <div className="container mx-auto px-4 z-20 text-center">
        <GraduationCap className="w-16 h-16 mx-auto mb-8 text-campaign-gold" />
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Joel Aloo</h1>
        <p className="text-2xl md:text-3xl mb-8 text-campaign-gold">For Law School Governor</p>
        <h2 className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
          "Advocating for Excellence, Leading with Justice"
        </h2>
        <Button 
          className="bg-campaign-burgundy hover:bg-campaign-burgundy/90 text-white px-8 py-6 text-lg"
          onClick={() => document.getElementById("get-involved")?.scrollIntoView({ behavior: "smooth" })}
        >
          Join the Campaign
        </Button>
      </div>
    </div>
  );
};