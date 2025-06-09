// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

const config = {
  title: 'Intro al Desarrollo de Software',
  tagline: 'Página de la cátedra de Introducción al Desarrollo de Software (Camejo) de la Facultad de Ingeniería de la Universidad de Buenos Aires (FIUBA).',
  favicon: 'img/tron.svg',
  staticDirectories: ['public', 'static'],

  // Set the production url of your site here
  url: 'https://intro-camejo.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/web/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'intro-camejo', // Usually your GitHub org/user name.
  projectName: 'web', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {name: 'keywords', content: 'Introducción al Desarrollo de Software, 75.18, FIUBA, UBA, Cátedra Camejo, Programación, Algoritmos'},
      ],
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Intro',
        logo: {
          alt: 'Tron Intro',
          src: 'img/tron.svg',
        },
        items: [
          {
            to:"/regimen-cursada",
            position: 'left',
            label: 'Régimen de cursada',
          },
          {
            to:"/cronograma",
            position: 'left',
            label: 'Cronograma',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Material',
          },
          {
            to:"/trabajos-practicos",
            position: 'left',
            label: 'Trabajos Prácticos',
          },
          {
            to:"/playlist",
            position: 'left',
            label: 'Playlist',
          },
          {
            href: 'https://github.com/intro-camejo/web',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Introducción al Desarrollo de Software - (${new Date().getFullYear()})`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['bash', 'c', 'regex', 'docker'],
      },
    }),
};

module.exports = config;
