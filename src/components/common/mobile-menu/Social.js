const Social = () => {
  const socialLinks = [
    {
      id: 1,
      iconClass: "fab fa-facebook-f",
      href: "https://www.facebook.com/eric.maass.79",
    },
    {
      id: 4,
      iconClass: "fab fa-linkedin-in",
      href: "https://www.linkedin.com/in/eric-maass-9304a3/",
    },
  ];

  return (
    <>
      {socialLinks.map((link) => (
        <a className="me-3" href={link.href} key={link.id}>
          <i className={link.iconClass}></i>
        </a>
      ))}
    </>
  );
};

export default Social;
