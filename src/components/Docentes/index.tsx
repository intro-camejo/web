import React, {useState} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import docentesData from '@site/src/data/docentes.json';

type DocenteItem = {
  name: string;
  pictures: string[];
};

function Docente({name, pictures}: DocenteItem) {
  const [currentImage, setCurrentImage] = useState(0);
  const imgSrc = useBaseUrl(pictures[currentImage]);
  const hasMultiplePictures = pictures.length > 1;

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % pictures.length);
  };

  const picture = (
    <img
      className={styles.foto}
      alt={`Foto de ${name}, docente del curso`}
      src={imgSrc}
    />
  );

  return (
    <figure className={styles.docente}>
      {hasMultiplePictures ? (
        <button
          type="button"
          className={styles.fotoButton}
          onClick={nextImage}
          aria-label={`Ver otra foto de ${name}`}>
          {picture}
        </button>
      ) : (
        picture
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
