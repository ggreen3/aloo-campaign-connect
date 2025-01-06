import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const promises = [
  {
    title: "Enhanced Library Resources",
    description: "24/7 digital library access and expanded physical resources",
  },
  {
    title: "Student Welfare",
    description: "Improved study spaces and mental health support",
  },
  {
    title: "Career Development",
    description: "Regular law firm networking events and internship opportunities",
  },
  {
    title: "Academic Excellence",
    description: "Peer mentorship programs and study groups",
  },
];

export const Manifesto = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-campaign-navy">Campaign Promises</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {promises.map((promise) => (
            <Card key={promise.title} className="border-campaign-navy/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Check className="text-campaign-burgundy" />
                  {promise.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{promise.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};