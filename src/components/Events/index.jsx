// Importa el componente individual que se usa para mostrar cada evento.
import EventItem from "./components/EventItem/index";
// Importa los datos de los eventos desde un archivo JSON local.
import data from "../../data/events.json";

console.log(data);

// Desestructura los datos para extraer la lista de eventos (_embedded.events) de forma limpia.
const { _embedded: {events}} = data;

// Componente principal que gestiona y muestra la lista completa de eventos.
const Events = () => {

    const eventsComponent = events.map((eventItem) => (
        <EventItem
            key={`event-item-${eventItem.id}`}
            name={eventItem.name}
            info={eventItem.info}
            image={eventItem.images[0].url}            
        />
    ));
    // Renderiza el contenedor principal y la lista generada de componentes EventItem.
    return (
        <div>
            Eventos
            {eventsComponent}
        </div>
    );
};

// Exporta el componente principal de Eventos.
export default Events;