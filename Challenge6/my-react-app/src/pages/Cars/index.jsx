import NavigationBar from "../../components/navigationBar";
import FooterApp from "../../components/footerApp";
import { useState, useContext } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import "../../styles/style.example.css";
import CarsHome from "../../assets/IMG/img_car.png";
import { FilterContext } from "../../context/filterContext";

function Cars() {
  const {
    filter,
    showCars,
    cars,
    handleFilterChange,
    handleDateChange,
    setFilter,
    fetchCars,
  } = useContext(FilterContext);
  const [selectedDate, setSelectedDate] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const resetForm = () => {
    setFilter({
      tipeDriver: "default",
      tanggal: "",
      waktuJemput: "false",
      jumlahPenumpang: "0",
      availableAt: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    fetchCars();
    resetForm();
  };

  return (
    <div className="carspage">
      <NavigationBar />
      <section id="home" className="home">
        <div className="container">
          <div className="box1">
            <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
            <p>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
          </div>
          <div className="box2">
            <img src={CarsHome} alt="home" className="img-car" />
          </div>
        </div>
      </section>

      <section id="sea" className="search">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <div className="row search__card mx-lg-5 py-3 px-4">
                <div className="col-lg-auto col-xl-2 col-xxl-3 col-md-auto">
                  <label>Tipe Driver</label>
                  <select
                    name="tipeDriver"
                    className="form-select"
                    value={filter.tipeDriver}
                    onChange={handleFilterChange}
                  >
                    <option value="default">Pilih Tipe Driver</option>
                    <option value="true">Dengan Supir</option>
                    <option value="false">Tanpa Supir (Lepas Kunci)</option>
                  </select>
                </div>
                <div className="col-lg-auto col-xl-auto col-md-auto">
                  <label>Tanggal</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Pilih Tanggal"
                    name="tanggal"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </div>
                <div className="col-lg-auto col-xl-auto col-md-auto search__time">
                  <label>Pilih Waktu</label>
                  <select
                    name="waktuJemput"
                    className="form-select"
                    value={filter.waktuJemput}
                    onChange={handleFilterChange}
                  >
                    <option value="false">Pilih Waktu</option>
                    <option value="08:00">08.00 WIB</option>
                    <option value="09:00">09.00 WIB</option>
                    <option value="10:00">10.00 WIB</option>
                    <option value="11:00">11.00 WIB</option>
                    <option value="12:00">12.00 WIB</option>
                  </select>
                </div>
                <div className="col-lg-auto col-xl-auto col-md-auto">
                  <label className="fw-light">
                    Jumlah Penumpang (optional)
                  </label>
                  <div className="input-group">
                    <select
                      name="jumlahPenumpang"
                      className="form-select"
                      value={filter.jumlahPenumpang}
                      onChange={handleFilterChange}
                    >
                      <option value="0">Jumlah Penumpang</option>
                      <option value="1">1 orang</option>
                      <option value="2">2 orang</option>
                      <option value="3">3 orang</option>
                      <option value="4">4 orang</option>
                      <option value="5">5 orang</option>
                      <option value="6">6 orang</option>
                    </select>
                    <span className="input-group-text bg-white">
                      <img src="images/fi_users.png" width="20px" alt="" />
                    </span>
                  </div>
                </div>
                <div className="col-lg-2 col-xl-auto col-md-2 pt-4">
                  <button
                    className="btn btn-utama"
                    id="load-btn"
                    onClick={handleSubmit}
                  >
                    Cari Mobil
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cars">
        <div className="container">
          {formSubmitted && showCars && (
            <Row className="justify-content-center">
              {cars.map((car) => (
                <Col lg={4} key={car.id}>
                  <Card className="px-2 py-4">
                    <Card.Img
                      variant="top"
                      src={car.image}
                      className="img-cars"
                    />
                    <Card.Body>
                      <p>
                        {car.model} / {car.manufacture}
                      </p>
                      <h5 className="card-title fs-6">{car.price}</h5>
                      <p className="cars__p">{car.description}</p>
                      <div className="row">
                        <div className="col-1">
                          <img src="images/fi_users1.png" width="20px" alt="" />
                        </div>
                        <div className="col-10 ms-lg-2">
                          {car.capacity} Orang
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-1">
                          <img
                            src="images/fi_settings.png"
                            width="20px"
                            alt=""
                          />
                        </div>
                        <div className="col-10 ms-lg-2">{car.transmission}</div>
                      </div>
                      <div className="row mt-2 mb-4">
                        <div className="col-1">
                          <img
                            src="images/fi_calendar.png"
                            width="20px"
                            alt=""
                          />
                        </div>
                        <div className="col-10 ms-lg-2">Tahun {car.year}</div>
                      </div>
                      <Button variant="utama" className="w-100 mt-3">
                        Pilih Mobil
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </div>
      </section>

      <FooterApp />
    </div>
  );
}

export default Cars;
