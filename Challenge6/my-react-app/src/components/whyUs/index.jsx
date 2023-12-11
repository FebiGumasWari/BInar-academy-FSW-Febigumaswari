import "../../styles/style.css";
import iconComplete from "../../assets/IMG/icon_complete.png";
import iconPrice from "../../assets/IMG/icon_price.png";
import icon24hrs from "../../assets/IMG/icon_24hrs.png";
import iconProfessional from "../../assets/IMG/icon_professional.png";

function WhyUs() {
  return (
    <section id="section2" className="section2">
      <div className="container">
        <h1>Why Us?</h1>
        <p>Mengapa harus pilih Binar Car Rental?</p>
        <div className="itemContainer">
          <div className="item">
            <img
              src={iconComplete}
              alt="icon"
              className="icon"
            />
            <h2>Mobil Lengkap</h2>
            <p className="pItem">
              Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
              terawat
            </p>
          </div>
          <div className="item">
            <img
              src={iconPrice}
              alt="icon"
              className="icon"
            />
            <h2>Harga Murah</h2>
            <p className="pItem">
              Harga murah dan bersaing, bisa bandingkan harga kami dengan
              rental mobil lain
            </p>
          </div>
          <div className="item">
            <img
              src={icon24hrs}
              alt="icon"
              className="icon"
            />
            <h2>Layanan 24 Jam</h2>
            <p className="pItem">
              Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
              tersedia di akhir minggu
            </p>
          </div>
          <div className="item">
            <img
              src={iconProfessional}
              alt="icon"
              className="icon"
            />
            <h2>Sopir Profesional</h2>
            <p className="pItem">
              Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
              tepat waktu
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
