import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';


// Si, esto es horrible pero los assets estaticos parece que docusarus los quiere prevcar
import PekeImg from '@site/static/img/peke.jpeg';
import NicoImg from '@site/static/img/nico.jpg';
import GonzaImg from '@site/static/img/gonza.jpeg';
import EmmaImg from '@site/static/img/emma.jpeg'
import ManuBImg from '@site/static/img/manub.jpg';
import ManuCImg from '@site/static/img/manuc.jpg';
import ArielImg from '@site/static/img/ariel.jpeg';
import NicoHImg from '@site/static/img/nicoh.png';
import SofiImg from '@site/static/img/sofi.jpeg';
import ConraIMG from '@site/static/img/conra.jpeg';
import PedroIMG from '@site/static/img/pedroimg.jpeg';

type ColabItem = {
  name : string,
  picture : string
};

const ColabList: ColabItem[] = [
  {
    name: 'Peke',
    picture: PekeImg,
  },
  {
    name: 'Nico R',
    picture: NicoImg,
  },
  {
    name: 'Gonza',
    picture: GonzaImg,
  },
  {
    name: 'Emma',
    picture: EmmaImg,
  },
  {
    name: 'Manu B',
    picture: ManuBImg,
  },
  {
    name: 'Manu C',
    picture: ManuCImg,
  },
  {
    name: 'Ariel',
    picture: ArielImg,
  },
  {
    name: 'Nico H',
    picture: NicoHImg,
  },
  {
    name: 'Sofi',
    picture: SofiImg,
  },
  {
    name: 'Conra',
    picture : ConraIMG
  },
  {
    name: 'Pedro',
    picture : PedroIMG
  }
];

function Colab({ name, picture }: ColabItem) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
          <img className={styles.featureIMG} alt="Foto del colaborador" src={picture}/>
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
