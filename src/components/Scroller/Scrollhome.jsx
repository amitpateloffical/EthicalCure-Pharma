import React, { useEffect, useState } from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import "./Scrollhome.css";
// import TestimonialCard from './TestimonialCard';

const testimonialsData = [
  {
    title: "MASALA HOUSE DESIGN",
    content: "We rely on Tendoni group for their top-notch food chemicals that help us create consistently delicious baked goods. Their additives have significantly improved the texture and freshness of our products. It's reassuring to partner with a company that prioritizes quality and ensures our creations stand out.",
    icon: "https://i.imgur.com/gZ5HY0U.png",
    image: "/masala-1.jpg",
  },
  {
    title: "MASALA HOUSE DESIGN",
    content: "When catering to diverse palates, quality spices are non-negotiable. [Masala Company]'s spice blends have been a lifesaver. Their blends cater to a spectrum of tastes, ensuring that our dishes capture the essence of each cuisine authentically. Their commitment to delivering premium quality is evident in every blend.",
    icon: "https://i.imgur.com/gZ5HY0U.png",
    image: "/masala-1.jpg",
  },
  {
    title: "MASALA HOUSE DESIGN",
    content: "Finding organic, high-quality spices is crucial for our kitchen. [Spices Industry] delivers just that! Their organic spice range has elevated the taste of our meals while aligning perfectly with our health-conscious approach. Their dedication to purity and freshness is evident in every spice they offer.",
    icon: "https://i.imgur.com/gZ5HY0U.png",
    image: "/masala-1.jpg",
  }, {
    title: "MASALA HOUSE DESIGN",
    content: "At our farm-to-table restaurant, we prioritize quality produce. [Fruits Industry] consistently provides us with the freshest fruits, straight from the orchard. Their dedication to sustainable farming practices resonates with our ethos, ensuring that our dishes showcase nature's finest flavors.",
    icon: "https://i.imgur.com/gZ5HY0U.png",
    image: "/masala-1.jpg",
  }, {
    title: "MASALA HOUSE DESIGN",
    content: "Stocking our shelves with the best vegetables is essential for our business. [Vegetables Industry] has been our trusted supplier for years. Their dedication to quality means that our customers always have access to the freshest, locally sourced vegetables.",
    icon: "https://i.imgur.com/gZ5HY0U.png",
    image: "/masala-1.jpg",
  },
  // Add more testimonials with different content, images, and titles
];



const Scrollhome = () => {
  const [slidesToShow, setSlidesToShow] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      const newSlidesToShow = window.innerWidth >= 768 ? 3 : 1;
      if (newSlidesToShow !== slidesToShow) {
        setSlidesToShow(newSlidesToShow);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [slidesToShow]);

  return (
    <>
      <div className='order-slider'>
        <div className='testmo'>Testimonial</div>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          totalSlides={testimonialsData.length}
          visibleSlides={slidesToShow}
          isPlaying
          isInfinite={true}
          interval={3000}
        >
          <Slider>
            {testimonialsData.map((item, index) => (
              <Slide index={index} key={index}>
                <TestimonialCard CardtestimonialData={item} key={index} />
              </Slide>
            ))}
          </Slider>
        </CarouselProvider>
      </div>
    </>
  );
};

export default Scrollhome;