import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import WhyChooseUs from "../components/WhyChooseUs";
import Reviews from "../components/Reviews";
import Pricing from "../components/pricingPlans";
import Footer from "../components/Footer";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Reviews />
      <Pricing />
      <Footer />
    </>
  );
};

export default AppLayout;
