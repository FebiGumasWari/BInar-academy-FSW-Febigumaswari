import "../../styles/style.css";
import imgPhoto1 from "../../assets/IMG/img_photo1.png";

function Testimonial() {
  return (
    <section id="section3">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <p className="fontSize2"><b>Testimonial</b></p>
            <p style={{ height: "20px", fontSize: "14px" }}>Berbagai review positif dari para pelanggan kami</p>
          </div>
        </div>
        <div className="row justify-content-center my-4">
          <div className="col-sm-8 mx-auto">
            <div id="carouselExample" className="carousel slide" style={{ backgroundColor: "#F1F3FF", padding: "50px" }} data-bs-theme="dark">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container">
                    <div className="row justify-content-center align-items-center text-start">
                      <div className="col-sm-2 mCenter">
                        <img src={imgPhoto1} draggable="false" className="testif" alt="testimonial" />
                      </div>
                      <div className="col-sm-6 text-start">
                        <p className="mCenter">⭐⭐⭐⭐⭐</p>
                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                        <p><b>John Dee 32, Bromo</b></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container">
                    <div className="row justify-content-center align-items-center text-start">
                      <div className="col-sm-2 mCenter">
                        <img src={imgPhoto1} draggable="false" className="testif" alt="testimonial" />
                      </div>
                      <div className="col-sm-6 text-start">
                        <p className="mCenter">⭐⭐⭐⭐⭐</p>
                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                        <p><b>Roberto Carlos 42, London</b></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container">
                    <div className="row justify-content-center align-items-center text-start">
                      <div className="col-sm-2 mCenter">
                        <img src={imgPhoto1} draggable="false" className="testif" alt="testimonial" />
                      </div>
                      <div className="col-sm-6 text-start">
                        <p className="mCenter">⭐⭐⭐⭐⭐</p>
                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                        <p><b>Irene Adler 24, New Jersey</b></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" style={{ width: "2.5rem", height: "2.5rem" }} aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" style={{ width: "2.5rem", height: "2.5rem" }} aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
