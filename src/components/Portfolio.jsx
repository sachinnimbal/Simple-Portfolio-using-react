import Food from "../images/ProjectImages/Food Delivery.png";
import Invoice from "../images/ProjectImages/Invoicing.png";
import SUK from "../images/ProjectImages/CIE Entry.png";
import CIE from "../images/ProjectImages/SUKApp.jpg";
import HOSTEL from "../images/ProjectImages/Hostel.png";

export default function Portfolio() {
  return (
    <>
      <div id="portfolio">
        <div className="container">
          <div className="label-container">
            <h1 className="title">Portfolio</h1>
          </div>
          <div className="portfolio-section">
            <div className="card">
              <div className="card-image-container">
                <img src={Food} alt="FOOD DELIVERY WEB APP" />
              </div>
              <h4>FOOD DELIVERY WEB APP</h4>
              <span>Java & SQL</span>
              <p>
                A Java MVC and MySQL-based platform for users to order food,
                rate restaurants.
              </p>
              <button
                className="chip source"
                onClick={() =>
                  window.open(
                    "https://github.com/sachinnimbal/Food-Delivery-Web-App",
                    "_blank"
                  )
                }
              >
                Github
              </button>
            </div>
            <div className="card">
              <div className="card-image-container">
                <img src={Invoice} alt="INVOICE MAKING WEB APP" />
              </div>
              <h4>INVOICE MAKING WEB APP</h4>
              <span>PHP</span>
              <p>
                A small invoicing application using a Bootstrap template, PHP
                and MySQL.
              </p>
              <button
                className="chip source"
                onClick={() =>
                  window.open(
                    "https://github.com/sachinnimbal/INVOICE-MAKING-WEB-APP",
                    "_blank"
                  )
                }
              >
                Github
              </button>
            </div>
            <div className="card">
              <div className="card-image-container">
                <img src={SUK} alt="SUK ANDROID APP" />
              </div>
              <h4>SUK ANDROID APP</h4>
              <span>Java & Firebase</span>
              <p>
                Developed using Java and Firebase to support learning and exam
                preparation.
              </p>
              <button
                className="chip source"
                onClick={() =>
                  window.open(
                    "https://github.com/sachinnimbal/SUKApp",
                    "_blank"
                  )
                }
              >
                Github
              </button>
            </div>
            <div className="card">
              <div className="card-image-container">
                <img src={CIE} alt="CIE ENTRY SYSTEM" />
              </div>
              <h4>CIE ENTRY SYSTEM</h4>
              <span>PHP</span>
              <p>
                Involved in the design and implementation of the user interface
                using HTML, CSS, and Bootstrap.
              </p>
              <button
                className="chip source"
                onClick={() =>
                  window.open("https://github.com/sachinnimbal/CIE", "_blank")
                }
              >
                Github
              </button>
            </div>
            <div className="card">
              <div className="card-image-container">
                <img src={HOSTEL} alt="HOSTEL MANAGEMENT SYSTEM" />
              </div>
              <h4>HOSTEL MANAGEMENT SYSTEM</h4>
              <span>VB.Net & MS Access</span>
              <p>
                Hostel Management System Project Using VB.Net 2010 & MS Access
                2007.
              </p>
              <button
                className="chip source"
                onClick={() =>
                  window.open(
                    "https://github.com/sachinnimbal/HMS-PROJECT-SKN",
                    "_blank"
                  )
                }
              >
                Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
