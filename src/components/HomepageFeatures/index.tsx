import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import docentesData from '@site/src/data/docentes.json';

type ColabItem = {
  name: string;
  pictures: string[];
};

function Colab({ name, pictures }: ColabItem) {
  const [currentImage, setCurrentImage] = useState(0);
  const imgSrc = pictures[currentImage];

  const handleClick = () => {
    setCurrentImage((prev) => (prev + 1) % pictures.length);
  };

  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <img
          className={styles.featureIMG}
          alt={`Foto de ${name}, docente del curso`}
          src={imgSrc}
          onClick={handleClick}
          style={{ cursor: pictures.length > 1 ? 'pointer' : 'default' }}
        />
      </div>
      <div className={clsx("text--center padding-horiz--md", styles.colabName)}>
        <h3>{name}</h3>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  const sortedColabs = [...docentesData.docentes].sort((a, b) => a.name.localeCompare(b.name));
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.colabsTitle}>
          <h1>{"Docentes"}</h1>
        </div>
        <div className="row" style={{ justifyContent: 'center' }}>
          {sortedColabs.map((props, idx) => (
            <Colab key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
