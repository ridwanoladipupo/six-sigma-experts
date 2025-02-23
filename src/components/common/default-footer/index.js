import Image from "next/image";
import Link from "next/link";
import ContactMeta from "./ContactMeta";
// import AppWidget from "./AppWidget";
import Social from "./Social";
import Subscribe from "./Subscribe";
import MenuWidget from "./MenuWidget";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <>
      <div className="container ">
        
            <div className=" mb-4 mb-lg-5 align-items-center d-flex justify-content-between">
        
                <Link className="footer-logo" href="/">
                  <Image
                    width={138}
                    height={44}
                    className="mb40"
                    src="/images/logo.png"
                    alt=""
                  />
                </Link>
                <ContactMeta />
                <div className="social-widget">
                  <h6 className="text-white mb20">Follow us on social media</h6>
                  <Social />
                </div>
        
            </div>
      </div>

      <Copyright />
      {/* End copyright */}
    </>
  );
};

export default Footer;
