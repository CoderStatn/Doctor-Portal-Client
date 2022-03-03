import React from "react";
import Navigation from "../../component/shared/Navigation/Navigation";
import Appointment from "./Appointment/Appointment";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import DentalCare from "./DentalCare/DentalCare";
import Doctors from "./Doctors/Doctors";
import Footer from "./Footer/Footer";
import InfoCard from "./InfoCard/InfoCard";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <InfoCard />
      <Services />
      <DentalCare />
      <Testimonial/>
      <Appointment />
      <Doctors/>
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
