import React from "react";
// import AppWidget from "./AppWidget";
import Image from "next/image";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="our-cta3 pb100 pt60-md pb60-md mb60">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-xl-6 d-none d-xl-block">
            <div className="">
              <Image
                width={624}
                height={497}
                src="/images/about/mobile-img-1.jpg"
                alt="mobile"
              />
            </div>
          </div>
          {/* End col-lg-5 */}

          <div className="col-lg-7 col-xl-5 offset-xl-1">
            <div className="cta-style5">
              <span className="app-tag mb25">Who we are</span>
              <h2 className="cta-title">Founder - Dr. Eric Maass</h2>
              <p className="cta-text mb20">
                Dr. Eric Maass recently retired as Senior Director for for Medtronic Restorative Therapy Group. Eric was responsible for developing and leading the DRM (Design -Reliability - Strategy) program and focus for most of the company, and has been the chief architect for Medtronic’s DRM BB and MBB programs.
              </p>
              <p className="mb20">
                Eric was recognized with Medtronic’s individual Star of Excellence award for 2012 and as a Technical Fellow in 2017.
              </p>
              <p className="mb20">
                Eric joined Medtronic in October 2009, after 30 years with Motorola in roles ranging from Research and Development through Manufacturing, to Director of Operations for a $160 Million business and Director of Design and Systems Engineering for the Wireless group of Motorola SPS (now Freescale Semiconductor).
              </p>
              {/* <p className="mb20">
                Eric was a co-founder of the Six Sigma methods at Motorola, and had been the Lead Master Black Belt for DFSS at Motorola. His book, Applying DFSS to Software and Hardware Systems, provides clear step-by-step guidance on applying DFSS for developing innovative and compelling new products and technologies, while managing the business, schedule and technical risks.
              </p>
              <p className="mb20">
              Eric received his Bachelor’s degree in Biological Sciences from the University of Maryland Baltimore County, his Master’s degree in Biomedical Engineering from Arizona State University and his PhD in Industrial and Systems Engineering from Arizona State University. He is currently an Adjunct Professor at Arizona State University and also serves as chairman of the Industrial Advisory Board for the NSF-Sponsored B.R.A.I.N. Industry/University consortium.
              </p> */}

              <Link href="/founder" className="ud-btn btn-thm">
                Read more
                <i className="fal fa-arrow-right-long" />
              </Link>
             
              {/* <AppWidget /> */}
            </div>
          </div>
          {/* End col-lg-7 */}
        </div>
        {/* End .row */}
      </div>
    </section>
  );
};

export default Cta;
