import { useState } from "react";
import Navbar from "./components/Navbar";
import Events from "./components/Events";
import './App.css';

const App = () => {
  // Estado que almacenará el término de búsqueda final (al dar Enter)
  const [searchTerm, setSearchTerm] = useState('');

  // Esta función recibe el valor desde el Navbar y actualiza el estado de App
  const handleNavbarSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      {/* Se pasa la función para capturar la búsqueda */}
      <Navbar onSearch={handleNavbarSearch} />
      {/* Se pasa el término de búsqueda para que Events lo use en su filtro */}
      <Events searchTerm={searchTerm} />
  
    </>
  );
}

export default App;
