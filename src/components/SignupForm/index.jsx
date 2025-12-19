import { useState } from "react";

// Definición del componente funcional SignupForm
const SignupForm = () => {
    //  Definición de los estados para controlar los inputs del formulario.
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [phone, setPhone] = useState('');

    // Función para resetear los valores de los estados a su valor inicial (vacío)
    const handleClearClick = () => {
        setName('');
        setAge('');
        setAddress('');
        setZipcode('');
        setPhone('');
    }

    // Manejador del envío del formulario. Recibe el evento 'evt' como parámetro.
    const handleSubmitForm = (evt) => {
        evt.preventDefault(); // Evita que se actualice la página de manera automática

    }

    // Estructura visual del formulario (JSX)
    return (
        <form onSubmit={handleSubmitForm}>
            <label >
                Name
                {/* El valor del input depende del estado (value) y lo actualiza (onChange) */}
                <input value={name} onChange={(evt) => setName(evt.target.value)} required />
            </label>
            <br />
            <label >
                Age
                <input value={age} onChange={(evt) => setAge(evt.target.value)} required />
            </label>
            <br />
            <label >
                Address
                <input value={address} onChange={(evt) => setAddress(evt.target.value)} required />
            </label>
            <br />
            <label >
                Zipcode
                <input value={zipcode} onChange={(evt) => setZipcode(evt.target.value)} required />
            </label>
            <br />
            <label >
                Phone
                <input value={phone} onChange={(evt) => setPhone(evt.target.value)} required />
            </label>
            <br />
            <div>
                {/* type="button" es vital para que este botón no envíe el formulario por error */}
                <button type="button" onClick={handleClearClick}>Clear</button>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default SignupForm;