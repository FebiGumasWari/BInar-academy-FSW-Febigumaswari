
import "../../styles/style.css";
import NavigationBar from "../../components/navigationBar";
import FooterApp from "../../components/footerApp";
import CarsHome from "../../components/carsHome";
import OurServices from "../../components/ourServices";
import WhyUs from "../../components/whyUs";
import Testimonial from "../../components/testiMonial";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <NavigationBar />
      <CarsHome />
      <OurServices />
      <WhyUs />
      <Testimonial />
      <section id="section4" className="section4">
        <div className="container">
          <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="Cari-Mobil.html" className="text">
            <Link to="/cars">
              <button type="button" className="btn btn-success">
                Mulai Sewa Mobil
              </button>
            </Link>
          </a>
        </div>
      </section>
      <section id="section5" className="section5">
        <div className="container">
          <div className="item">
            <h1>Frequently Asked Question</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>

          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Apa saja syarat yang dibutuhkan?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit, autem aliquam. Molestias labore earum quas
                  debitis officia excepturi amet. Quam sit eveniet doloribus
                  facere quis esse facilis quae voluptatem ducimus?
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Berapa hari minimal sewa mobil lepas kunci?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
                  sint eius, tempora praesentium dolor mollitia dolores expedita
                  sapiente sit illo, quo, soluta earum illum inventore quidem?
                  Quam enim consectetur perspiciatis? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Natus quaerat excepturi vel
                  illum similique ipsum fugiat aperiam, rerum optio temporibus
                  blanditiis eius, sit ad commodi recusandae at voluptates
                  impedit in!
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Berapa hari sebelumnya sabaiknya booking sewa mobil?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
                  sint eius, tempora praesentium dolor mollitia dolores expedita
                  sapiente sit illo, quo, soluta earum illum inventore quidem?
                  Quam enim consectetur perspiciatis? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Natus quaerat excepturi vel
                  illum similique ipsum fugiat aperiam, rerum optio temporibus
                  blanditiis eius, sit ad commodi recusandae at voluptates
                  impedit in!
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Apakah Ada biaya antar-jemput?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
                  sint eius, tempora praesentium dolor mollitia dolores expedita
                  sapiente sit illo, quo, soluta earum illum inventore quidem?
                  Quam enim consectetur perspiciatis? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Natus quaerat excepturi vel
                  illum similique ipsum fugiat aperiam, rerum optio temporibus
                  blanditiis eius, sit ad commodi recusandae at voluptates
                  impedit in!
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  Bagaimana jika terjadi kecelakaan
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
                  sint eius, tempora praesentium dolor mollitia dolores expedita
                  sapiente sit illo, quo, soluta earum illum inventore quidem?
                  Quam enim consectetur perspiciatis? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Natus quaerat excepturi vel
                  illum similique ipsum fugiat aperiam, rerum optio temporibus
                  blanditiis eius, sit ad commodi recusandae at voluptates
                  impedit in!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterApp />
    </div>
  );
}

export default Home;
