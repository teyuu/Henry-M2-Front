import React, { useState } from "react";

export default function SearchBar({onSearch}) {

  const [city, setCities] = useState("");

  const handleOnChange = (e) => {
    setCities(e.target.value)
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault(); //evita que se renderice al pasar la informacion
      onSearch(city);
      setCities("")
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        onChange={handleOnChange}
        value = {city}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
