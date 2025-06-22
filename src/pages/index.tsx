import React from 'react';
import ReactDOM from 'react-dom';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 style={{textAlign:'center',fontSize:"3rem"}}>{siteConfig.title}</h1> 
        <h2 style={{fontSize:"2.3rem", textAlign:'center'}}>{siteConfig.tagline}</h2>
        <div className={styles.buttons}>
          <Link    
            className="button button--secondary button--lg"
            to="https://introaldesarr-pun2471.slack.com//">
            Canal de comunicación - Slack
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.tagline}`}
      description="Introducción al Desarrollo de Software - Cátedra Camejo - FIUBA.">
      <HomepageHeader />
      <main>
        <div className="container" style={{paddingTop: '2rem', paddingBottom: '2rem', textAlign: 'center'}}>
          <p style={{fontSize: '1.2rem'}}>
            Bienvenidos al curso de Introducción al Desarrollo de Software de la cátedra Camejo en FIUBA.
            Aquí encontrarás todo el material necesario, cronograma, guías y más para comenzar tu camino en el mundo de la programación y el desarrollo de software.
          </p>
        </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
