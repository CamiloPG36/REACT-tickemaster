// Define un componente funcional llamado Navbar.
const Navbar = () => {
  // Retorna la estructura (JSX) que define la interfaz del componente.
  return (
    // Contenedor principal simple.
    <div>
      {/* Muestra el título principal de la aplicación. */}
      <p>Mi boletería</p>
      {/* Un campo de entrada para que el usuario busque eventos. */}
      <input placeholder="Busca tu evento favorito"></input>
    </div>
  );
};

export default Navbar;