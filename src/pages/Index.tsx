import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Manifesto } from "@/components/Manifesto";
import { GetInvolved } from "@/components/GetInvolved";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Manifesto />
      <GetInvolved />
    </div>
  );
};

export default Index;