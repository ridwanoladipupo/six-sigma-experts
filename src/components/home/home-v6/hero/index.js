import AdvanceFilterModal from "@/components/common/advance-filter";
import HeroContent from "./HeroContent";
import Category from "./Category";

const Hero = () => {
  return (
    <>
      <div className="inner-banner-style6">
        <h2 className="hero-title text-white animate-up-1">
        Develop Robust Products
         <br className="d-none d-xl-block" />
         Using Design for Six Sigma
        </h2>
        <p className="hero-text text-white fz15 animate-up-2">
        Customized Consulting, Training and Coaching for Technology Companies
        </p>
        {/* <HeroContent /> */}
      </div>
      {/* End Hero content */}

      {/* <!-- Advance Feature Modal Start --> */}
      {/* <div className="advance-feature-modal">
        <div
          className="modal fade"
          id="advanceSeachModal"
          tabIndex={-1}
          aria-labelledby="advanceSeachModalLabel"
          aria-hidden="true"
        >
          <AdvanceFilterModal />
        </div>
      </div> */}
      {/* <!-- Advance Feature Modal End --> */}
      {/* <p className="h6 fw600 text-white fz14 animate-up-4 my-3">
        Or browse featured categories:
      </p> */}
      <Category />
    </>
  );
};

export default Hero;
