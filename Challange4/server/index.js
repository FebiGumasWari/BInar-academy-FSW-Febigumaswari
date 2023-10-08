const app = require("../app")

// bikin env.port untuk membaca env port atau port 8000
const port = process.env.port || 8000

// Mulai server Express.js
app.listen(port, () => {
  console.log(`Aplikasi berjalan di port http://localhost:${port}...`);
});
