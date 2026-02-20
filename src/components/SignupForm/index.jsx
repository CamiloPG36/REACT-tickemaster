import { useForm } from 'react-hook-form';

// Definición del componente funcional SignupForm usando React Hook Form
const SignupForm = () => {
    // Desestructuración de métodos de useForm:
    // register: conecta los inputs con la librería.
    // handleSubmit: envuelve la función de envío y gestiona validaciones.
    // reset: limpia el formulario de forma automática.
    // errors: objeto que contiene los errores de validación.
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    // Función para resetear todos los campos del formulario a sus valores iniciales
    const handleClearClick = () => {
        reset();
    };

    // Manejador del envío. 'data' contiene un objeto con todos los valores de los inputs.
    const handleSubmitForm = (data) => {
        console.log('Datos del formulario:', data);
    }

    // Registro de errores en consola para monitorear validaciones en tiempo real
    console.log('Errores actuales:', errors);

    return (
        /* handleSubmit se encarga de prevenir el comportamiento por defecto y validar */
        <form onSubmit={handleSubmit(handleSubmitForm)}>
            <label>
                Name
                {/* El operador spread (...) inyecta el name, onChange, onBlur y ref automáticamente */}
                <input {...register('name', { required: true })} />
            </label>
            <br />
            <label>
                Age
                <input {...register('age', { required: true })} />
            </label>
            <br />
            <label>
                Address
                <input {...register('address', { required: true })} />
            </label>
            <br />
            <label>
                Zipcode
                <input {...register('zipcode', { required: true })} />
            </label>
            <br />
            <label>
                Phone
                <input {...register('phone', { required: true })} />
            </label>
            <br />
            <div>
                <button type="button" onClick={handleClearClick}>Clear</button>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default SignupForm;
