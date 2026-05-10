import React, { useState } from "react";
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

const Badge = ({ actividad }: { actividad: Actividad }) => {
    if (actividad.bg && actividad.color) {
        return (
            <span style={{
                backgroundColor: actividad.bg,
                borderRadius: "5px",
                color: actividad.color,
                padding: "0.2rem 0.4rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                display: "inline-block",
            }}>
                {actividad.name}
            </span>
        );
    }
    return <>{actividad.name}</>;
};

const renderActividades = (actividades: Actividad[]) => (
    <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
        {actividades.map((actividad, index) => (
            <li key={index}>
                <Badge actividad={actividad} />
            </li>
        ))}
    </ul>
);

export const Cronograma = () => {
    const semanas = data.semanas as Semana[];

    return (
        <>
            {renderIntro(data.intro)}

            {/* Vista desktop: tabla */}
            <div className="cronograma-table-wrapper">
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
                                <td style={{ textAlign: "center", fontWeight: "bold" }}>{semana.semana}</td>
                                <td style={{ whiteSpace: "nowrap" }}>{semana.martes.fecha}</td>
                                <td>{renderActividades(semana.martes.actividades)}</td>
                                <td style={{ whiteSpace: "nowrap" }}>{semana.jueves.fecha}</td>
                                <td>{renderActividades(semana.jueves.actividades)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Vista mobile: cards */}
            <div className="cronograma-cards">
                {semanas.map((semana) => (
                    <div key={semana.semana} className="cronograma-card">
                        <div className="cronograma-card-header">Semana {semana.semana}</div>
                        <div className="cronograma-card-dia">
                            <span className="cronograma-dia-label">Martes {semana.martes.fecha}</span>
                            {renderActividades(semana.martes.actividades)}
                        </div>
                        <div className="cronograma-card-dia">
                            <span className="cronograma-dia-label">Jueves {semana.jueves.fecha}</span>
                            {renderActividades(semana.jueves.actividades)}
                        </div>
                    </div>
                ))}
            </div>

            {data.nota && <p><em>{data.nota}</em></p>}
        </>
    );
};