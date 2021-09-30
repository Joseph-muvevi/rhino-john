import React from 'react'
import "./AboutBanner.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from "../../../assets/container.jpg"
import image2 from "../../../assets/warehouse1.jpg"
import image3 from "../../../assets/cargoplane 1.jpg"
import image4 from "../../../assets/sea 2.jpg"
import image5 from "../../../assets/ship 3.jpg"
import image6 from "../../../assets/miningtools.jpg"

const AboutBanner = () => {
    

    const settings = {
        showArrows: false,
        swipeable: true,
        fade: true,
        stopOnHover: true,
        autoPlay: true,
        infiniteLoop: true,
        transitionTime: 2000,
        showIndicators: false,
        useKeyboardArrows: true,
        emulateTouch: true,
        showThumbs: false,
    }

    const transitionTimingFunction = 'ease-in';

    const carouselSlides = {
        position: 'absolute',
        display: 'block',
        zIndex: -2,
        minHeight: '100%',
        opacity: 0,
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        transitionTimingFunction: transitionTimingFunction,
        msTransitionTimingFunction: transitionTimingFunction,
        MozTransitionTimingFunction: transitionTimingFunction,
        WebkitTransitionTimingFunction: transitionTimingFunction,
        OTransitionTimingFunction: transitionTimingFunction,
    }

    return (

        
    <Carousel className="about-image" id = "about-banner" {...settings} style={carouselSlides} >
        <div>
            <img className="about-banner-images" src={image1}  alt="Rhino john about sliders"/>
        </div>
        <div>
            <img className="about-banner-images" src={image2}  alt="Rhino john about sliders"/>
        </div>
        <div>
            <img className="about-banner-images" src={image3}  alt="Rhino john about sliders"/>
        </div>
        <div>
            <img className="about-banner-images" src={image4}  alt="Rhino john about sliders"/>
        </div>
        <div>
            <img className="about-banner-images" src={image5}  alt="Rhino john about sliders"/>
        </div>
        <div>
            <img className="about-banner-images" src={image6} alt="Rhino john about sliders"/>
        </div>
    </Carousel>

    )
}

export default AboutBanner
