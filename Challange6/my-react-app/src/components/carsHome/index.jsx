import "../../styles/style.css";
import Cars from "../../assets/IMG/img_car.png";
import { Link } from "react-router-dom";

function CarsHome() {
  return (
    // home car
    <section id="home" className="home">
      <div className="container">
        <div className="box1">
          <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
          <p>
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
          <a href="Cari-Mobil.html" className="text">
            <Link to="/cars">
            <button type="button" className="btn btn-success">
              Mulai Sewa Mobil
            </button>
            </Link>
          </a>
        </div>
        <div className="box2">
          <img src={Cars} alt="home" className="img-car" />
        </div>
      </div>
    </section>
    // /home car
  );
}

export default CarsHome;
