import Image from "next/image";
import Link from "next/link";

const About = () => {
  const featureList = [
    "Expert Training & Support",
    "Improve Efficiency & Quality",
    "Customized Solutions for Your Business",
  ];
  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-xl-4">
          <div
            className="about-box-1 pe-4 mt100 mt0-lg mb30-lg "
            data-aos="fade-left"
          >
            <h2 className="title mb30">
              About Six Sigma Experts
            </h2>
            <p className="text mb25 fz15">
              Product Development and Process Optimization - Getting it Right the First time
            </p>
            <div className="list-style1 mb50">
              <ul>
                {featureList.map((list, index) => (
                  <li key={index}>
                    <i className="far fa-check text-white bgc-dark fz15"></i>
                    {list}
                  </li>
                ))}
              </ul>
            </div>
            <Link href={`/six-sigma-experts`} className="ud-btn btn-white2">
              Learn More<i className="fal fa-arrow-right-long"></i>
            </Link>
          </div>
        </div>
        {/* End .col-6 */}

        <div className="col-lg-9 col-xl-8 col-xxl-7 offset-xxl-1">
          <div className="position-relative mb35 mb0-sm" data-aos="fade-right">
            <div className="img-box-1 list-inline-item me-0">
              <Image
                width={270}
                height={350}
                className="img-1"
                src="/images/about/about-1.jpg"
                alt="about"
              />
            </div>
            <div className="img-box-2 list-inline-item me-0">
              <Image
                width={370}
                height={520}
                className="img-1"
                src="/images/about/about-2.jpg"
                alt="about"
              />
            </div>
            <div className="img-box-3">
              <Image
                width={276}
                height={146}
                className="img-1 bounce-y"
                src="/images/about/about-1.png"
                alt="about"
              />
            </div>
            <div className="img-box-4">
              <Image
                width={193}
                height={193}
                className="img-1 spin-right"
                src="/images/about/element-1.png"
                alt="about"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
