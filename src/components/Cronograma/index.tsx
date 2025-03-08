import React from "react";
import { Actividad, cronograma } from "./cronograma";

export const Cronograma = () => {

    const renderActividades = (actividades: Actividad[]) => {

        const renderActividadText = (actividad: Actividad) => {
            if (actividad.bg && actividad.color) {
                return <li>
                    <span style={{
                        backgroundColor: actividad.bg,
                        borderRadius: '5px',
                        color: actividad.color,
                        padding: '0.2rem 0.4rem',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                    }}
                    >{actividad.name}</span></li>
            } else {
                return <li>{actividad.name}</li>
            }
        }
        return (
            <ul>
                {actividades.map((actividad, index) => (
                    <>
                    {renderActividadText(actividad)}
                    </>
                ))}
            </ul>
        )
    }
    return (<></>);

    return (
        <table>
            <thead>
                <tr>
                    <th>Semana</th>
                    <th>Fecha</th>
                    <th>Martes</th>
                    <th>Fecha</th>
                    <th>Jueves</th>
                </tr>
            </thead>
            <tbody>
                {cronograma.map((semana) => (
                    <tr key={semana.semana}>
                        <td>{semana.semana}</td>
                        <td>{semana.martes.fecha}</td>
                        <td>
                            {renderActividades(semana.martes.actividades)}
                        </td>
                        <td>{semana.jueves.fecha}</td>
                        <td>
                            {renderActividades(semana.jueves.actividades)}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
};