import { useEffect, useRef, } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import BreadCrumb from '../components/BreadCrumb';

const Manufacturing = () => {
    const listRefs = useRef([]);

    useEffect(() => {
        AOS.init({ duration: 1400 });
    }, []);

    useEffect(() => {
        if (listRefs.current) {
            ""
        }
        const observers = [];

        listRefs.current.forEach((listRef) => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const listItems =
                            listRef.current.querySelectorAll(".list-group-item");
                        listItems.forEach((item) => {
                            item.classList.add("list-item-animation");
                        });
                        observer.unobserve(entry.target);
                    }
                });
            });

            if (listRef.current) {
                observer.observe(listRef.current);
            }
            observers.push(observer);
        });
    }, []);
    return (
        <>
            <BreadCrumb page="Manufacturing" />

            <div className=''>
                {/* <section className="innerBanner">
                    <picture>
                        <img
                            className="responsive-image"
                            src="https://ajantapharma.com/assets/frontend/images/inner_banner/business_areas.jpg"
                            alt="Business Areas"
                            style={{ maxWidth: '100%'}}
                        />
                    </picture>

                    <div className="container">
                        <div className="innerpageTitle">
                            <div className="row h-100">
                                <div className="col-md-6 align-self-center aos-init aos-animate" >
                                    <h1 data-aos="fade-right">Manufacturing</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* <div className='Manufacturing-head'>
                    <h1 className='manufacturing-heading'>Manufacturing</h1>
                </div> */}

                <div className="container-fluid py-5" data-aos="zoom-in">
                    <div>
                        <div className=" g-5 align-items-center slider-img">
                            <div className="">
                                <div className="">
                                    <img width="1200px" style={{ borderRadius: "15px 50px", boxShadow: "-5px -5px 9px rgba(184, 184, 184, 0.45) 5px 5px 9px rgba(78, 88, 104, 0.3)" }} className="img-fluid" src="https://img.freepik.com/free-photo/scientist-putting-blood-sample-from-test-tube-with-micropipette-petri-dish-analysing-chemical-reaction_482257-487.jpg?size=626&ext=jpg&ga=GA1.1.1884802103.1674757283&semt=sph" />
                                </div>
                            </div>
                            <div

                            >
                                {/* <div className="home-head rounded-pill  px-3 mb-3">
                Business Area
              </div> */}
                                <h1 className="Manu-about" data-aos="zoom-in">Transforming Healthcare Through Advanced Pharmaceutical Manufacturing</h1>
                                <p className="Manu-para">"Description: Harnessing cutting-edge technology and unparalleled expertise, our pharma manufacturing facilities are at the forefront of healthcare innovation. From small molecule synthesis to biologics production, every step is meticulously planned and executed to ensure the highest standards of safety, efficacy, and sustainability. Explore the next generation of pharmaceutical manufacturing solutions that are shaping the future of healthcare."</p>


                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid p-5" data-aos="zoom-in">
                    <div style={{ background: "#AFEEEE", paddingLeft: "20px", paddingTop: "30px", paddingBottom: "30px", borderLeft: "4px solid green" }}>
                        <div className="  wow fadeIn p-2" data-wow-delay="0.5s" style={{ fontSize: "19px", fontWeight: "500" }}>
                            Our team thrives in an environment conducive to excellence and innovation, which is critical to advancing complex and challenging first-time combination products. The R&D team actively engages in projects from concept to Phase IV studies, as well as monitoring market acceptance and post-launch status for comprehensive insights.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Manufacturing