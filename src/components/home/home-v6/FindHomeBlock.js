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
      subtitle: "Automotive Electronics",
      text: "Get ready to upgrade vehicle systems with advanced electronics.",
    },
    {
      icon: "flaticon-bird-house",
      number: "03",
      subtitle: "Medical Electronics",
      text: "Get ready to improve healthcare with reliable medical technology.",
    },
    {
      icon: "flaticon-house-1",
      number: "04",
      subtitle: "Communications",
      text: "Get ready to stay connected with seamless comm. solutions.",
    },
  ];

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
