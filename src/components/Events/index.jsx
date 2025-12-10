// Importa el hook useState de React para manejar el estado dentro del componente.
import { useState } from "react";

import EventItem from "./components/EventItem/index";
import eventsJSON from "../../data/events.json"


const Events = () => {
    // Inicializa el estado 'data' con el contenido del JSON importado.
    const [data] = useState(eventsJSON);
    const { _embedded: {events}} = data;

    // Esta función se pasa al componente hijo (EventItem) mediante props. Cuando el hijo la llama, recibe el 'id' del evento clickeado y lo logea.
    const handleEventItemClick = (id) => {
        console.log('event clickeado: ', id);
    };

    return (
        <div>
            Eventos
            {events.map((eventItem) => (
                <EventItem
                    key={`event-item-${eventItem.id}`}
                    name={eventItem.name}
                    info={eventItem.info}
                    image={eventItem.images[0].url}
                    onEventClick={handleEventItemClick} // Pasa la función handleEventItemClick como una prop.
                    id={eventItem.id} // Pasa el ID también como prop
                />
            ))}
        </div>
    );
};

export default Events;