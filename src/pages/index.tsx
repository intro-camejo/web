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
        <h1 className="hero__title" style={{textAlign:'center'}}>{siteConfig.title}</h1>
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
      title={`Intro Camejo`}
      description="Página de cátedra">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
