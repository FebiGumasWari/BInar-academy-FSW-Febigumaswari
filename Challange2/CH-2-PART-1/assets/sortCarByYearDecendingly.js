function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini

  // Loop pertama untuk mengiterasi melalui elemen-elemen dalam array result.
  for (let i = 0; i < result.length - 1; i++) {
    // Loop kedua untuk membandingkan pasangan elemen yang berdekatan.
    for (let j = 0; j < result.length - 1 - i; j++) {
      // Memeriksa apakah tahun elemen ke-j lebih kecil dari tahun elemen ke-(j + 1).
      if (result[j].year < result[j + 1].year) {
        // Jika ya, tukar posisi elemen ke-j dan elemen ke-(j + 1) menggunakan variabel sementara temp.
        let temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }
  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
