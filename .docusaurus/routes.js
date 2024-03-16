import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/web/__docusaurus/debug',
    component: ComponentCreator('/web/__docusaurus/debug', '485'),
    exact: true
  },
  {
    path: '/web/__docusaurus/debug/config',
    component: ComponentCreator('/web/__docusaurus/debug/config', 'b7f'),
    exact: true
  },
  {
    path: '/web/__docusaurus/debug/content',
    component: ComponentCreator('/web/__docusaurus/debug/content', '435'),
    exact: true
  },
  {
    path: '/web/__docusaurus/debug/globalData',
    component: ComponentCreator('/web/__docusaurus/debug/globalData', '01d'),
    exact: true
  },
  {
    path: '/web/__docusaurus/debug/metadata',
    component: ComponentCreator('/web/__docusaurus/debug/metadata', 'f67'),
    exact: true
  },
  {
    path: '/web/__docusaurus/debug/registry',
    component: ComponentCreator('/web/__docusaurus/debug/registry', 'ac8'),
    exact: true
  },
  {
    path: '/web/__docusaurus/debug/routes',
    component: ComponentCreator('/web/__docusaurus/debug/routes', '6b5'),
    exact: true
  },
  {
    path: '/web/blog',
    component: ComponentCreator('/web/blog', '330'),
    exact: true
  },
  {
    path: '/web/blog/archive',
    component: ComponentCreator('/web/blog/archive', 'd6b'),
    exact: true
  },
  {
    path: '/web/blog/first-blog-post',
    component: ComponentCreator('/web/blog/first-blog-post', '342'),
    exact: true
  },
  {
    path: '/web/blog/long-blog-post',
    component: ComponentCreator('/web/blog/long-blog-post', 'd77'),
    exact: true
  },
  {
    path: '/web/blog/mdx-blog-post',
    component: ComponentCreator('/web/blog/mdx-blog-post', 'a19'),
    exact: true
  },
  {
    path: '/web/blog/tags',
    component: ComponentCreator('/web/blog/tags', 'd84'),
    exact: true
  },
  {
    path: '/web/blog/tags/docusaurus',
    component: ComponentCreator('/web/blog/tags/docusaurus', 'd63'),
    exact: true
  },
  {
    path: '/web/blog/tags/facebook',
    component: ComponentCreator('/web/blog/tags/facebook', '9cb'),
    exact: true
  },
  {
    path: '/web/blog/tags/hello',
    component: ComponentCreator('/web/blog/tags/hello', '512'),
    exact: true
  },
  {
    path: '/web/blog/tags/hola',
    component: ComponentCreator('/web/blog/tags/hola', 'd6b'),
    exact: true
  },
  {
    path: '/web/blog/welcome',
    component: ComponentCreator('/web/blog/welcome', 'df6'),
    exact: true
  },
  {
    path: '/web/cronograma',
    component: ComponentCreator('/web/cronograma', 'e15'),
    exact: true
  },
  {
    path: '/web/markdown-page',
    component: ComponentCreator('/web/markdown-page', 'a2d'),
    exact: true
  },
  {
    path: '/web/playlist',
    component: ComponentCreator('/web/playlist', '5d8'),
    exact: true
  },
  {
    path: '/web/regimen-cursada',
    component: ComponentCreator('/web/regimen-cursada', 'e93'),
    exact: true
  },
  {
    path: '/web/docs',
    component: ComponentCreator('/web/docs', '4dd'),
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
    component: ComponentCreator('/web/', '2d9'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
