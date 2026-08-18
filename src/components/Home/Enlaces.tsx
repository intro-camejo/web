import React from 'react';
import Link from '@docusaurus/Link';
import {CodigoIcon, DocumentoIcon, LibroIcon, PlayIcon} from './icons';
import styles from './styles.module.css';

type Enlace = {
  icon: React.ReactNode;
  title: string;
  description: string;
  to: string;
};

const YOUTUBE_URL = 'https://www.youtube.com/@IntroalDesarrollodeSoftw-bi8xj';

// Un enlace con `to` vacío no se renderiza, así no queda un link muerto.
const enlaces: Enlace[] = (
  [
    {
      icon: <LibroIcon />,
      title: 'Material',
      description: 'Apuntes, guías y clases para preparar o repasar.',
      to: '/docs/Material/',
    },
    {
      icon: <PlayIcon />,
      title: 'Clases grabadas',
      description: 'Canal de YouTube con clases grabadas de cuatrismetres anteriores.',
      to: YOUTUBE_URL,
    },
    {
      icon: <CodigoIcon />,
      title: 'Trabajos Prácticos',
      description: 'Consigna del TP grupal, requisitos y pautas de entrega.',
      to: '/trabajos-practicos',
    },
    {
      icon: <DocumentoIcon />,
      title: 'Régimen de cursada',
      description: 'Modalidad, condiciones de aprobación y final.',
      to: '/regimen-cursada',
    },
  ] as Enlace[]
).filter((enlace) => enlace.to);

export default function Enlaces(): React.JSX.Element {
  return (
    <section className={styles.seccion}>
      <div className="container">
        <div className={styles.seccionHead}>
          <h2 className={styles.seccionTitulo}>Todo el curso</h2>
        </div>

        <div className={styles.enlacesGrid}>
          {enlaces.map(({icon, title, description, to}) => (
            <Link key={to} to={to} className={styles.enlace}>
              <span className={styles.enlaceHead}>
                <span className={styles.enlaceIcono}>{icon}</span>
                <span className={styles.enlaceTitulo}>{title}</span>
              </span>
              <span className={styles.enlaceDescripcion}>{description}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
