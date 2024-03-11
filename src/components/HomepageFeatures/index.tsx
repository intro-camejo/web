import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { Redirect } from '@docusaurus/router';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Régimen de cursada',
    Svg: require('@site/static/img/undraw_terms_re_6ak4.svg').default,
    description: (
      <>
        En búsqueda de una cursada justa para todos y todas.
      </>
    ),
    link: '/regimen-cursada',
  },
  {
    title: 'Cronograma',
    Svg: require('@site/static/img/undraw_online_calendar_re_wk3t.svg').default,
    description: (
      <>
        Cronograma de la materia para este primer cuatrimestre 2024
      </>
    ),
    link: '/cronograma',
  },
  {
    title: 'Material',
    Svg: require('@site/static/img/undraw_online_learning_re_qw08.svg').default,
    description: (
      <>
        Clases grabadas, diapositivas y material que iremos utilizando a lo largo de la cursada.
      </>
    ),
    link: '/docs/material',
  },
];

function Feature({ title, Svg, description, link }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={link} className="fake-link">
      <div className="text--center fake-link">
        <Svg className={styles.featureSvg} role="img"/>
      </div>
      </Link>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
