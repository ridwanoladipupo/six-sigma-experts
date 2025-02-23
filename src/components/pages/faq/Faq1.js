const Faq1 = () => {
  const faqItems = [
    {
      id: "headingOne",
      question: "What is Six Sigma, and how does it benefit my company?",
      answer:
        "Six Sigma is a data-driven methodology focused on improving processes, reducing defects, and ensuring quality. It helps companies enhance efficiency, reduce costs, and improve customer satisfaction.",
    },
    {
      id: "headingTwo",
      question: "What industries can benefit from Six Sigma training?",
      answer:
        "Six Sigma principles apply to various industries, including manufacturing, healthcare, finance, IT, and service-based businesses. Any organization that seeks to optimize processes and improve quality can benefit.",
    },
    {
      id: "headingThree",
      question: "What is Design for Six Sigma (DFSS)?",
      answer:
        "DFSS is a methodology used to develop new products and processes that meet customer requirements from the start. It emphasizes predictive engineering, optimization, and rigorous verification to ensure high quality and reliability.",
    },
    {
      id: "headingFour",
      question: "How does Six Sigma ensure getting it right the first time?",
      answer:
        "Six Sigma focuses on understanding customer requirements, optimizing processes, and using data-driven decision-making to minimize errors and defects, ensuring high-quality outcomes from the beginning.",
    },
    {
      id: "headingFive",
      question: "What types of training do you offer?",
      answer:
        "We offer comprehensive Six Sigma training programs, including Lean Six Sigma certifications, Design for Six Sigma (DFSS), and specialized courses tailored to specific industries and company needs.",
    },
    {
      id: "headingSix",
      question: "Who should enroll in Six Sigma training?",
      answer:
        "Employees at all levels can benefit from Six Sigma training, including executives, managers, engineers, process improvement teams, and frontline staff involved in daily operations.",
    },
    {
      id: "headingSeven",
      question: "How do Six Sigma methods align with suppliers and manufacturing?",
      answer:
        "Our approach ensures critical parameters are properly allocated across subsystems, components, and suppliers, enabling seamless production with high yield, minimal rework, and reliable performance.",
    },
    {
      id: "headingEight",
      question: "Can Six Sigma improve our product development process?",
      answer:
        "Yes! Six Sigma methodologies, including DFSS, help streamline product development by identifying key requirements, optimizing design, and ensuring manufacturability, reducing costly revisions.",
    },
    {
      id: "headingNine",
      question: "How do you verify and control product quality using Six Sigma?",
      answer:
        "We use predictive modeling, statistical analysis, and rigorous testing to ensure products meet or exceed performance requirements under normal and stressful conditions.",
    },
    {
      id: "headingTen",
      question: "How can my company get started with Six Sigma training?",
      answer:
        "Simply reach out to us through our contact page, and we will discuss your needs, recommend the right training program, and help you integrate Six Sigma into your company’s processes.",
    },
  ];

  return (
    <div className="accordion" id="accordionExample">
      {faqItems.map((item, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header" id={item.id}>
            <button
              className={`accordion-button ${index === 2 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index + 1}`}
              aria-expanded={index === 2 ? "true" : "false"}
              aria-controls={`collapse${index + 1}`}
            >
              {item.question}
            </button>
          </h2>
          <div
            id={`collapse${index + 1}`}
            className={`accordion-collapse collapse ${
              index === 0 ? "show" : ""
            }`}
            aria-labelledby={item.id}
            data-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq1;
