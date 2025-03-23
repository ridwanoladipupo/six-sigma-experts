import MobileMenu from "@/components/common/mobile-menu";
import Hero from "@/components/home/home-v6/hero";
// import Footer from "@/components/home/home-v6/footer";
import Footer from "@/components/common/default-footer";
import Header from "@/components/home/home-v6/Header";
import Image from "next/image";
import FindHomeBlock from "@/components/home/home-v6/FindHomeBlock";
import Cta from "@/components/home/home-v6/Cta";
import Agents from "@/components/home/home-v6/Agents";
import Pricing from "@/components/home/home-v6/Pricing";
import FeatureProperties from "@/components/home/home-v6/FeatureProperties";
import Testimonial from "@/components/home/home-v6/Testimonial";
import About from "@/components/home/home-v6/About";
import ExploreCities from "@/components/home/home-v6/ExploreCities";
import FeaturedListings from "@/components/home/home-v6/FeatuerdListings";
import Link from "next/link";
import Partner from "@/components/common/Partner";
import Faq1 from "@/components/pages/faq/Faq1";
import Faq2 from "@/components/pages/faq/Faq2";

export const metadata = {
  title: "Home v6 || Homez - Real Estate NextJS Template",
};

const Home_V6 = () => {
  return (
    <>
      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Home Banner Style V6 */}
      <section className="home-banner-style6 p0">
        <div className="home-style1">
          <div className="container">
            <div className="row">
              <div className="col-xl-10">
                <Hero />
              </div>
            </div>
          </div>
          {/* End .container */}
        </div>
      </section>
      {/* End Home Banner Style V6 */}

       {/* <!-- About Us --> */}
       <section className="pb40-md bgc-f7">
        <div className="container">
          <About />
        </div>
      </section>
      {/*  <!-- End About Us --> */}

      {/* Explore Apartment Home */}
      <section className="pb60 pb30-md">
        <div className="container">
          <div className="row">
            <div className="col-xl-6" data-aos="fade-up" data-aos-delay="100">
              <div className="about-box2">
                <h4 className="title">
                  Design for Six Sigma  <br className="d-none d-xl-block" /> (DFSS)
                </h4>
                <p className="text fz15">
                    Design for Six Sigma (DFSS) is a proactive and preventative process for developing robust products aligned with requirements traceable to the Voice of the Customer, using predictive engineering and anticipating and managing potential issues.{" "}
                  {/* <br className="d-none d-xl-block" /> limited time offer discounts. */}
                </p>
                <Link href="/dfss" className="ud-btn btn-thm">
                  Read more
                  <i className="fal fa-arrow-right-long" />
                </Link>
                {/* <Image
                  width={296}
                  height={318}
                  className="img-1 cover"
                  src="/images/about/home6-about-1.png"
                  alt="about"
                /> */}
              </div>
            </div>
            {/* End .col-6 */}

            <div className="col-xl-6" data-aos="fade-up" data-aos-delay="300">
              <div className="row">
                <FindHomeBlock />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Explore Apartment Home */}

       {/* Our CTA */}
       <Cta />
      {/* Our CTA */}

      {/* Featured Listings */}
      <section className="pt-0 pb80 pb30-md">
        <div className="container">
          <div className="row  justify-content-between align-items-center">
            <div className="col-auto">
              <div
                className="main-title"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2 className="title">Our Review</h2>
                <p className="paragraph">
                Read our take on key insights, experiences, and expertise—straight from us.
                </p>
              </div>
            </div>
            {/* End header */}

            <div className="col-auto mb30">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                  <button className="featured-prev__active swiper_button">
                    <i className="far fa-arrow-left-long" />
                  </button>
                </div>
                {/* End prev */}

                <div className="col-auto">
                  <div className="pagination swiper--pagination featured-pagination__active" />
                </div>
                {/* End pagination */}

                <div className="col-auto">
                  <button className="featured-next__active swiper_button">
                    <i className="far fa-arrow-right-long" />
                  </button>
                </div>
                {/* End Next */}
              </div>
              {/* End .col for navigation and pagination */}
            </div>
            {/* End .col for navigation and pagination */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-listing-slider">
                <FeaturedListings />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Featured Listings */}

      <section className="our-testimonial pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto" data-aos-delay="300ms">
              <div className="main-title text-center">
                <h2>Featured Books</h2>
                <p className="paragraph">
                Explore insightful books written by our founder, sharing expertise and experience.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="home6-listing-single-slider" data-aos="fade-up">
              <FeatureProperties />
            </div>
          </div>
        </div>
      </section>

      <section className="our-faq pb90 pt-0">
        <div className="container">
          <div className="row wow fadeInUp" data-wow-delay="300ms">
            <div className="col-lg-12">
              <div className="ui-content">
                <div className="main-title text-center">
                  <h2>FAQ</h2>
                  <p className="paragraph">
                    Find answers to common questions and get the information you need.
                  </p>
                </div>
                <div className="accordion-style1 faq-page mb-4 mb-lg-5">
                  <Faq1 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-partners pt0">
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

     

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">

        <Footer/>

      </section>
      {/* End Our Footer */}
    </>
  );
};

export default Home_V6;
