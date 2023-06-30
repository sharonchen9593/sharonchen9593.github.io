import AboutMeImg from "../images/selfie.jpg";
import Timeline from "./Timeline";

const AboutMe = () => {
  return (
    <div className="about-me">
      <div class="personal-info">
        <img src={AboutMeImg} className="selfie" />
        <h2>About Me</h2>
        <p className="description">
          <p>
            My passion for software engineering stems from my love for
            challenges. I've worked in many positions that have lacked to
            challenge me mentally and that is when I decided to pursue a career
            in software engineering. Studying part-time while working was not
            enough for me, and in May of 2017, I quit my job to study full-time.
          </p>
          <p>
            My current experience includes building full stack applications with
            React, Redux, and Angular for the front-end; along with NodeJS and
            Express with SQL or NoSQl databases for the back-end.
          </p>
        </p>
      </div>
      <Timeline />
    </div>
  );
};

export default AboutMe;
