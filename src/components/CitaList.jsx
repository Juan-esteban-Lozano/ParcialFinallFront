import axios from 'axios';
import { useState } from 'react';

    const CitaList = () => {
    const [correo, setCorreo] = useState('');
    const [citas, setCitas] = useState([]);

    const cargarCitas = async () => {
        const res = await axios.get(`https://examen-hgb6hkarhxb9b8gd.mexicocentral-01.azurewebsites.net/api/citas/usuario?correo=${correo}`);
        setCitas(res.data);
    };

    return (
        <div>
        <h2>Ver Citas</h2>
        <input placeholder="Correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />
        <button onClick={cargarCitas}>Buscar</button>
        <ul>
            {citas.map((cita) => (
            <li key={cita.id}>{cita.fecha} - {cita.estado}</li>
            ))}
        </ul>
        </div>
    );
    };

export default CitaList;
