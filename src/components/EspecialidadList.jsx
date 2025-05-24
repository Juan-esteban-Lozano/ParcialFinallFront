import axios from 'axios';
import { useEffect, useState } from 'react';

    const EspecialidadList = () => {
    const [especialidades, setEspecialidades] = useState([]);

    useEffect(() => {
        axios.get('https://examen-hgb6hkarhxb9b8gd.mexicocentral-01.azurewebsites.net/api/especialidades')
        .then(res => setEspecialidades(res.data));
    }, []);

    return (
        <div>
        <h2>Especialidades</h2>
        <ul>
            {especialidades.map((esp, i) => (
            <li key={i}>{esp.nombre}</li>
            ))}
        </ul>
        </div>
    );
    };

export default EspecialidadList;
