import React from "react";
import Navbar1 from "../components/2nd_page/Navbar1";
import HeroSection from "../components/2nd_page/HeroSection";
import GridSection from "../components/2nd_page/GridSection";
import StepSection from "../components/2nd_page/StepSection";
import Footer from "../components/first_page/Footer";


function Home() {
    return (
        <>
            <Navbar1 />
            <HeroSection />
            <GridSection />
            <StepSection />
            < Footer />
        </>
    );
}

export default Home;