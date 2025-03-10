import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import FormContact from "@/components/property/FormContact";
import PropertyVideo from "@/components/property/property-single-style/common/PropertyVideo";


import ProfessionalInfo from "@/components/property/ProfessionalInfo";
import ReviewBoxForm from "@/components/property/ReviewBoxForm";
// import ListingItemsContainer from "@/components/property/agency-single/ListingItems";

import SingleAgentCta from "@/components/property/agent-single/SingleAgentCta";
import AllReviews from "@/components/property/reviews";
import Image from "next/image";
import Link from "next/link";

import React from "react";

export const metadata = {
  title: "Agent Single || Homez - Real Estate NextJS Template",
};

const AgentSingle = ({params}) => {
  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Agent Single Section Area */}
      <section className="agent-single pt60">
        <div className="cta-agent bgc-thm-light mx-auto maxw1600 pt60 pb60 bdrs12 position-relative mx20-lg">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-7">
                <SingleAgentCta id={params.id}/>
                <div className="img-box-11 position-relative d-none d-xl-block">
                  <Image
                    width={120}
                    height={120}
                    className="img-1 spin-right"
                    src="/images/about/element-3.png"
                    alt="agents"
                  />
                  <Image
                    width={41}
                    height={11}
                    className="img-2 bounce-x"
                    src="/images/about/element-5.png"
                    alt="agents"
                  />
                  <Image
                    width={57}
                    height={49}
                    className="img-3 bounce-y"
                    src="/images/about/element-7.png"
                    alt="agents"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End cta-agent */}

        <div className="container">
          <div className="row wow fadeInUp" data-aos-delay="300">
            <div className="col-lg-12 pr40 pr20-lg">
              <div className="row">
                <div className="col-lg-12">
                  <div className="agent-single-details mt30 pb30 bdrb1">
                    <h6 className="fz17 mb30">About Eric Maass</h6>
                    <p className="text">
                      Dr. Eric Maass recently retired as Senior Director for for Medtronic Restorative Therapy Group. Eric was responsible for developing and leading the DRM (Design -Reliability - Strategy) program and focus for most of the company, and has been the chief architect for Medtronic’s DRM BB and MBB programs.
                    </p>
                    <p className="text">
                      Eric was recognized with Medtronic’s individual Star of Excellence award for 2012 and as a Technical Fellow in 2017.
                    </p>
                    <p className="text">
                      Eric joined Medtronic in October 2009, after 30 years with Motorola in roles ranging from Research and Development through Manufacturing, to Director of Operations for a $160 Million business and Director of Design and Systems Engineering for the Wireless group of Motorola SPS (now Freescale Semiconductor).
                    </p>
                    <p className="text">
                      Eric was a co-founder of the Six Sigma methods at Motorola, and had been the Lead Master Black Belt for DFSS at Motorola. His book, Applying DFSS to Software and Hardware Systems, provides clear step-by-step guidance on applying DFSS for developing innovative and compelling new products and technologies, while managing the business, schedule and technical risks.
                    </p>

                    <div className="agent-single-accordion">
                      <div
                        className="accordion accordion-flush"
                        id="accordionFlushExample"
                      >
                        <div className="accordion-item">
                          <div
                            id="flush-collapseOne"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingOne"
                            data-bs-parent="#accordionFlushExample"
                            style={{}}
                          >
                            <div className="accordion-body p-0">
                            <p className="text">
                              Eric received his Bachelor’s degree in Biological Sciences from the University of Maryland Baltimore County, his Master’s degree in Biomedical Engineering from Arizona State University and his PhD in Industrial and Systems Engineering from Arizona State University. He is currently an Adjunct Professor at Arizona State University and also serves as chairman of the Industrial Advisory Board for the NSF-Sponsored B.R.A.I.N. Industry/University consortium.
                            </p>
                            </div>
                          </div>
                          <h2
                            className="accordion-header"
                            id="flush-headingOne"
                          >
                            <button
                              className="accordion-button p-0 collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseOne"
                              aria-expanded="false"
                              aria-controls="flush-collapseOne"
                            >
                              Show more
                            </button>
                          </h2>
                        </div>
                      </div>
                  </div>
                </div>

                <h6 className="fz17 my30">Podcasts</h6>

                  <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 my30 ">
                    <div className="mb30">
                      <h4 className="title fz17 mb0">Flawlessly Launching Businesses featuring Eric Maass</h4>
                      <a href="https://bestsellerpublishing.org/eric-maass/">Best Seller Publishing - EPISODE 0096</a>
                    </div>
                    <div className="row">
                      <PropertyVideo videoId="WKOD764eebQ?si=XXz142_oG7uJrX92"/>
                    </div>
                  </div>

                  <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 ">
                    <div className="mb30">
                      <h4 className="title fz17 mb0">Getting Comfortable with a Probabilistic Way of Thinking about Risk</h4>
                      <a href="https://naveenagarwalphd.substack.com/p/risk-management-needs-probabilistic-thinking">Let's Talk Risk! With Naveen Agarwal, Phd</a>
                    </div>

                    <div className="row">
                      <PropertyVideo videoId="wNHYs_8ZdCs?si=cpTj0fC3NuU5OlfX"/>
                    </div>
                  </div>

                  <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 ">
                    <div className="mb30">
                      <h4 className="title fz17 mb0">Getting Comfortable with a Probabilistic Way of Thinking about Risk</h4>
                      <a href="https://are-you-happy.captivate.fm/episode/eric-maass">Are You Happy Business Podcast Featuring Eric Maass</a>
                    </div>

                    <div className="row">
                      <div className=" rounded-lg overflow-hidden">
                        <iframe
                          className="w-full h-full"
                          frameBorder="0"
                          scrolling="no"
                          allow="clipboard-write"
                          seamless
                          src="https://player.captivate.fm/episode/d3f181f4-4717-4e9d-a1cd-62b1ceed2c31"
                        ></iframe>
                      </div>
                      
                    </div>
                  </div>
                </div>

                 
               
              </div>
              {/* End .row */}

              {/* <ListingItemsContainer/> */}
              {/* <div className="row">
                <div className="col-lg-12">
                  <AllReviews />


                  <div className="bsp_reveiw_wrt">
                    <h6 className="fz17">Leave A Review</h6>
                    <ReviewBoxForm />
                  </div>

                </div>
              </div> */}
            </div>
            {/* End .col-lg-8 */}

            {/* <div className="col-lg-4">
              <div className="agent-single-form home8-contact-form default-box-shadow1 bdrs12 bdr1 p30 mb30-md bgc-white position-relative">
                <h4 className="form-title mb25">Contact Form</h4>
                <FormContact />
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* End Agent Single Section Area */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default AgentSingle;
