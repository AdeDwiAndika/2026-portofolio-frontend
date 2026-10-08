import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/features/hero/components/HeroSection";
import { SkillSection } from "@/features/skills/components/SkillSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection
        name="Ade"
        about="Lorem ipsum dolor sit amet"
        skills="Software Developer"
      />
      <SkillSection />
    </>
  );
}

export default App;
