import OurServices from "../components/OurServices";
import banner from "../assets/images/servicesBanner.png";
import OurManagement from "../components/OurManagement";
const Services = () => {
  return (
    <main>
      <OurServices />
      <section className="container">
        <img src={banner} className="w-full mt-6" alt="banner1" />
      </section>
      <OurManagement />
    </main>
  );
};

export default Services;
