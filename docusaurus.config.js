module.exports = {
  title: 'DreamTime - Fake Nudes Application',
  tagline: 'Use artificial intelligence to create fake nudes.',
  url: 'https://time.dreamnet.tech',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'dreamnettech', // Usually your GitHub org/user name.
  projectName: 'dreamtime', // Usually your repo name.
  customFields: {
    title: 'DreamTime'
  },
  themeConfig: {
    colorMode: {
      defaultMode: 'dark'
    },
    image: 'img/screely-1587258791179.png',
    announcementBar: {},
    navbar: {
      title: 'DreamTime',
      items: [
        {
          label: 'About',
          to: 'docs/dreamtime',
          position: 'left'
        },
        {
          to: 'docs/installation',
          label: 'Download',
          position: 'left'
        },
        {
          to: 'docs/support/support-us',
          label: 'Support us',
          position: 'left'
        },
        {
          to: 'docs/support/feedback',
          label: 'Contact',
          position: 'left'
        },
        {
          label: 'GitHub',
          href: 'https://github.com/dreamnettech/dreamtime',
          position: 'right',
        }
      ],
    },
    footer: {
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'DreamNet',
              href: 'https://www.dreamnet.tech',
            },
            {
              label: 'Chat',
              href: 'https://chat.dreamnet.tech',
            },
            {
              label: 'Discussions',
              href: 'https://forum.dreamtime.tech',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/dreamnettech/dreamtime',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/DreamNetTechno',
            },
            {
              label: 'Facebook',
              href: 'https://web.facebook.com/DreamNetTechnology',
            },
          ],
        },
        {
          title: 'Support us',
          items: [
            {
              label: 'Patreon',
              href: 'https://www.patreon.com/dreamnet',
            },
            {
              label: 'More...',
              href: 'https://dreamtime.tech/docs/support/support-us',
            }
          ],
        },
        {
          title: 'Mirrors',
          items: [
            {
              label: 'IPFS',
              href: 'https://www-dreamtime-tech.ipns.dweb.link/'
            },
            {
              label: 'Tor',
              href: 'http://cbndl6ks4nlxd34eknrjdfm45vm3huzr67ke6auar3n46ihij55zp5yd.onion'
            },
            {
              label: 'dreamnet.crypto',
              href: 'http://dreamnet.crypto/'
            },
            {
              label: 'About mirrors',
              href: 'https://www.patreon.com/posts/48156448'
            }
          ]
        }
      ],
      copyright: `<br>Copyright © ${new Date().getFullYear()} DreamNet. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        sitemap: {
          cacheTime: 600 * 1000, // 600 sec - cache purge period
          changefreq: 'weekly',
          priority: 0.5,
        },
      },
    ],
  ],
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap'
  ],
  plugins: [
    '@dreamnet/docusaurus-plugin-dreamtime'
  ]
};
