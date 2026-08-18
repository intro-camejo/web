import React from "react";
import data from "../../data/cronograma.json";
import { Actividad, Actividades, formatearFecha } from "./Actividades";
import styles from "./styles.module.css";

type Dia = {
    fecha: string;
    actividades: Actividad[];
};

type Semana = {
    semana: number;
    martes: Dia;
    jueves: Dia;
};

const renderIntro = (text: string) =>
    text.split("\n\n").map((block, i) => {
        const trimmed = block.trim();
        if (trimmed.startsWith("### ")) return <h3 key={i}>{trimmed.slice(4)}</h3>;
        if (trimmed.startsWith("## ")) return <h2 key={i}>{trimmed.slice(3)}</h2>;
        if (trimmed.startsWith("# ")) return <h1 key={i}>{trimmed.slice(2)}</h1>;
        if (trimmed === "") return null;
        return <p key={i}>{trimmed}</p>;
    });

const Encabezado = ({ dia, modalidad }: { dia: string; modalidad: string }) => (
    <>
        {dia}
        <span className={styles.chipModalidad}>{modalidad}</span>
    </>
);

export const Cronograma = () => {
    const semanas = data.semanas as Semana[];

    return (
        <div className={styles.cronograma}>
            {renderIntro(data.intro)}

            {/* Vista desktop: tabla */}
            <div className={styles.tablaWrapper}>
                <table className={styles.tabla}>
                    <thead>
                        <tr>
                            <th className={styles.colSemana}>Semana</th>
                            <th className={styles.colDia}>
                                <Encabezado dia="Martes" modalidad="Virtual" />
                            </th>
                            <th className={styles.colDia}>
                                <Encabezado dia="Jueves" modalidad="Presencial" />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {semanas.map((semana) => (
                            <tr key={semana.semana}>
                                <td className={styles.celdaSemana}>
                                    <span className={styles.numeroSemana}>{semana.semana}</span>
                                </td>
                                {([semana.martes, semana.jueves] as Dia[]).map((dia, i) => (
                                    <td key={i} className={styles.celdaDia}>
                                        <span className={styles.fecha}>
                                            {formatearFecha(dia.fecha)}
                                        </span>
                                        <Actividades actividades={dia.actividades} />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Vista mobile: cards */}
            <div className={styles.cards}>
                {semanas.map((semana) => (
                    <div key={semana.semana} className={styles.card}>
                        <div className={styles.cardHeader}>Semana {semana.semana}</div>
                        <div className={styles.cardDia}>
                            <span className={styles.cardDiaLabel}>
                                Martes {semana.martes.fecha}
                                <span className={styles.chipModalidad}>Virtual</span>
                            </span>
                            <Actividades actividades={semana.martes.actividades} />
                        </div>
                        <div className={styles.cardDia}>
                            <span className={styles.cardDiaLabel}>
                                Jueves {semana.jueves.fecha}
                                <span className={styles.chipModalidad}>Presencial</span>
                            </span>
                            <Actividades actividades={semana.jueves.actividades} />
                        </div>
                    </div>
                ))}
            </div>

            {data.nota && <p className={styles.nota}>{data.nota}</p>}
        </div>
    );
};
