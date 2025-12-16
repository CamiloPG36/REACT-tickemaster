import { useState } from "react";
import EventItem from "./components/EventItem/index";
import eventsJSON from "../../data/events.json";

const Events = ({ searchTerm }) => {
    // Se mantiene el estado inicial con los datos del JSON.
    const [data] = useState(eventsJSON);
    const { _embedded: { events } } = data;

    // Manejador que recibe el 'id' desde el componente hijo (EventItem) al hacer clic.
    const handleEventItemClick = (id) => {
        console.log('event clickeado: ', id);
    };
    
    // Función que procesa el filtrado y genera la lista de componentes.
    const renderEvents = () => {
        let eventsFiltered = events;

        // Si hay un término de búsqueda, se filtra el arreglo comparando nombres en minúsculas.
        if (searchTerm.length > 0) {
            eventsFiltered = eventsFiltered.filter((item) => 
                item.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
            );
        }

        // Se retorna el array de componentes EventItem ya filtrado.
        return eventsFiltered.map((eventItem) => (
            <EventItem
                key={`event-item-${eventItem.id}`}
                name={eventItem.name}
                info={eventItem.info}
                image={eventItem.images[0].url}
                onEventClick={handleEventItemClick} 
                id={eventItem.id} 
            />
        ));
    };

    return (
        <div>
            Eventos
            {/* Se ejecuta la función de renderizado para mostrar los resultados filtrados. */}
            {renderEvents()}
        </div>
    );
};

export default Events;
