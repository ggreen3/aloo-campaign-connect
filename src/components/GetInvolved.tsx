import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export const GetInvolved = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Thank you for your support!",
      description: "We'll be in touch soon with campaign updates.",
    });
  };

  return (
    <div id="get-involved" className="py-20 bg-campaign-navy text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Get Involved</h2>
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                placeholder="Your Name"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                required
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                required
              />
            </div>
            <Button 
              type="submit"
              className="w-full bg-campaign-burgundy hover:bg-campaign-burgundy/90 text-white"
            >
              Join the Movement
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};