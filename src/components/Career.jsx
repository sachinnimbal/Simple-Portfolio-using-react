export default function Career() {
  return (
    <>
      <div id="education">
        <div className="container">
          <div className="label-container">
            <h1 className="title">Career Profile</h1>
          </div>
          <div className="education-section">
            <div className="edu">
              <h3>
                <i className="fa fa-graduation-cap" /> Education
              </h3>
              <ul>
                <li>
                  <span>Postgraduate</span>
                  <small className="year">20XX - 20XX</small>
                  <small className="college">Demo University, CityName</small>
                </li>
                <li>
                  <span>Undergraduate</span>
                  <small className="year">20XX - 20XX</small>
                  <small className="college">Demo University, CityName</small>
                </li>
              </ul>
              <ul>
                <li>
                  <span>Class 12</span>
                  <small className="year">20XX - 20XX</small>
                  <small className="college">
                    College Name, CityName
                  </small>
                </li>
                <li>
                  <span>Class 10</span>
                  <small className="year">20XX - 20XX</small>
                  <small className="college">
                    School Name, CityName
                  </small>
                </li>
              </ul>
            </div>
            <div className="edu">
              <h3>
                <i className="fa fa-briefcase" /> Work Experience
              </h3>
              <ul>
                <li>
                  <span>Job Title Here</span>
                  <small className="year">20XX - Present</small>
                  <small className="college">Company Name, CityName</small>
                </li>
                <li>
                  <span>Previous Job Title</span>
                  <small className="year">20XX - 20XX</small>
                  <small className="college">
                    Company Name, CityName
                  </small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
