import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {BuzonIcon, ChatIcon, RelojIcon, UbicacionIcon} from './icons';
import styles from './styles.module.css';

const SLACK_URL = 'https://introaldesarr-pun2471.slack.com/';

// Formulario del buzón de quejas. Mientras esté vacío el botón no se renderiza,
// así no queda un link muerto en producción.
const BUZON_URL = 'https://forms.gle/eNntd1kjymuCZKmE7';

export default function Hero(): React.JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  const imagen = useBaseUrl('/img/tux-mate.png');

  return (
    <header className={styles.hero}>
      <div className={`container ${styles.heroInner}`}>
        <div className={styles.heroTexto}>
          <h1 className={styles.heroTitulo}>{siteConfig.title}</h1>
          <p className={styles.heroTagline}>{siteConfig.tagline}</p>

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
            <Link
              className={clsx(
                'button button--primary button--lg',
                styles.botonConIcono,
              )}
              to={SLACK_URL}>
              <ChatIcon />
              Slack del curso
            </Link>
            {BUZON_URL && (
              <Link
                className={clsx(
                  'button button--secondary button--outline button--lg',
                  styles.botonConIcono,
                )}
                to={BUZON_URL}>
                <BuzonIcon />
                Buzón de quejas
              </Link>
            )}
          </div>
        </div>

        <img className={styles.heroImagen} src={imagen} alt="" />
      </div>
    </header>
  );
}
