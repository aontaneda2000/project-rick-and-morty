import React from "react";
import useFetch from "../hooks/useFetch";

const CardResident = ({ url }) => {
  const resident = useFetch(url);

  console.log(url);
  return (
    <article className="card__resident">
      <img
        src={resident?.image}
        alt={`image of ${resident?.name}`}
        className="card__img"
      />
      {/* <div>
        <div className="circle"></div>
        <span>{resident?.status}</span>
      </div> */}
      <div>
        <h3>{resident?.name}</h3>
        <ul className="card__resident-nav">
          <li>
            <span>Specie: </span>
            {resident?.species}
          </li>
          <li>
            <span>Origin: </span>
            {resident?.origin.name}
          </li>
          <li>
            <span>Episodes where appear: </span>
            {/* Se necesita saber en cuantos episodios aparece mediante la longitud del arreglo se logra identificar */}
            {resident?.episode.length}
          </li>
        </ul>
      </div>
    </article>
  );
};

export default CardResident;
