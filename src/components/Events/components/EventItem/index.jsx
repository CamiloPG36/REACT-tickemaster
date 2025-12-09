// Define el componente EventItem. Recibe las propiedades (props) 'name', 'info' e 'image'que le fueron pasadas desde el componente padre (Events.jsx).
const EventItem = ({name, info, image}) => {
    // Retorna la estructura visual de un solo elemento (una "tarjeta" de evento).
    return (
        <div>
            <img src={image} alt={name} width={200}/>
            <h4>{name}</h4>
            <p>{info}</p>
        </div>
    );
};

// Exporta este componente para que pueda ser importado y usado en listas.
export default EventItem;