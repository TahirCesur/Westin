import React from "react";
import Preloader from "./Components/Preloader";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import About from "./Components/About";
import SectionTitle from "./Components/SectionTitle";
import Service from "./Components/Service";
import Services from "./Components/Sevices";
import Portfolio from "./Components/Portfolio";
import Testimonial from "./Components/Testimonial";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
    return (
        <div>
            <Preloader/>
            <Header/>
            <Banner/>
            <About/>
            <SectionTitle/>
            <Services/>
            <Portfolio/>
            <Testimonial/>
            <Blog/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
