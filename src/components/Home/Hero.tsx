import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {ChatIcon, RelojIcon, UbicacionIcon, VideoIcon} from './icons';
import styles from './styles.module.css';

const SLACK_URL = 'https://introaldesarr-pun2471.slack.com/';

// Aula virtual de los martes. Mientras esté vacío el botón no se renderiza,
// así no queda un link muerto en producción.
const MEET_URL = 'https://meet.google.com/cjo-fcsf-qag';

export default function Hero(): React.JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  const imagen = useBaseUrl('/img/tux-mate.png');

  return (
    <header className={styles.hero}>
      <div className={`container ${styles.heroInner}`}>
        <div className={styles.heroTexto}>
          <p className={styles.heroKicker}>Cátedra Camejo · FIUBA</p>
          <h1 className={styles.heroTitulo}>{siteConfig.title}</h1>

          <ul className={styles.heroDatos}>
            <li>
              <RelojIcon />
              Martes y Jueves, 19 a 22 hs
            </li>
            <li>
              <UbicacionIcon />
              Martes virtual · Jueves en Paseo Colón, Aula 403
            </li>
          </ul>

          <div className={styles.heroBotones}>
            {MEET_URL && (
              <Link
                className={clsx(
                  'button button--primary button--lg',
                  styles.botonConIcono,
                )}
                to={MEET_URL}>
                <VideoIcon />
                Aula virtual
              </Link>
            )}
            <Link
              className={clsx(
                'button button--lg',
                // Sin link del Meet, Slack pasa a ser el botón principal.
                MEET_URL ? 'button--secondary button--outline' : 'button--primary',
                styles.botonConIcono,
              )}
              to={SLACK_URL}>
              <ChatIcon />
              Slack del curso
            </Link>
          </div>

          {MEET_URL && (
            <p className={styles.heroNota}>
              El aula virtual requiere iniciar sesión con tu cuenta de FIUBA.
            </p>
          )}
        </div>

        <img className={styles.heroImagen} src={imagen} alt="" />
      </div>
    </header>
  );
}
