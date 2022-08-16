import { useEffect, useState } from "react";
import axios from "axios";

import reactLogo from "./assets/header.svg";
import "./App.css";
import LocationInfo from "./components/LocationInfo";
import CardResident from "./components/CardResident";

function App() {
  const [location, setLocation] = useState();
  /* Busqueda por input */
  const [searchInput, setSearchInput] = useState("");

  /* Peticion a la API */
  useEffect(() => {
    let numberLocation;
    /* logica:
Calcula un numero random o el input y solamente se va a ejecutar cuando cambie searchInput
*/
    if (searchInput === "") {
      numberLocation = Math.floor(Math.random() * (126 - 1) + 1);
    } else {
      numberLocation = searchInput;
    }

    const URL = `https://rickandmortyapi.com/api/location/${numberLocation}`;
    axios
      .get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err));
    /* se renderiza de nuevo cuando cambie: si va a hacer vacio y no cambia*/
  }, [searchInput]);

  // const location = useFetch(URL);

  const handleSubmit = (e) => {
    e.preventDefault();

    /* targe es el form que viene del evento submit y search es el id del input y value para capturar ese input */
    /* Guardar inf dentro de setSeacrhinput */
    setSearchInput(e.target.search.value);
  };

  // console.log(searchInput);
  return (
    <div className="App">
      <img src={reactLogo} alt="" />
      <form onSubmit={handleSubmit} className="card__form">
        <input type="text" name="" className="card__input" id="search" />
        <button className="card__btn">Search</button>
      </form>
      <LocationInfo location={location} />
      <div className="card__app_resident">
        {location?.residents.map((url) => (
          <CardResident key={url} url={url} />
        ))}
      </div>
    </div>
  );
}

export default App;
