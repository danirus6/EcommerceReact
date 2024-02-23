import React from 'react'
import { useContext, useEffect, useState } from 'react'
import {UsersContext} from '../../context/UsersContext/UsersState'
// import { Button, Form, Input, Alert, Space} from 'antd'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const { users, createUser, resetUserState } = useContext(UsersContext) 
    const [ showAlert, setShowAlert ] = useState(false)
    const [ alertMessage, setAlertMessage ] = useState('')

    useEffect(() => {
        if(users === 'email already in use') {
            setShowAlert(true)
            setAlertMessage('Por favor, utiliza otra dirección de email')
        }
    }, [users])

    let navigate = useNavigate()

    const onFinish = async (values) => {
        console.log('Success', values)
        try {
            await createUser(values) 
            setShowAlert(true)
            setAlertMessage('Usuario creado con éxito; revisa tu bandeja de entrada')
            setTimeout(() => {
                navigate('/login')
            }, 2000)
        } catch (error) {
            console.error(error)
        }
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed', errorInfo)
    }

    const handleAlert = () => {
        setShowAlert(false)
        resetUserState()
    }

    //Aquí, Iker y Olatz definen el Form. Cómo podemos enlazar con el nuestro, que ya está hecho?
    //const formData = use(TheForm)

    const alert = <Alert message = { alertMessage } type='info' showIcon closable onClose={handleAlert} />

    return (
    <>
    {/* {formData} */}
    { showAlert && alert }
    </>
    )
}

export default Register