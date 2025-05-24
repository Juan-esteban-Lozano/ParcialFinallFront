import axios from 'axios';
import { useState } from 'react';

    const CitaForm = () => {
    const [correo, setCorreo] = useState('');
    const [fecha, setFecha] = useState('');
    const [especialidad, setEspecialidad] = useState('');

    const programarCita = async () => {
        try {
        await axios.post(
            'https://examen-hgb6hkarhxb9b8gd.mexicocentral-01.azurewebsites.net/api/citas/programar',
            {
            correo,        
            fecha,       
            especialidad
            }
        );
        alert('Cita programada con éxito');
        // Opcional: limpiar campos tras éxito
        setCorreo('');
        setFecha('');
        setEspecialidad('');
        } catch (err) {
        alert('Error al programar cita');
        console.error(err);
        }
    };

    return (
        <div>
        <h2>Programar Cita</h2>
        <input
            type="email"
            placeholder="Correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
        />
        <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
        />
        <input
            placeholder="Especialidad"
            value={especialidad}
            onChange={(e) => setEspecialidad(e.target.value)}
            required
        />
        <button onClick={programarCita}>Programar</button>
        </div>
    );
    };

export default CitaForm;
