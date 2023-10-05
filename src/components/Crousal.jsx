import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Crousal = ({banners}) => {
    return (
        <Carousel
            showStatus={false}
            showThumbs={false}
            infiniteLoop
            autoPlay
            interval={3000}
            className="relative flex"
        >
            {banners.map((banner, index) => (
                <div key={index} className="w-full h-96 flex items-center justify-center">
                    <img src={banner.imageUrl} alt={banner.altText} className="max-h-fit max-w-full object-cover" />
                    {/* <span className='absolute'> */}
                        <h1 className='absolute text-7xl font-bold text-white' style={{WebkitTextStroke:"1px",WebkitTextStrokeColor:"green"}}>The Fresh Vegetiabls is Here</h1>
                    {/* </span> */}
                </div>
            ))}
        </Carousel>
    );
};

export default Crousal;
