// import landingVideo from "../assets/landing.mp4";
import landingImage from "../assets/images/landing.jpg";
import ContactUsSection from "../components/ContactUsSection";
import OurPartners from "../components/OurPartners";
import OurProjects from "../components/OurProjects";
import MainSection from "../components/MainSection";
import LeaderTalk from "../components/LeaderTalk";
import WhyUs from "../components/WhyUs";
const Home = () => {
  /*
  about us
    -vision
    -mission
    -values
  our goals
  projects
  our services
  our partners
  contact sticky buttons
  
  contact us
  our news

  banner in subPages

  */
  return (
    <main>
      {/* <video
        className="w-full h-[75vh] object-cover"
        loop
        src={landingVideo}
        autoPlay
        muted
      ></video> */}
      <section className="relative overflow-hidden h-[75vh]">
        <img
          className="w-full h-[75vh] object-cover landingImage"
          alt="landing image"
          src={landingImage}
        />
        <div className="absolute top-0 right-0 w-full h-full bg-black bg-opacity-30" />
      </section>
      <MainSection />
      <LeaderTalk />
      <WhyUs />
      <OurProjects />
      <OurPartners />
      <ContactUsSection />
    </main>
  );
};

export default Home;
