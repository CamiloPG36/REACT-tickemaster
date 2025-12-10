// Importa el hook useState para añadir estado al componente Navbar.
import { useState } from "react";

const Navbar = () => {
    // Variable de estado 'search' (inicialmente vacía) y su función actualizadora 'setSearch'.
    const [search, setSearch] = useState('');

    // Manejador que se ejecuta cada vez que el usuario escribe en el input.
    const handleInputChange = (evt) => {
      setSearch(evt.target.value); // Actualiza el estado 'search' con el texto actual del input.
    };

    return (
      <div>
        <p>Mi boletería</p>
        <input
          placeholder="Busca tu evento favorito"
          onChange={handleInputChange} // Asocia el cambio de valor al manejador.
          value={search} // El input está "controlado" por el estado 'search'.
        />
      </div>
    );
};

export default Navbar;