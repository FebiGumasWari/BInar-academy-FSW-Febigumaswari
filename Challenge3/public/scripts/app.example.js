class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
    this.tipeDriver = document.getElementById("tipeDriver");
    this.tanggal = document.getElementById("tanggal");
    this.waktuJemput = document.getElementById("waktuJemput");
    this.jumlahPenumpang = document.getElementById("jumlahPenumpang");
  }

  async init() {
    await this.load();
    this.clearButton.onclick = this.clear.bind(this);
    this.loadButton.onclick = this.run.bind(this);
    this.loadFilter();
  }

  run = () => {
    this.clear(); // Hapus konten sebelumnya
    const carList = Car.list; // Ambil daftar mobil
    const carLength = carList.length;

    // Cek jika daftar mobil kosong
    if (carLength <= 0) {
      const notFoundMessage = document.createElement("div");
      notFoundMessage.innerHTML = `
        <div class="row justify-content-center">
          <div class="col-sm-5">
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
              <span class="fw-bold">Cars Not Found!</span> Try other keywords
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          </div>
        </div>
      `;

      this.carContainerElement.appendChild(notFoundMessage);
      return; // Keluar dari fungsi jika tidak ada mobil yang ditemukan
    }

    // Loop melalui daftar mobil dan tambahkan ke kontainer
    carList.forEach((car) => {
      const node = document.createElement("div");
      node.classList.add("col-lg-4", "my-2");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
    console.log(cars);
  }

  async loadFilter() {
    const cars = await Binar.listCars((data) => {
      const tanggalJemputData = new Date(data.availableAt).getTime();
      const tanggal = new Date(
        `${this.tanggal.value} ${this.waktuJemput.value}`
      ).getTime();
      const checkWaktu = tanggalJemputData >= tanggal;
      const availableAt =
        this.tipeDriver.value === "true" && data.available ? true : false;
      const notAvailableAt =
        this.tipeDriver.value === "false" && !data.available ? true : false;
      const penumpang = data.capacity >= this.jumlahPenumpang.value;

      if (
        this.tipeDriver.value !== "default" &&
        this.tanggal.value !== "" &&
        this.waktuJemput.value !== "false" &&
        this.jumlahPenumpang.value >= 0
      ) {
        return (availableAt || notAvailableAt) && checkWaktu && penumpang;
      } else if (
        this.tipeDriver.value !== "default" &&
        this.jumlahPenumpang.value > 0
      ) {
        return (availableAt || notAvailableAt) && penumpang;
      } else if (
        this.tanggal.value !== "" &&
        this.waktuJemput.value !== "false" &&
        this.jumlahPenumpang.value > 0
      ) {
        return checkWaktu && penumpang;
      } else if (
        this.tanggal.value !== "" &&
        this.waktuJemput.value !== "false"
      ) {
        return checkWaktu;
      } else if (this.tipeDriver.value !== "default") {
        return availableAt || notAvailableAt;
      } else {
        return penumpang;
      }
    });
    console.log(cars);
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
