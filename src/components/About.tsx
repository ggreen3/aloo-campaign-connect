import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gavel, Users, Vote } from "lucide-react";

export const About = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-campaign-navy">About Joel</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              As a dedicated law student at the University of Nairobi School of Law, I understand the challenges and aspirations of our student body. My commitment to excellence and justice drives my vision for a better law school experience for all.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <Card className="border-campaign-navy/20">
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
              <Card className="border-campaign-navy/20">
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
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800"
              alt="Joel Aloo speaking at an event"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};