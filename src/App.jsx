import HeroMain from "./component/heroSection/HeroMain";
import NavbarMain from "./component/navbar/NavbarMain";
import HeroGradient from "./component/heroSection/HeroGradient";
import SubheroSection from "./component/heroSection/SubheroSection";
import AboutMeMain from "./component/AboutMeSection/AboutMeMain";
import HelperSection from "./component/HelperSection";
import SkillMain from "./component/SkillSection/SkillMain";
import Subskill from "./component/SkillSection/Subskill";
import ProjectMain from "./component/ProjectsSection/ProjectMain";
import ContactMeMain from "./component/ContactMeSection/ContactMeMain";
import FooterMain from "./component/footer/FooterMain";

function App() {
  return (
    <main className="font-body">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubheroSection />
      <AboutMeMain />
      <SkillMain />
      <Subskill />
      <ProjectMain />
      <ContactMeMain />
      <FooterMain />
      <HelperSection />
    </main>
  );
}

export default App;
