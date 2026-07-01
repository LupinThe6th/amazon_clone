import React from "react";
import { Carousel }  from 'react-responsive-carousel';
import slider1 from "../images/slider/slide1.jpg";
import slider2 from "../images/slider/slide2.jpg";
import slider3 from "../images/slider/slide3.jpg";
import slider4 from "../images/slider/slide4.jpg";
import slider5 from "../images/slider/slide5.jpg";
import slider6 from "../images/slider/slide6.jpg";
import slider7 from "../images/slider/slide7.jpg";
import Image from "next/image";

const Banner = () => {
    return (
        <div className="relative">
            <Carousel  autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={3000}> 
                <div>
                    <Image priority src={slider1} alt="sliderImg" />
                </div>
                <div>
                    <Image src={slider2} alt="sliderImg" />
                </div>
                <div>
                    <Image  src={slider3} alt="sliderImg" />
                </div>
                <div>
                    <Image  src={slider4} alt="sliderImg" />
                </div>
                <div>
                    <Image src={slider5} alt="sliderImg" />
                </div>
                <div>
                    <Image src={slider6} alt="sliderImg" />
                </div>
                <div>
                    <Image src={slider7} alt="sliderImg" />
                </div>
            </Carousel>
           <div className="w-full h-40 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-20" /> 
        </div>
    );
};

export default Banner;