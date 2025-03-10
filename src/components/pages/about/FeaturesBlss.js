const Features = () => {
  // Define an array of feature objects
  const features = [
    {
      icon: "flaticon-user",
      title: "Leverage the Honest History of Lean Six Sigma",
    },
    {
      icon: "flaticon-new-tab",
      title: "Integrate Lean and Six Sigma",
    },
    {
      icon: "flaticon-security",
      title: "Optimize Manufacturing Metrics (OptMM)",
    },
    {
      icon: "flaticon-discovery",
      title: "Predict and Optimize Business / Financial Results",
    },
    {
      icon: "flaticon-review",
      title: "Optimize Yield, Quality and Reliability - Model Yield comprehensively; Optimize Capability; Minimize the Probability of Defects and Failures; Minimize Customer Complaints",
    },
    {
      icon: "flaticon-review",
      title: "Co-Optimize Quality, Lead Time, Throughput, On Time Delivery and Cost",
    },
    {
      icon: "flaticon-review",
      title: "Success Stories",
    }
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
