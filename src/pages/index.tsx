import { Header } from "@/components/Header";
import { AboutSection } from "@/components/Sections/about";
import { ContactSection } from "@/components/Sections/contact";
import { ExperienceSection } from "@/components/Sections/experience";
import { ProfileSection } from "@/components/Sections/profile";
import { ProjectSection } from "@/components/Sections/project";
import { RecommendationSection } from "@/components/Sections/recommendation";
import { SkillSection } from "@/components/Sections/skill";

export default function Home() {
  return (
    <>
      <Header />
      <ProfileSection />
      <AboutSection />
      <SkillSection />
      <ExperienceSection />
      <ProjectSection />
      <RecommendationSection />
      <ContactSection />
    </>
  );
}
