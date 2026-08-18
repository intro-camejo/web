import React from 'react';
import Layout from '@theme/Layout';
import {Enlaces, EstaSemana, Hero} from '@site/src/components/Home';
import Docentes from '@site/src/components/Docentes';

export default function Home(): React.JSX.Element {
  // Sin `title`, la pestaña usa solo el título del sitio: pasarle el tagline
  // acá lo repetiría entero.
  return (
    <Layout description="Introducción al Desarrollo de Software - Cátedra Camejo - FIUBA.">
      <Hero />
      <main>
        <EstaSemana />
        <Enlaces />
        <Docentes />
      </main>
    </Layout>
  );
}
