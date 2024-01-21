import { Header } from "../components/Header";
import { AboutSection } from "../components/Sections/About";
import { ContactSection } from "../components/Sections/Contact";
import { ExperienceSection } from "../components/Sections/Experience";
import { ProfileSection } from "../components/Sections/Profile";
import { ProjectSection } from "../components/Sections/Project";
import { RecommendationSection } from "../components/Sections/Recommendation";
import { SkillSection } from "../components/Sections/Skill";
import { MenuMobileContext } from "../contexts/MenuMobileContext";
import { useContext } from "react";

export default function Home() {
  const { isMenuOpen } = useContext(MenuMobileContext);

  return (
    <>
      <Header />
      {isMenuOpen ? (
        ""
      ) : (
        <>
          <ProfileSection />
          <AboutSection />
          <SkillSection />
          <ExperienceSection />
          <ProjectSection />
          <RecommendationSection />
          <ContactSection />
        </>
      )}
    </>
  );
}
