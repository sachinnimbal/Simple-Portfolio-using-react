import Profile from "../images/profile-img.jpg";

export default function About() {
  return (
    <>
      <div id="about">
        <div className="container">
          <div className="label-container">
            <h1 className="title">About Me</h1>
          </div>
          <div className="blurred">
            <div className="bio-section">
              <div className="img-container">
                <img src={Profile} alt="Sachin Nimbal" />
              </div>
              <div className="bio">
                <h1>Sachin Nimbal</h1>
                <p>
                  I am a passionate Full Stack Web Developer and an MCA graduate
                  from Sharnbasva University with a BCA background. I have
                  proficiency in Java, SQL, etc, and my expertise spans the
                  complete web development cycle. Beyond these technologies, I
                  am a quick learner capable of mastering new technology stacks
                  as needed. I excel in teamwork, creativity, and leadership,
                  and have a keen interest in photography and outdoor
                  activities. Fluent in Kannada, English, and Hindi, I am
                  actively seeking job opportunities where I can contribute to
                  organizational success through continuous professional growth.
                </p>
                <div className="link-chips">
                  <a
                    className="chip"
                    href="https://github.com/sachinnimbal/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                  <a
                    className="chip"
                    href="https://www.linkedin.com/in/sachin-nimbal/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Linkedin
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
