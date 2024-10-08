module.exports = function(context) {
  return {
    name: '@dreamnet/docusaurus-plugin-dreamtime',

    injectHtmlTags() {
      const html = {
        headTags: [
          /* SEO */
          {
            tagName: 'meta',
            attributes: {
              name: 'theme-color',
              content: '#7db8e8',
            }
          },
          {
            tagName: 'meta',
            attributes: {
              name: 'description',
              content: 'The easiest to use application to create fake nudes from photos and videos. Available for free for Windows, Mac and Linux.'
            }
          },
          {
            tagName: 'meta',
            attributes: {
              name: 'keywords',
              content: 'dreamtime, deepnude, dreampower, dreamtime app, dreamtime download, nudify, dreamtime nudify, dreamtime checkpoints, deepfake'
            }
          },
          {
            tagName: 'meta',
            attributes: {
              name: 'robots',
              content: 'index,follow'
            }
          },
          {
            tagName: 'meta',
            attributes: {
              name: 'rating',
              content: 'adult'
            }
          },
          {
            tagName: 'meta',
            attributes: {
              property: 'og:site_name',
              content: 'DreamTime'
            }
          },
          {
            tagName: 'meta',
            attributes: {
              property: 'og:type',
              content: 'website'
            }
          },
          {
            tagName: 'meta',
            attributes: {
              property: 'og:description',
              content: 'The easiest to use application to create fake nudes from photos and videos. Available for free for Windows, Mac and Linux.'
            }
          },
          {
            tagName: 'meta',
            attributes: {
              property: 'og:locale',
              content: 'en_US'
            }
          },
          {
            tagName: 'meta',
            attributes: {
              name: 'twitter:site',
              content: '@opendreamnetdev'
            }
          },
          {
            tagName: 'meta',
            attributes: {
              name: 'twitter:creator',
              content: '@kolessios'
            }
          },
          {
            tagName: 'script',
            attributes: {
              type: 'application/ld+json'
            },
            innerHTML: `
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "DreamTime",
              "downloadUrl": "https://www.dreamtime.tech/docs/installation",
              "screenshot": "https://www.dreamtime.tech/assets/images/screely-1615444647332-b96e9ea3dfabf6b116dc715af689464f.png",
              "operatingSystem": "Windows 7, macOS 10.15, Linux",
              "applicationCategory": "https://schema.org/EntertainmentApplication",
              "aggregateRating": {
                "@type": "AggregateRating",
                "bestRating": "10.0",
                "worstRating": "0.0",
                "ratingValue": "9.0",
                "ratingCount": "39"
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            }`,
          },
          /* PreConnect */
          {
            tagName: 'link',
            attributes: {
              rel: 'preconnect',
              href: 'https://www.googletagmanager.com',
            },
          },
          {
            tagName: 'link',
            attributes: {
              rel: 'preconnect',
              href: 'https://ads.opendreamnet.com',
            },
          },
          /* Google Tag Manager */
          {
            tagName: 'script',
            innerHTML: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KHBZKM5');`,
          },
          /* DreamNet Ads */
          {
            tagName: 'script',
            attributes: {
              async: true,
              src: '//ads.opendreamnet.com/delivery/asyncjs.php',
            },
          },
          {
            tagName: 'script',
            innerHTML: `
            history.pushState = ( f => function pushState(){
              var ret = f.apply(this, arguments);
              window.dispatchEvent(new Event('pushstate'));
              window.dispatchEvent(new Event('locationchange'));
              return ret;
            })(history.pushState);

            history.replaceState = ( f => function replaceState(){
              var ret = f.apply(this, arguments);
              window.dispatchEvent(new Event('replacestate'));
              window.dispatchEvent(new Event('locationchange'));
              return ret;
            })(history.replaceState);

            window.addEventListener('locationchange', function() {
              if (window.reviveAsync && window.reviveAsync["3fe087377ab3999f9bd455cef8976f0b"]) {
                setTimeout(function() {
                  window.reviveAsync["3fe087377ab3999f9bd455cef8976f0b"].refresh();
                  console.log('Refresh!');
                }, 1000);
              }
            })
            `
          },
          /* Monetization */
          {
            tagName: 'meta',
            attributes: {
              name: 'monetization',
              content: process.env.META_MONETIZATION || '$ilp.uphold.com/ZjjF93fX8YKy'
            }
          }
        ],

        postBodyTags: [
          {
            tagName: 'noscript',
            innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KHBZKM5" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          },
        ]
      }

        html.headTags.push()

      return html
    }
  }
}
