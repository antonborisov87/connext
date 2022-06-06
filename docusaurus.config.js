// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Connext',
  tagline: 'Артыкулы пра Connext па-беларуску',
  url: 'https://antonborisov87.github.io',
  baseUrl: '/connext/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/connextIcon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'antonborisov87', // Usually your GitHub org/user name.
  projectName: 'connext', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'by',
    locales: ['by'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        // {
        //sidebarPath: require.resolve('./sidebars.js'),
        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        // editUrl:
        //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        blog: {
          showReadingTime: true,
          blogTitle: 'Артыкулы',
          postsPerPage: 'ALL',
          blogSidebarTitle: 'Артыкулы',
          blogSidebarCount: 'ALL',
          sortPosts: 'ascending'
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Connext',
        logo: {
          alt: 'Connext Logo',
          src: 'img/connextIcon.png',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          { to: '/blog', label: 'Блог', position: 'left' },
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Пра Connext',
            items: [
              {
                label: 'Афіцыйны сайт',
                href: 'https://www.connext.network/about',
              },
              {
                label: 'Wiki',
                href: 'https://wiki.connext.academy',
              },
            ],
          },
          {
            title: 'Кам\'юніці',
            items: [
              {
                label: 'Блог',
                href: 'https://medium.com/connext',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/pm4TPr4w5g',
              },
              {
                label: 'Twitter',
                href: 'http://twitter.com/connextnetwork',
              },
            ],
          },
          {
            title: 'Стваральнік сайту',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/antonbelarus87',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/antonborisov87',
              },
            ],
          },
        ],
        copyright: `Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
