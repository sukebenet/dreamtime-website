module.exports = {
  title: 'DreamTime',
  tagline: 'Use artificial intelligence to create fake nudes.',
  url: 'https://www.dreamtime.tech',
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
    image: 'assets/images/screely-1615444647332-b96e9ea3dfabf6b116dc715af689464f.png',
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
          to: 'https://www.opendreamnet.com/contact',
          label: 'Contact',
          position: 'left'
        },
        {
          to: 'https://github.com/dreamnettech/dreamtime/discussions',
          label: 'Forum',
          position: 'right'
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
              label: 'OpenDreamNet',
              href: 'https://www.opendreamnet.com',
            },
            {
              label: 'Forum',
              href: 'https://github.com/dreamnettech/dreamtime/discussions',
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
              href: 'https://twitter.com/opendreamnetdev',
            }
          ],
        },
        {
          title: 'Mirrors',
          items: [
            {
              label: 'IPFS',
              href: 'https://dweb.link/ipns/www.dreamtime.tech'
            },
            {
              label: 'Tor',
              href: 'http://cbndl6ks4nlxd34eknrjdfm45vm3huzr67ke6auar3n46ihij55zp5yd.onion'
            },
            {
              label: 'dreamnet.crypto',
              href: 'http://dreamnet.crypto/'
            }
          ]
        }
      ],
      copyright: `<br>Copyright © ${new Date().getFullYear()} OpenDreamNet. Built with Docusaurus.`,
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
  stylesheets: [],
  plugins: [
    '@dreamnet/docusaurus-plugin-dreamtime'
  ]
};
