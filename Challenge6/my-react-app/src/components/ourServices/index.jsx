import imgService from "../../assets/IMG/img_service.png";
import cekList from "../../assets/IMG/icon_check.svg";
import "../../styles/style.css";

function OurServices (){
    return (
        <section id="section1" className="section1">
  <div className="container">
    <div className="box1">
      <img
        src={imgService}
        alt="home"
        className="img-service"
      />
    </div>
    <div className="box2">
      <h1>Best Car Rental for any kind of trip in (Lokasimu)!</h1>

      <p>
        Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
      </p>
      <div className="item">
      <img className="boxIcon" src={cekList}></img>
        <p className="pItem">Sewa Mobil Dengan Supir di Bali 12 Jam</p>
      </div>
      <div className="item">
      <img className="boxIcon" src={cekList}></img>
        <p className="pItem">Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
      </div>
      <div className="item">
      <img className="boxIcon" src={cekList}></img>
        <p className="pItem">Sewa Mobil Jangka Panjang Bulanan</p>
      </div>
      <div className="item">
      <img className="boxIcon" src={cekList}></img>
        <p className="pItem">Gratis Antar - Jemput Mobil di Bandara</p>
      </div>
      <div className="item">
      <img className="boxIcon" src={cekList}></img>
        <p className="pItem">Layanan Airport Transfer / Drop In Out</p>
      </div>
    </div>
  </div>
</section>

    )
}

export default OurServices;