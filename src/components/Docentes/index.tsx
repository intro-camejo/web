import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import docentesData from '@site/src/data/docentes.json';

type DocenteItem = {
  name: string;
  picture?: string;
};

function Foto({name, picture}: {name: string; picture: string}) {
  return (
    <img
      className={styles.foto}
      alt={`Foto de ${name}, docente del curso`}
      src={useBaseUrl(picture)}
    />
  );
}

/* Marcador para docentes que todavía no tienen foto. Hereda el color del
   contenedor via `currentColor`, así funciona en modo claro y oscuro. */
function FotoPendiente({name}: {name: string}) {
  return (
    <div
      className={`${styles.foto} ${styles.pendiente}`}
      role="img"
      aria-label={`Sin foto de ${name}, docente del curso`}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true">
        <circle cx="12" cy="9" r="3.5" />
        <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
      </svg>
    </div>
  );
}

function Docente({name, picture}: DocenteItem) {
  return (
    <figure className={styles.docente}>
      {picture ? (
        <Foto name={name} picture={picture} />
      ) : (
        <FotoPendiente name={name} />
      )}
      <figcaption className={styles.nombre}>{name}</figcaption>
    </figure>
  );
}

export default function Docentes(): React.JSX.Element {
  const docentes = [...docentesData.docentes].sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  return (
    <section className={styles.docentes}>
      <div className="container">
        <h2 className={styles.titulo}>Docentes</h2>
        <div className={styles.grid}>
          {docentes.map((docente) => (
            <Docente key={docente.name} {...docente} />
          ))}
        </div>
      </div>
    </section>
  );
}
