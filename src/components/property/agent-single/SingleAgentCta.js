import agents from "@/data/agents";
import Image from "next/image";
import React from "react";



const SingleAgentCta = ({id}) => {

  const data = agents.filter((elm) => elm.id == id)[0] || agents[0];



  const agentData = {
    name: data.name,
    company: "Six Sigma Experts & Stoched",
    social: [
      { icon: "fab fa-linkedin-in", link: "https://www.linkedin.com/in/eric-maass-9304a3/" },
      { icon: "fab fa-facebook-f", link: "https://www.facebook.com/eric.maass.79" },
      { icon: "fab fa-twitter", link: "#" },
    ],
  };
  return (
    <>
      <div className="agent-single d-sm-flex align-items-center">
        <div className="single-img mb30-sm">
          <Image
            width={172}
            height={172}
            style={{borderRadius:'50%',objectFit:'cover'}}
            src={data.image}
            alt="agents"
          />
        </div>
        {/* End single image */}
        <div className="single-contant ml30 ml0-xs">
          <h2 className="title mb-0">{agentData.name}</h2>
          <p className="fz15">
            Founder <b>{agentData.company}</b>
          </p>
          <div className="agent-social">
            {agentData.social.map((socialItem, index) => (
              <a key={index} className="mr20" href={socialItem.link}>
                <i className={socialItem.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleAgentCta;
