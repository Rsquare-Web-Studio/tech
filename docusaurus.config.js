// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RWS Tech',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://rsquarewebstudio.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/tech',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Rsquare-Web-Studio', // Usually your GitHub org/user name.
  projectName: 'tech', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          /* other docs plugin options */
        },
        blog: false,
        // docs: {
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Rsquare Web Studio',
        logo: {
          alt: 'Main Logo',
          src: 'img/logo.png',
        },
        items: [
          {
          type: 'html',
          position: 'right',
          value: '<a href="https://www.behance.com/rsquarewebstudio/" target="_blank" style="content: \'\'; width: 24px; height: 24px; background-image: url(\'img/behance.svg\'); background-repeat: no-repeat;  background-size: 24px 24px; display: flex">'
          },
          {
            type: 'html',
            position: 'right',
            value: '<a href="https://www.instagram.com/rsquarewebstudio/" target="_blank" style="content: \'\'; width: 24px; height: 24px; background-image: url(\'img/instagram.png\'); background-repeat: no-repeat;  background-size: 24px 24px; display: flex">'
          },
          {to: 'https://rsquarewebstudio.com', label: 'Home', position: 'left'},
          {to: 'https://blog.rsquarewebstudio.com', label: 'Blog', position: 'left'},
        ],
      },
      footer: {
        style: 'light',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          {
            title: 'Gallery',
            items: [
              {
                label: 'Tech Headhunters',
                href: 'https://rsquarewebstudio.com/gallery/tech-headhunters',
              },
              {
                label: 'Tavi Grill',
                href: 'https://rsquarewebstudio.com/gallery/tavi-grill',
              },
              {
                label: 'The Villa',
                href: 'https://rsquarewebstudio.com/gallery/the-villa'
              }
            ],
          },
          {
            title: 'Projects',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
          {
            title: `Let's Connect`,
            items: [
              {
                label: 'Instagram',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Behance',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'WhatsApp',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
        ],
        // logo: {
        //   alt: 'Meta Open Source Logo',
        //   // This default includes a positive & negative version, allowing for
        //   // appropriate use depending on your site's style.
        //   src: '/img/footer.png',
        //   href: 'https://opensource.fb.com',
        // },
        copyright: `Copyright © ${new Date().getFullYear()} Rsquare Web Studio`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
