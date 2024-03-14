import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/web/__docusaurus/debug',
    component: ComponentCreator('/web/__docusaurus/debug', '586'),
    exact: true
  },
  {
    path: '/web/__docusaurus/debug/config',
    component: ComponentCreator('/web/__docusaurus/debug/config', '9ce'),
    exact: true
  },
  {
    path: '/web/__docusaurus/debug/content',
    component: ComponentCreator('/web/__docusaurus/debug/content', '964'),
    exact: true
  },
  {
    path: '/web/__docusaurus/debug/globalData',
    component: ComponentCreator('/web/__docusaurus/debug/globalData', 'f62'),
    exact: true
  },
  {
    path: '/web/__docusaurus/debug/metadata',
    component: ComponentCreator('/web/__docusaurus/debug/metadata', 'fec'),
    exact: true
  },
  {
    path: '/web/__docusaurus/debug/registry',
    component: ComponentCreator('/web/__docusaurus/debug/registry', 'b07'),
    exact: true
  },
  {
    path: '/web/__docusaurus/debug/routes',
    component: ComponentCreator('/web/__docusaurus/debug/routes', 'b77'),
    exact: true
  },
  {
    path: '/web/blog',
    component: ComponentCreator('/web/blog', '0e8'),
    exact: true
  },
  {
    path: '/web/blog/archive',
    component: ComponentCreator('/web/blog/archive', '01d'),
    exact: true
  },
  {
    path: '/web/blog/first-blog-post',
    component: ComponentCreator('/web/blog/first-blog-post', 'dc8'),
    exact: true
  },
  {
    path: '/web/blog/long-blog-post',
    component: ComponentCreator('/web/blog/long-blog-post', 'c55'),
    exact: true
  },
  {
    path: '/web/blog/mdx-blog-post',
    component: ComponentCreator('/web/blog/mdx-blog-post', '422'),
    exact: true
  },
  {
    path: '/web/blog/tags',
    component: ComponentCreator('/web/blog/tags', '0ed'),
    exact: true
  },
  {
    path: '/web/blog/tags/docusaurus',
    component: ComponentCreator('/web/blog/tags/docusaurus', '65b'),
    exact: true
  },
  {
    path: '/web/blog/tags/facebook',
    component: ComponentCreator('/web/blog/tags/facebook', 'a2c'),
    exact: true
  },
  {
    path: '/web/blog/tags/hello',
    component: ComponentCreator('/web/blog/tags/hello', '64b'),
    exact: true
  },
  {
    path: '/web/blog/tags/hola',
    component: ComponentCreator('/web/blog/tags/hola', '8fb'),
    exact: true
  },
  {
    path: '/web/blog/welcome',
    component: ComponentCreator('/web/blog/welcome', '56e'),
    exact: true
  },
  {
    path: '/web/cronograma',
    component: ComponentCreator('/web/cronograma', '659'),
    exact: true
  },
  {
    path: '/web/markdown-page',
    component: ComponentCreator('/web/markdown-page', 'e32'),
    exact: true
  },
  {
    path: '/web/playlist',
    component: ComponentCreator('/web/playlist', 'b02'),
    exact: true
  },
  {
    path: '/web/regimen-cursada',
    component: ComponentCreator('/web/regimen-cursada', '074'),
    exact: true
  },
  {
    path: '/web/docs',
    component: ComponentCreator('/web/docs', '4d7'),
    routes: [
      {
        path: '/web/docs/Material',
        component: ComponentCreator('/web/docs/Material', '319'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/web/docs/Material/Clases',
        component: ComponentCreator('/web/docs/Material/Clases', 'f08'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/web/docs/Material/Diapos',
        component: ComponentCreator('/web/docs/Material/Diapos', 'b94'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/web/docs/Material/Material complementario',
        component: ComponentCreator('/web/docs/Material/Material complementario', '21a'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/web/',
    component: ComponentCreator('/web/', '019'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
