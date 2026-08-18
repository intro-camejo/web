import React from "react";
import clsx from "clsx";
import styles from "./Actividades.module.css";

export type Tipo = "evaluacion" | "hito";

export type Actividad = {
    name: string;
    tipo?: Tipo;
};

const MESES = [
    "ene", "feb", "mar", "abr", "may", "jun",
    "jul", "ago", "sep", "oct", "nov", "dic",
];

/** "18/08/2026" -> "18 ago". El año ya se sobreentiende por el cuatrimestre. */
export const formatearFecha = (fecha: string) => {
    const [dia, mes] = fecha.split("/");
    return `${dia} ${MESES[Number(mes) - 1] ?? mes}`;
};

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
 * Renderiza las actividades de un día: las evaluaciones y los hitos se sacan de
 * la lista y se muestran como una chip arriba (en el bullet quedaban
 * desalineados y se comían dos renglones). Lo usan el cronograma completo y el
 * panel de "Esta semana" del home, para que se vean igual en los dos lados.
 */
export const Actividades = ({ actividades }: { actividades: Actividad[] }) => {
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
