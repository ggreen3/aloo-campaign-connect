import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gavel, Users, Vote, Award, Scale, Book } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

const achievements = [
  { icon: Award, title: "Dean's List", description: "Consistent academic excellence" },
  { icon: Scale, title: "Moot Court", description: "Winner of National Competition" },
  { icon: Book, title: "Publications", description: "Published in Law Review" },
];

export const About = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-campaign-navy"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Joel
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              As a dedicated law student at the University of Nairobi School of Law, I understand the challenges and aspirations of our student body. My commitment to excellence and justice drives my vision for a better law school experience for all.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <Card className="border-campaign-navy/20 transform transition-transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gavel className="text-campaign-burgundy" />
                    Experience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">3 years of student leadership</p>
                </CardContent>
              </Card>
              <Card className="border-campaign-navy/20 transform transition-transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="text-campaign-burgundy" />
                    Leadership
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Proven track record of advocacy</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
          <motion.div 
            className="relative h-[500px] rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800"
              alt="Joel Aloo speaking at an event"
              className="absolute inset-0 w-full h-full object-cover transform transition-transform hover:scale-105"
            />
          </motion.div>
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-10 text-campaign-navy">Achievements</h3>
          <Carousel className="w-full max-w-xl mx-auto">
            <CarouselContent>
              {achievements.map((achievement, index) => (
                <CarouselItem key={index}>
                  <Card className="border-campaign-navy/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        {React.createElement(achievement.icon, { className: "text-campaign-burgundy" })}
                        {achievement.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{achievement.description}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};