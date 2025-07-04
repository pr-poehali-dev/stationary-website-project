import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import EmergencyBanner from "@/components/EmergencyBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <EmergencyBanner />
      <Footer />
    </div>
  );
};

export default Index;
