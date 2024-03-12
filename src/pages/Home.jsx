import "swiper/css";
import "./Home.css";
import "swiper/css/navigation";
import MySlider from "../components/MySlider";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {

  useEffect(() => {
    AOS.init({ duration: 1400 });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="slider-container ">
        <MySlider />
      </div>
      <div className="container-fluid p-5 mb-5 mt-4" data-aos="flip-left" data-wow-delay="0.1s">
        <div className="card p-3 b-none" data-aos="zoom-in">
          <div className=" g-5 align-items-center slider-img">
            <div className="wow fadeIn abouts" data-wow-delay="0.1s">
              <img className="img-fluid" src="https://img.freepik.com/free-photo/pharmacy-industry-woman-worker-protective-clothing-operating-production-tablets-sterile-working-conditions_645730-408.jpg?size=626&ext=jpg&ga=GA1.1.1884802103.1674757283&semt=sph" />
            </div>
            <div
              className="col-lg-6 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="home-head rounded-pill  px-3 mb-3">
                Business Area
              </div>
              <h1 className="heading-about"> A Leader in Pharmaceutical Innovation</h1>
              <p className="home-para">Ethicalcure is a leading pharmaceutical company known for its commitment to innovation and excellence. Our research-driven approach enables us to develop advanced and effective healthcare solutions that improve patient outcomes. With a focus on safety, quality, and sustainability, we strive to create a healthier world for all. Join us as we continue to push the boundaries of medical science and bring hope to millions"</p>
            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid p-5 mb-5 mt-4" data-aos="flip-right" data-wow-delay="0.1s">
        <div className="card p-3" data-aos="zoom-in">
          <div className="slider-img g-5 align-items-center">
            <div
              className="col-lg-6 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="home-head rounded-pill px-3 mb-3">
                Manufacturing
              </div>
              <h1 className="heading-about">Precision Pharma Manufacturing Solutions for Tomorrow's Therapies</h1>
              <p className="home-para">"Welcome to the pinnacle of pharmaceutical manufacturing excellence. Our state-of-the-art facilities are dedicated to creating precision medications that empower the healing journey. With a commitment to quality and innovation, we ensure every dose is made with care, using the latest in technology and industry-leading standards. Discover the future of pharmaceutical manufacturing"</p>

            </div>
            <div className="wow fadeIn abouts" data-wow-delay="0.1s" data-aos="">
              <img className="img-fluid" src="https://img.freepik.com/free-photo/revision-two-pharmacists-making-medicines-revision-drugstore_259150-57968.jpg?size=626&ext=jpg&ga=GA1.1.1884802103.1674757283&semt=sph" />

            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid p-5 mb-5 mt-4" data-aos="zoom-in" data-wow-delay="0.1s">
        <div className="card p-3" data-aos="zoom-in">
          <div className=" g-5 align-items-center slider-img">
            <div className="  wow fadeIn" data-wow-delay="0.1s" data-aos="fade-right">
              <div className="wow fadeIn abouts" data-wow-delay="0.1s" data-aos="fade-right">
                <img className="img-fluid" src="https://img.freepik.com/premium-photo/medicine-capsules-flying-falling-out-glass-container_75891-402.jpg?size=626&ext=jpg&ga=GA1.1.1884802103.1674757283&semt=sph" />
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="home-head rounded-pill  px-3 mb-3">
                Research & Development
              </div>
              <h1 className="heading-about">R&D Reimagined: A New Era at Ethicalcure Pharmaceuticals</h1>
              <p className="home-para">"  Ethicalcure Pharmaceuticals' cutting-edge R&D is at the forefront of healthcare innovation. Our dynamic team drives breakthroughs in drug discovery, refining therapeutics to bring life-changing solutions to patients. We're redefining healthcare by blending novel science, data, and empathy. Join us as we forge a path to healthier futures worldwide."</p>
            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid p-5  mb-5 mt-4" data-aos="zoom-in" data-wow-delay="0.1s">
        <div className="card p-3" data-aos="zoom-in">
          <div className="slider-img g-5 align-items-center">
            <div
              className="col-lg-6 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="home-head rounded-pill px-3 mb-3">
                About Us
              </div>
              <h1 className="heading-about"> Innovation for a Healthier Tomorrow</h1>
              <p className="home-para"> "Welcome to Ethicalcure Pharmaceuticals, where innovation meets compassion. Our dedication to advancing healthcare drives us to develop cutting-edge medications and therapies to improve patient outcomes. Our commitment to excellence extends to every aspect of our business, from research and development to manufacturing and distribution. We prioritize integrity, transparency, and customer satisfaction in all our endeavors. Our mission is to make a positive impact on global health by delivering high-quality, affordable medications that change lives. Join us on our journey to create a healthier world, one innovation at a time. Welcome to Ethicalcure Pharmaceuticals, where we are committed to making miracles happen."</p>

            </div>
            <div className="wow fadeIn abouts" data-wow-delay="0.1s" data-aos="">
              <img className="img-fluid" height={"344px"} width={"612px"} src="https://img.freepik.com/free-vector/science-lab-workplace-composition_1284-16218.jpg?size=626&ext=jpg&ga=GA1.1.1884802103.1674757283&semt=sph" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
