import './MySlider.css'
import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const MySlider = () => {

  useEffect(() => {
    AOS.init({ duration: 1400 });
    AOS.refresh();
  }, []);

  const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <>
        <div className={`slider-arrow slider-prev-arrow ${className}`} onClick={onClick}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
      </>
    );
  };

  const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={`slider-arrow slider-next-arrow ${className}`} onClick={onClick}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    );
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Slide every 3 seconds
    arrows: false,
    // centerMode: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <>
      <Slider {...settings} >
        <div className='background-slider-1 '>
          <h1 className='text-dark m-5 pt-5 mt-5' data-aos="zoom-in" data-wow-delay="0.1s">Ethicalcure-Pharma</h1>
          <p className='w-50  text-dark m-5' data-aos="zoom-in" data-wow-delay="0.1s">"Ethicalcure-Pharma" does not appear to be a widely recognized term or entity in the pharmaceutical industry or any other notable field. It's possible that "Ethicalcure-Pharma" could be a fictional or niche term specific to a certain context or organization that emerged after my last training data.</p>
          <div className='d-flex justify-contain-center m-5' data-aos="zoom-up" data-wow-delay="0.1s">
            <div>
              <Link to="/contact"> <button className='btn btn-primary m-2'>Contact</button></Link>
            </div>
            <div>
              <Link to="/about"> <button className='btn btn-primary m-2'>About US</button></Link>
            </div>
          </div>
        </div>
        <div className='background-slider-2 ' >
          <h1 className='text-dark m-5 pt-5 mt-5' data-aos="zoom-in" data-wow-delay="0.1s">Ethicalcure-Pharma</h1>
          <p className='w-50 text-dark m-5' data-aos="zoom-in" data-wow-delay="0.1s">"Ethicalcure-Pharma" does not appear to be a widely recognized term or entity in the pharmaceutical industry or any other notable field. It's possible that "Ethicalcure-Pharma" could be a fictional or niche term specific to a certain context or organization that emerged after my last training data.</p>
          <div className='d-flex justify-contain-center m-5' data-aos="zoom-up" data-wow-delay="0.1s">
            <div>
              <Link to="/contact"> <button className='btn btn-primary m-2'>Contact</button></Link>
            </div>
            <div>
              <Link to="/about"> <button className='btn btn-primary m-2'>About US</button></Link>
            </div>
          </div>
        </div>
        {/* <img height={500} className="position-top" src="saveDr.jpeg" alt="" />
        <img height={500} className="position-top" src="medicine.jpeg" /> */}
      </Slider>

    </>
  );
};

export default MySlider;
