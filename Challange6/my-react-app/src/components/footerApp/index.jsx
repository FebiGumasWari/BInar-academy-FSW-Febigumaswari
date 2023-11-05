import "../../styles/style.css";
import iconFacebook from "../../assets/IMG/icon_facebook.svg";
import iconInstagram from "../../assets/IMG/icon_instagram.svg";
import iconTwitter from "../../assets/IMG/icon_twitter.svg";
import iconMail from "../../assets/IMG/icon_mail.svg";
import iconTwitch from "../../assets/IMG/icon_twitch.png";
import logo from "../../assets/IMG/logo.png";

function FooterApp() {
  return (
    <footer id="footer" className="footer-top">
      <div className="container">
        <div className="item">
          <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </div>

        <div className="item">
          <a className="nav-link" href="#section1">
            Our Services
          </a>
          <br />
          <a className="nav-link" href="#section2">
            Why Us
          </a>
          <br />
          <a className="nav-link" href="#section3">
            Testimonial
          </a>
          <br />
          <a className="nav-link" href="#section5">
            FAQ
          </a>
        </div>

        <div className="item">
          <p>Connect with us</p>
          <div className="sosmed">
            <a className="sosmedLink" href="index.html">
              <img
                src={iconFacebook}
                alt="icon"
                className="img"
              />
            </a>
            <a className="sosmedLink" href="index.html">
              <img
                src={iconInstagram}
                alt="icon"
                className="img"
              />
            </a>
            <a className="sosmedLink" href="index.html">
              <img
                src={iconTwitter}
                alt="icon"
                className="img"
              />
            </a>
            <a className="sosmedLink" href="index.html">
              <img src={iconMail} alt="icon" className="img" />
            </a>
            <a className="sosmedLink" href="index.html">
              <img
                src={iconTwitch}
                alt="icon"
                className="img"
              />
            </a>
          </div>
        </div>

        <div className="item">
          <p>Copyright Binar 2022</p>
          <a href="index.html">
            <img src={logo} alt="logo" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default FooterApp;
