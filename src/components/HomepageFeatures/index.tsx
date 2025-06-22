import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';


// Si, esto es horrible pero los assets estaticos parece que docusarus los quiere prevcar
import PekeImg from '@site/static/img/peke.jpeg';
import NicoImg from '@site/static/img/nico.jpg';
import GonzaImg from '@site/static/img/gonza.jpeg';
import EmmaImg from '@site/static/img/emma.jpeg'
import ManuBImg from '@site/static/img/manub.jpg';
import ManuCImg from '@site/static/img/manu1.jpeg';
import ManuC2Img from '@site/static/img/manu2.jpeg';
import ManuC3Img from '@site/static/img/image.png';
import ArielImg from '@site/static/img/ariel.jpeg';
import NicoHImg from '@site/static/img/nicoh.png';
import SofiImg from '@site/static/img/sofi.jpeg';
import Sofi2Img from '@site/static/img/sofi2.jpeg';
import ConraIMG from '@site/static/img/conra.jpeg';
import PedroIMG from '@site/static/img/pedroimg.jpeg';
import LaraIMG from '@site/static/img/lara.jpeg';
import Nico2 from '@site/static/img/nico2.jpg';

type ColabItem = {
  name : string,
  pictures : string[]
};

const ColabList: ColabItem[] = [
  {
    name: 'Peke',
    pictures: [PekeImg],
  },
  {
    name: 'Nico R',
    pictures: [NicoImg, Nico2],
  },
  {
    name: 'Gonza',
    pictures: [GonzaImg],
  },
  {
    name: 'Emma',
    pictures: [EmmaImg],
  },
  {
    name: 'Manu B',
    pictures: [ManuBImg],
  },
  {
    name: 'Manu C',
    pictures: [ManuCImg, ManuC2Img, ManuC3Img],
  },
  {
    name: 'Ariel',
    pictures: [ArielImg],
  },
  {
    name: 'Nico H',
    pictures: [NicoHImg],
  },
  {
    name: 'Sofi',
    pictures: [SofiImg,Sofi2Img],
  },
  {
    name: 'Conra',
    pictures : [ConraIMG]
  },
  {
    name: 'Pedro',
    pictures : [PedroIMG]
  },
  {
    name: 'Lara',
    pictures : [LaraIMG]
  }
];

function Colab({ name, pictures }: ColabItem) {

  const [currentImage, setCurrentImage] = useState(0);
  
  const handleClick = () => {
    setCurrentImage((prev) => (prev + 1) % pictures.length);
  };
  
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <img
          className={styles.featureIMG}
          alt={`Foto de ${name}, docente del curso`}
          src={pictures[currentImage]}
          onClick={handleClick}
          style={{ cursor: pictures.length > 1 ? 'pointer' : 'default' }}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{name}</h3>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {

  const sortedColabs = ColabList.sort( (a,b) => a.name.localeCompare(b.name) );
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.colabsTitle}>
          <h1>{"Docentes"}</h1>
        </div>
        <div className="row">
          {sortedColabs.map((props, idx) => (
            <Colab key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
