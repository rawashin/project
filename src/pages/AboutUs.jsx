import AboutUSections from "../components/AboutUSections";
import OurGoals from "../components/OurGoals";
import circles from "../assets/images/circles.png";
const AboutUs = () => {
  return (
    <main>
      <AboutUSections />
      <OurGoals />
      <section className="container py-12">
        <img src={circles} className="max-w-[500px] mx-auto" alt="" />
      </section>
    </main>
  );
};

export default AboutUs;
