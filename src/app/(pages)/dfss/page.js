// import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/common/DefaultHeader";
import Partner from "@/components/common/Partner";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import Features from "@/components/pages/about/Features";
// import Agents from "@/components/pages/about/Agents";
// import Features from "@/components/pages/about/Features";
// import FunFact from "@/components/pages/about/FunFact";
// import Mission from "@/components/pages/about/Mission";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About  || Homez - Real Estate NextJS Template",
};

const AboutSixSigma = () => {
  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Breadcrumb Sections */}
      <section className="breadcumb-section2 p-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h1 className="title">DFSS</h1>
                <div className="breadcumb-list">
                  <a href="#">Home</a>
                  <a href="#">DFSS</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcrumb Sections */}

      {/* Our About Area */}
      <section className="our-about pb0">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <div className="col-lg-6">
              <h2>
                Aspects of Design For {" "}
                <br className="d-none d-lg-block" /> Six Sigma
              </h2>
            </div>
            <div className="col-lg-6">
              <p className="text mb20">
                Share a solid understanding of requirements, and select a compelling, superior concept that meets those requirements.
              </p>
              <p className="text mb20">
                Flow down prioritized requirements (critical parameters) to the subsystems and components, both qualitatively (critical parameter flow down) and quantitatively (tolerance allocation), and align with suppliers and manufacturing.
              </p>
              <p className="text mb20">
                Use predictive engineering and optimization methods to ensure the components, subsystems and product are robust to processing and use conditions, and are predicted to meet or exceed expectations.
              </p>
              <p className="text mb20">
                Verify and control so that the new product is capable of fulfilling requirements under normal and stressful use conditions, is manufacturable with high, predictable yield without rework, and with high reliability
              </p>
              <div className="row">
                {/* <Mission /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    

      {/* Our Partners */}
      <section className="our-partners">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" data-aos="fade-up">
              <div className="main-title text-center">
                <h6>Current Clients</h6>
              </div>
            </div>
            <div className="col-lg-12 text-center">
              <div
                className="dots_none nav_none"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Partner />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Our Partners */}

      {/* Our CTA */}
      {/* <CallToActions /> */}
      {/* Our CTA */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default AboutSixSigma;
