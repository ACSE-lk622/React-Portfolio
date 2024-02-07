const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/kuo-yen-huang-8ba4a5154/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="./linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/iannnhh/?hl=en"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="./instagram.png" />
      </a>
    </div>
  );
};
export default SocialMediaIcons;
