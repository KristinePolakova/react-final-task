import SocialFollow from "./SocialFollow";

function Footer() {
  return (
    <footer className="footer py-2">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-9 p-3">
            <span className="text-muted font-family">
              &copy; 2022 Copyright: Kristīne Poļakova
            </span>
          </div>
          <div className="col-sm-12 col-md-3 p-2 justify-content-center d-flex">
            <ul>
              <SocialFollow />
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;