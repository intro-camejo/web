import React from "react";
import clsx from "clsx";
import data from "../../data/cronograma.json";
import styles from "./styles.module.css";

type Tipo = "evaluacion" | "hito";

type Actividad = {
    name: string;
    tipo?: Tipo;
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

const MESES = [
    "ene", "feb", "mar", "abr", "may", "jun",
    "jul", "ago", "sep", "oct", "nov", "dic",
];

/** "18/08/2026" -> "18 ago". El año ya lo da el título de la página. */
const formatearFecha = (fecha: string) => {
    const [dia, mes] = fecha.split("/");
    return `${dia} ${MESES[Number(mes) - 1] ?? mes}`;
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

/** Iconos inline (estilo trazo) al tono del contenedor, como en Home/icons. */
const Icono = ({ children }: { children: React.ReactNode }) => (
    <svg
        className={styles.destacadoIcono}
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true">
        {children}
    </svg>
);

const ICONOS: Record<Tipo, React.ReactNode> = {
    evaluacion: (
        <Icono>
            <path d="M9 4H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2" />
            <rect x="9" y="2" width="6" height="4" rx="1" />
            <path d="M9 13l2 2 4-4" />
        </Icono>
    ),
    hito: (
        <Icono>
            <path d="M5 21V4" />
            <path d="M5 4h11l-2 3.5L16 11H5z" />
        </Icono>
    ),
};

/**
 * Las evaluaciones y los hitos se sacan de la lista y se muestran como una
 * franja arriba de la celda: en el bullet quedaban desalineados y se comían
 * dos renglones.
 */
const Actividades = ({ actividades }: { actividades: Actividad[] }) => {
    const destacadas = actividades.filter((a) => a.tipo);
    const temas = actividades.filter((a) => !a.tipo);

    return (
        <>
            {destacadas.map((actividad, index) => (
                <p
                    key={index}
                    className={clsx(styles.destacado, styles[actividad.tipo!])}>
                    {ICONOS[actividad.tipo!]}
                    {actividad.name}
                </p>
            ))}
            {temas.length > 0 && (
                <ul className={styles.temas}>
                    {temas.map((actividad, index) => (
                        <li key={index}>{actividad.name}</li>
                    ))}
                </ul>
            )}
        </>
    );
};

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
