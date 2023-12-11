import  { createContext, useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [showCars, setShowCars] = useState(false);
  const [cars, setCars] = useState([]);
  const [filter, setFilter] = useState({
    tipeDriver: "default",
    tanggal: "",
    waktuJemput: "false",
    jumlahPenumpang: "0",
    availableAt: "",
  });
  const [selectedDate, setSelectedDate] = useState("");

  const fetchCars = async () => {
    try {
      setShowCars(false);
      const response = await axios.get(
        "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
      );
      const data = response.data;
      // Apply filters
      const filteredCars = data.filter((car) => {
        const isAvailable =
          filter.availableAt === "" || car.availableAt === filter.availableAt;

        if (
          (filter.tipeDriver === "default" ||
            car.tipeDriver === (filter.tipeDriver === "true")) &&
          (filter.tanggal === "" || car.tanggal === filter.tanggal) &&
          (filter.waktuJemput === "false" ||
            car.waktuJemput === filter.waktuJemput) &&
          car.capacity >= parseInt(filter.jumlahPenumpang) &&
          isAvailable
        ) {
          return true;
        }
        return false;
      });

      setCars(filteredCars);
    } catch (err) {
      console.error(err);
    } finally {
      setShowCars(true);
    }
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <FilterContext.Provider
      value={{
        filter,
        setFilter,
        showCars,
        cars,
        handleFilterChange,
        handleDateChange,
        fetchCars, 
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

FilterProvider.propTypes = {
  children: PropTypes.node,
};
