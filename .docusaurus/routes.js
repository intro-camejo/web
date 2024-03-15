import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/web/__docusaurus/debug',
    component: ComponentCreator('/web/__docusaurus/debug', 'f3f'),
    exact: true
  },
  {
    path: '/web/__docusaurus/debug/config',
    component: ComponentCreator('/web/__docusaurus/debug/config', 'eef'),
    exact: true
  },
  {
    path: '/web/__docusaurus/debug/content',
    component: ComponentCreator('/web/__docusaurus/debug/content', '353'),
    exact: true
  },
  {
    path: '/web/__docusaurus/debug/globalData',
    component: ComponentCreator('/web/__docusaurus/debug/globalData', '0f6'),
    exact: true
  },
  {
    path: '/web/__docusaurus/debug/metadata',
    component: ComponentCreator('/web/__docusaurus/debug/metadata', '3b7'),
    exact: true
  },
  {
    path: '/web/__docusaurus/debug/registry',
    component: ComponentCreator('/web/__docusaurus/debug/registry', '6ff'),
    exact: true
  },
  {
    path: '/web/__docusaurus/debug/routes',
    component: ComponentCreator('/web/__docusaurus/debug/routes', 'cb7'),
    exact: true
  },
  {
    path: '/web/blog',
    component: ComponentCreator('/web/blog', '7fc'),
    exact: true
  },
  {
    path: '/web/blog/archive',
    component: ComponentCreator('/web/blog/archive', 'dd9'),
    exact: true
  },
  {
    path: '/web/blog/first-blog-post',
    component: ComponentCreator('/web/blog/first-blog-post', 'f0e'),
    exact: true
  },
  {
    path: '/web/blog/long-blog-post',
    component: ComponentCreator('/web/blog/long-blog-post', '1ac'),
    exact: true
  },
  {
    path: '/web/blog/mdx-blog-post',
    component: ComponentCreator('/web/blog/mdx-blog-post', '0b2'),
    exact: true
  },
  {
    path: '/web/blog/tags',
    component: ComponentCreator('/web/blog/tags', 'd3b'),
    exact: true
  },
  {
    path: '/web/blog/tags/docusaurus',
    component: ComponentCreator('/web/blog/tags/docusaurus', '6bc'),
    exact: true
  },
  {
    path: '/web/blog/tags/facebook',
    component: ComponentCreator('/web/blog/tags/facebook', '34d'),
    exact: true
  },
  {
    path: '/web/blog/tags/hello',
    component: ComponentCreator('/web/blog/tags/hello', '757'),
    exact: true
  },
  {
    path: '/web/blog/tags/hola',
    component: ComponentCreator('/web/blog/tags/hola', '56e'),
    exact: true
  },
  {
    path: '/web/blog/welcome',
    component: ComponentCreator('/web/blog/welcome', '996'),
    exact: true
  },
  {
    path: '/web/cronograma',
    component: ComponentCreator('/web/cronograma', '3b2'),
    exact: true
  },
  {
    path: '/web/markdown-page',
    component: ComponentCreator('/web/markdown-page', '166'),
    exact: true
  },
  {
    path: '/web/playlist',
    component: ComponentCreator('/web/playlist', '893'),
    exact: true
  },
  {
    path: '/web/regimen-cursada',
    component: ComponentCreator('/web/regimen-cursada', 'a8f'),
    exact: true
  },
  {
    path: '/web/docs',
    component: ComponentCreator('/web/docs', '016'),
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
    component: ComponentCreator('/web/', '0eb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
