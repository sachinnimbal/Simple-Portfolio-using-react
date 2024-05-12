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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, unde ullam corrupti labore earum recusandae voluptate, optio delectus, architecto nulla eius quae modi quas fugiat rerum dignissimos dolor quod id.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, unde ullam corrupti labore earum recusandae voluptate, optio delectus, architecto nulla eius quae modi quas fugiat rerum dignissimos dolor quod id.
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
