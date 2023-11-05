import Cars from "./pages/Cars";
import HomePage from "./pages/Home/index";
import { Route, Routes } from "react-router-dom";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/cars" element={<Cars />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
    </div>
  );
}

export default App;
