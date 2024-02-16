import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './TheForm.styles.css'
import Swal from 'sweetalert2'

const TheForm = () => {
    const [data, setData] = useState({
        name: '',
        username: '',
        password: ''
    })

    let navigate = useNavigate()
    let localData = JSON.parse(localStorage.getItem('data')) //Esto es para guardarlo en el navegador

    const handleInputChange = (event) => {
        setData({...data, [event.target.name]: event.target.name})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(data.name && data.username && data.password) {
            if(localData == !null) {
                localData.push({
                    name: data.name,
                    username: data.username,
                    password: data.password
                })
            } else {
                localData = [{
                    name: data.name,
                    username: data.username,
                    password: data.password
                }]
            }

        localStorage.setItem('data', JSON.stringify(localData))
        console.log({ message: 'data succesfully stored: '}, { name: data.name,
            username: data.username, password: data.password })
        setTimeout(()=> {navigate('/list')}, 2000)
        }
    }

    const Alert = () => {
        if(data.name.length < 3 || data.username.length < 4 || password < 8 ) {
            Swal.fire({
                title: 'Error!',
                text: 'Rellena todos los campos!',
                confirmButtonText: 'Aceptar'
            })
        }
    }

    return (
        <div>Form</div>
    //     <form className='form' onSubmit={handleSubmit}>
    //     <div className='form__data'>
    //       <input className='form__data__box' placeholder='título' type='text' name='name' value={data.name} onChange={handleInputChange}/>
    //       <textarea className='form__data__box' rows={10} placeholder='texto' name='info' value={data.info} onChange={handleInputChange}/>
    //       <input className='form__data__box' placeholder='url' type='text' name='url' value={data.url} onChange={handleInputChange}/>
    //     </div>
    //     <button type='submit' onClick={Alert}>Submit</button>
    //   </form>
    )
}

export default TheForm