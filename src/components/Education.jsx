export default function Education() {
  return (
    <>
      <div id="education">
        <div className="container">
          <div className="label-container">
            <h1 className="title">Education History</h1>
          </div>
          <div className>
            <div className="education-section">
              <div className="edu">
                <h3>
                  <i className="fa fa-graduation-cap" /> Education
                </h3>
                <ul>
                  <li>
                    <span>MCA - Master of Computer Applications</span>
                    <small className="year">02/2022 - 09/2023</small>
                    <small className="college">
                      Sharnbasva University, Kalaburagi
                    </small>
                  </li>
                  <li>
                    <span>BCA - Bachelor of Computer Applications</span>
                    <small className="year">07/2018 - 09/2021</small>
                    <small className="college">
                      Sharnbasva University, Kalaburagi
                    </small>
                  </li>
                </ul>
                <ul>
                  <li>
                    <span>12th Board - PUC</span>
                    <small className="year">04/2015 - 05/2018</small>
                    <small className="college">
                      Nalanda Ind. PU College, Kalaburagi
                    </small>
                  </li>
                  <li>
                    <span>10th Board - SSLC</span>
                    <small className="year">04/2014 - 04/2015</small>
                    <small className="college">
                      Vinayaka Education Society, Shorapur
                    </small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
