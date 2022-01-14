import React from "react";
import Navigation from "../../component/shared/Navigation/Navigation";
import Appointment from "./Appointment/Appointment";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import InfoCard from "./InfoCard/InfoCard";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <InfoCard />
      <Services />
      <Appointment />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
