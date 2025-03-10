import React from "react";

const FindHomeBlock = () => {
  const blocks = [
    {
      icon: "flaticon-search-1",
      number: "01",
      subtitle: "Displays",
      text: "Get ready to enhance visual performance with cutting-edge display solutions.",
    },
    {
      icon: "flaticon-chat",
      number: "02",
      subtitle: "Microchips",
      text: "Get ready to upgrade vehicle systems with advanced electronics.",
    },
    {
      icon: "flaticon-bird-house",
      number: "03",
      subtitle: "Medical Devices",
      text: "Get ready to improve healthcare with reliable medical technology.",
    },
    {
      icon: "flaticon-house-1",
      number: "04",
      subtitle: "Communication Systems",
      text: "Get ready to stay connected with seamless comm. solutions.",
    },
    {
      icon: "flaticon-house-1",
      number: "04",
      subtitle: "Processes",
      text: "Get ready to stay connected with seamless comm. solutions.",
    },
  ];

  // const blocks1 = [
  //   { 
  //     icon: "flaticon-search-1",
  //     number: "01",
  //     subtitle: "Voices of Customers and Stakeholders",
  //     text: "Get ready to enhance visual performance with cutting-edge display solutions.",
  //   },
  //   {
  //     icon: "flaticon-chat",
  //     number: "02",
  //     subtitle: "Expectations à Measurable Requirements",
  //     text: "Get ready to upgrade vehicle systems with advanced electronics.",
  //   },
  //   {
  //     icon: "flaticon-bird-house",
  //     number: "03",
  //     subtitle: "Identify Control and Noise Factors",
  //     text: "Get ready to improve healthcare with reliable medical technology.",
  //   },
  //   {
  //     icon: "flaticon-house-1",
  //     number: "04",
  //     subtitle: "Predictive Engineering",
  //     text: "Get ready to stay connected with seamless comm. solutions.",
  //   },
  //   {
  //     icon: "flaticon-house-1",
  //     number: "04",
  //     subtitle: "Flawless Launches",
  //     text: "Get ready to stay connected with seamless comm. solutions.",
  //   },
  // ];

  return (
    <>
      {blocks.map((block, index) => (
        <div className="col-sm-6" key={index}>
          <div className="iconbox-style6">
            <span className={`icon ${block.icon}`} />
            <h3 className="title mb-1">{block.number}</h3>
            <h6 className="subtitle">{block.subtitle}</h6>
            <p className="iconbox-text">{block.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default FindHomeBlock;
