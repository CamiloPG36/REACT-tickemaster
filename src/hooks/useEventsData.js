// Se crea este hook que no regresa un componente, sino que recibe la data almacenada en local en Events.json.

// Importación de hooks de React y la fuente de datos estática.
import { useState } from 'react';
import eventsJSON from '../data/events.json';

// Se crea el hook reusable con la daa local
const useEventData = () => {
    // Almacena el contenido del JSON.
    const [data] = useState(eventsJSON);
    // Desestructuración profunda para extraer el arreglo de eventos del objeto JSON.
    const { _embedded: { events } } = data;
    
    // Retorna) el arreglo de eventos para que cualquier componente que lo llame pueda acceder a ellos de forma sencilla.
    return {
        events
    };
};

export default useEventData;