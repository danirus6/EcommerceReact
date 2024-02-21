import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TheForm.styles.scss';
import Swal from 'sweetalert2';

const TheForm = () => {
    const [data, setData] = useState({
        name: '',
        username: '',
        email: '',
        password: ''
    });

    let navigate = useNavigate();

    const handleInputChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validaciones
        if (data.name.length < 3 || data.username.length < 4 || data.password.length < 8 || data.email.length < 6) {
            Swal.fire({
                title: 'Error!',
                text: 'Rellena todos los campos correctamente!',
                confirmButtonText: 'Aceptar'
            });
            return; // Detener el envío si las validaciones fallan
        }

        // Lógica con localStorage (simplificada)
        let localData = JSON.parse(localStorage.getItem('data')) || [];
        localData.push(data); 
        localStorage.setItem('data', JSON.stringify(localData));

        // Éxito
        console.log('Datos guardados:', data); 
        navigate('/list', { replace: true }); // Usar replace para una correcta redirección
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <div className='form__data'>
                <input className='form__data__box' placeholder='name' type='text' name='name' value={data.name} onChange={handleInputChange}/>
                <input className='form__data__box' placeholder='username' type= 'text' name='username' value={data.username} onChange={handleInputChange}/>
                <input className='form__data__box' placeholder='email' type= 'email' name='email' value={data.email} onChange={handleInputChange}/>
                <input className='form__data__box' placeholder='password' type='text' name='password' value={data.password} onChange={handleInputChange}/>
            </div>
            <button type='submit'>Submit</button>
        </form>
    );
}

export default TheForm;