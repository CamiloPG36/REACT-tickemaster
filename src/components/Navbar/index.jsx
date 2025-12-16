import { useState } from "react";

const Navbar = ({ onSearch }) => {
    // Estado local para controlar lo que el usuario escribe en el input.
    const [search, setSearch] = useState('');

    // Actualiza el estado 'search' cada vez que el usuario teclea.
    const handleInputChange = (evt) => {
      setSearch(evt.target.value);
    };

    // Al presionar 'Enter', se ejecuta la función onSearch enviando el término al componente padre.
    const handleInputKeyDown = (evt) => {
        if (evt.key === 'Enter') {
            onSearch(search);
        }
    };

    return (
      <div>
        <p>Mi boletería</p>
        <input
          placeholder="Busca tu evento favorito"
          onChange={handleInputChange} 
          onKeyDown={handleInputKeyDown} 
          value={search} // El valor del input está ligado al estado local.
        />
      </div>
    );
};

export default Navbar;
