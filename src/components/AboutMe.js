import AboutMeImg from "../images/selfie.jpg";
import Timeline from "./Timeline";

const AboutMe = () => {
  return (
    <div className="about-me">
      <div class="personal-info">
        <img src={AboutMeImg} className="selfie" />
        <h2>About Me</h2>
        <p className="description">
          Self-taught software engineer with a passion for frontend development.
        </p>
      </div>
      <Timeline />
    </div>
  );
};

export default AboutMe;
