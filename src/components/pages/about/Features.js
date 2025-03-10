const Features = () => {
  // Define an array of feature objects
  const features = [
    {
      icon: "flaticon-security",
      title: "Voices of Customers and Stakeholders",
    },
    {
      icon: "flaticon-keywording",
      title: "Expectations -> Measurable Requirements",
    },
    {
      icon: "flaticon-investment",
      title: "Identify Control and Noise Factors",
    },
    {
      icon: "flaticon-keywording",
      title: "Predictive Engineering",
    },
    {
      icon: "flaticon-investment",
      title: "Flawless Launches",
    },
  ];

  return (
    <>
      {features.map((feature, index) => (
        <div className="list-one d-flex align-items-center justify-content-center mb30" key={index}>
          <span className={`list-icon flex-shrink-0 ${feature.icon}`} />
          <div className="list-content flex-grow-1 ml20">
            <h6 className="my-4">{feature.title}</h6>
          </div>
        </div>
      ))}
    </>
  );
};

export default Features;
