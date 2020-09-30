import React, { useEffect } from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Multi platform',
    imageUrl: 'img/features/undraw_programming_2svr.svg',
    description: (
      <>
        Available for <strong>Windows, Linux and Mac</strong>. By being open-source you can build a version for your operating system.
      </>
    ),
  },
  {
    title: 'Friendly user interface',
    imageUrl: 'img/features/undraw_trendy_interface_lg8x.svg',
    description: (
      <>
        Easy to use thanks to its modern design and stability that exceeds DeepNude.
      </>
    ),
  },
  {
    title: 'Create the body of your dreams',
    imageUrl: 'img/features/undraw_adjustments_p22m.svg',
    description: (
      <>
        Customize and create the body of your dreams, increase or decrease the size of the body parts or leave everything to random.
      </>
    ),
  },
  {
    title: 'Use files from anywhere',
    imageUrl: 'img/features/undraw_upload_87y9.svg',
    description: (
      <>
        Use files from your computer (folders too!), from Instagram or from all over the web.
      </>
    ),
  },
  {
    title: 'Photo tools',
    imageUrl: 'img/features/undraw_smart_resize_wpn8.svg',
    description: (
      <>
        Incorporated with easy-to-use tools to edit and crop your photo. You can also let the process to be completely automatic.
      </>
    ),
  },
  {
    title: 'Video support',
    imageUrl: 'img/features/undraw_video_files_fu10.svg',
    description: (
      <>
        Don't just stay with static photos, you can also nudify gifs, mp4 or webm videos!
      </>
    ),
  },
  {
    title: 'Custom masks',
    imageUrl: 'img/features/undraw_making_art_759c.svg',
    description: (
      <>
        Is the algorithm not doing a good job? With the custom masks mode you can help him and obtain results that only a human could achieve.
      </>
    ),
  },
  {
    title: 'Fast with NVIDIA',
    imageUrl: 'img/features/undraw_speed_test_wxl0.svg',
    description: (
      <>
        Use the power of your NVIDIA GPU to nudify photos in just a few seconds or use the slowest method for any CPU.
      </>
    ),
  },
  {
    title: 'One-click updates',
    imageUrl: 'img/features/undraw_update_uxn2.svg',
    description: (
      <>
        DreamTime, DreamPower and Checkpoints updates can be downloaded and installed from the app itself. All in one.
      </>
    ),
  },
  {
    title: 'Still using the old DeepNude?',
    imageUrl: 'img/features/undraw_blank_canvas_3rbb.svg',
    description: (
      <>
        Switch to DreamTime now and find out <a href="/docs/dreamtime#features">why it's better</a>.
      </>
    ),
  }
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={siteConfig.tagline}>
      <header className={classnames('hero', styles.heroBanner)}>
        <div className="container">
          <img src="img/logo.png" className="hero__logo" />
          <h1 className="hero__title">{siteConfig.customFields.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--primary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/installation')}>
              Download for free
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
