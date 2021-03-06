import { Link } from "react-router-dom"
import "../Components/AboutMe.css"
import AboutMeContact from "../Components/AboutMeContact"
import AboutMeCv from "../Components/AboutMeCv"
import AboutMeInfo from "../Components/AboutMeInfo"
import GoogleMap from "../Components/GoogleMap"

function AboutMe() {
  return (
    <div className="font-family aboutMeBackground">
      <div className="container ">
        <div className="row">
          <div className="col-sm-12 my-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item nav-link">
                  <Link className="link-decoration font-family" to="/">
                    Home
                  </Link>
                </li>
                <li
                  className="breadcrumb-item active nav-link active-breadcrumb font-family"
                  aria-current="page"
                >
                  About me
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 p-3 font-family">
            <h1>About Me</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <nav>
              <div
                className="nav nav-tabs font-family"
                id="nav-tab"
                role="tablist"
              >
                <button
                  className="nav-link about-me-tab active"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  Info
                </button>
                <button
                  className="nav-link about-me-tab"
                  id="nav-address-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-address"
                  type="button"
                  role="tab"
                  aria-controls="nav-address"
                  aria-selected="false"
                >
                  CV
                </button>
                <button
                  className="nav-link about-me-tab"
                  id="nav-summary-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-summary"
                  type="button"
                  role="tab"
                  aria-controls="nav-summary"
                  aria-selected="false"
                >
                  Contact
                </button>
              </div>
            </nav>
            <div className="tab-content pb-4 px-2" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <AboutMeInfo />
              </div>
              <div
                className="tab-pane fade"
                id="nav-address"
                role="tabpanel"
                aria-labelledby="nav-address-tab"
              >
                <AboutMeCv />
              </div>
              <div
                className="tab-pane fade"
                id="nav-summary"
                role="tabpanel"
                aria-labelledby="nav-summary-tab"
              >
                <AboutMeContact />
              </div>
            </div>
          </div>
        </div>
        <div className="row font-family pb-4">
          <div className="col-md-12 p-3">
            <h2>Contacts</h2>
          </div>
          <div className="col-sm-12 col-md-6">
            <GoogleMap />
          </div>
          <div className="col-sm-12 col-md-6">
            <ul className="list-unstyled">
              <li>
                <strong>Address:</strong>
              </li>
              <li>
                <small>Nomet??u iela 29, ??genskalns, R??ga.</small>
              </li>
              <li>
                <strong>Email:</strong>
              </li>
              <li>
                <small>
                  <a
                    className="email-link-decoration"
                    href="foto-valters@inbox.lv"
                  >
                    foto-valters@inbox.lv
                  </a>
                </small>
              </li>
              <li>
                <strong>Phone:</strong>
              </li>
              <li>
                <small>+371 26671517</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
