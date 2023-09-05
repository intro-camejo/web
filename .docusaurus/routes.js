import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '109'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '0d4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '181'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '4b2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '573'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'eb6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '90a'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '202'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '8d2'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '3a0'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '670'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '37b'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '543'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'ca8'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'a43'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '475'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '000'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '0be'),
    exact: true
  },
  {
    path: '/cronograma',
    component: ComponentCreator('/cronograma', '93a'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '007'),
    exact: true
  },
  {
    path: '/regimen-cursada',
    component: ComponentCreator('/regimen-cursada', 'ae2'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '007'),
    routes: [
      {
        path: '/docs/Material/',
        component: ComponentCreator('/docs/Material/', '136'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Material/Clases',
        component: ComponentCreator('/docs/Material/Clases', '760'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Material/Diapos',
        component: ComponentCreator('/docs/Material/Diapos', '2c0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Material/Material complementario',
        component: ComponentCreator('/docs/Material/Material complementario', '8bc'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'a68'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
