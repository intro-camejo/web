import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {Enlaces, EstaSemana, Hero} from '@site/src/components/Home';
import Docentes from '@site/src/components/Docentes';

export default function Home(): React.JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.tagline}
      description="Introducción al Desarrollo de Software - Cátedra Camejo - FIUBA.">
      <Hero />
      <main>
        <EstaSemana />
        <Enlaces />
        <Docentes />
      </main>
    </Layout>
  );
}
