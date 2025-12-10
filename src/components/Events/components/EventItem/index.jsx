// Este componente recibe 'onEventClick' y 'id' como props adicionales.
const EventItem = ({name, info, id, image, onEventClick}) => {
    
    // Función que se ejecuta cuando se hace clic en el botón "Ver más".
    const handleSeeMoreClick = (evt) => {
        evt.stopPropagation(); // Detiene la propagación del evento.
        onEventClick(id); // Llama a la función que le pasó el componente padre (Events) y le envía el ID.
    };
    
    return (
        // Estructura de la tarjeta individual del evento.
        <div>
            <img src={image} alt={name} width={200} height={200}/>
            <h4>{name}</h4>
            <p>{info}</p>
            <button onClick={handleSeeMoreClick}>Ver más</button> {/* Asocia el evento onClick del botón a nuestro handler local. */}
        </div>
    );
};

export default EventItem;