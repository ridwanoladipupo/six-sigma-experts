const Features = () => {
  // Define an array of feature objects
  const features = [
    {
      icon: "flaticon-user",
      title: "Voices of Customers and Stakeholders",
    },
    {
      icon: "flaticon-new-tab",
      title: "Expectations -> Measurable Requirements",
    },
    {
      icon: "flaticon-security",
      title: "Identify Control and Noise Factors",
    },
    {
      icon: "flaticon-discovery",
      title: "Predictive Engineering",
    },
    {
      icon: "flaticon-review",
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
