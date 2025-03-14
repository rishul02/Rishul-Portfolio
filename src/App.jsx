import HeroMain from "./component/heroSection/HeroMain";
import NavbarMain from "./component/navbar/NavbarMain";
import AboutMeMain from "./component/AboutMeSection/AboutMeMain";
import SkillMain from "./component/SkillSection/SkillMain";
import ProjectMain from "./component/ProjectsSection/ProjectMain";
import ContactMeMain from "./component/ContactMeSection/ContactMeMain";
import FooterMain from "./component/footer/FooterMain";

function App() {
  return (
    <main className="relative font-body ">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/videos/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <NavbarMain />
      <HeroMain />
      <AboutMeMain />
      <SkillMain />
      <ProjectMain />
      <ContactMeMain />
      <FooterMain />
    </main>
  );
}

export default App;
