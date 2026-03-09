import React from "react";
import data from "../../data/cronograma.json";

type Actividad = {
    name: string;
    bg?: string;
    color?: string;
};

type Dia = {
    fecha: string;
    actividades: Actividad[];
};

type Semana = {
    semana: number;
    martes: Dia;
    jueves: Dia;
};

const renderIntro = (text: string) => {
    return text.split("\n\n").map((block, i) => {
        const trimmed = block.trim();
        if (trimmed.startsWith("### ")) return <h3 key={i}>{trimmed.slice(4)}</h3>;
        if (trimmed.startsWith("## ")) return <h2 key={i}>{trimmed.slice(3)}</h2>;
        if (trimmed.startsWith("# ")) return <h1 key={i}>{trimmed.slice(2)}</h1>;
        if (trimmed === "") return null;
        return <p key={i}>{trimmed}</p>;
    });
};

const renderActividades = (actividades: Actividad[]) => (
    <ul>
        {actividades.map((actividad, index) => (
            <li key={index}>
                {actividad.bg && actividad.color ? (
                    <span style={{
                        backgroundColor: actividad.bg,
                        borderRadius: "5px",
                        color: actividad.color,
                        padding: "0.2rem 0.4rem",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                    }}>
                        {actividad.name}
                    </span>
                ) : (
                    actividad.name
                )}
            </li>
        ))}
    </ul>
);

export const Cronograma = () => {
    const semanas = data.semanas as Semana[];

    return (
        <>
            {renderIntro(data.intro)}
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
                    {semanas.map((semana) => (
                        <tr key={semana.semana}>
                            <td>{semana.semana}</td>
                            <td>{semana.martes.fecha}</td>
                            <td>{renderActividades(semana.martes.actividades)}</td>
                            <td>{semana.jueves.fecha}</td>
                            <td>{renderActividades(semana.jueves.actividades)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {data.nota && <p><em>{data.nota}</em></p>}
        </>
    );
};
