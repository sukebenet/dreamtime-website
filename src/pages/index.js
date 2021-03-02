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
    title: 'Open-source',
    imageUrl: 'img/features/undraw_open_source_1qxw.svg',
    description: (
      <>
        Source code available and totally free, without premium versions or cracks.
      </>
    ),
  },
  {
    title: 'Friendly user interface',
    imageUrl: 'img/features/undraw_trendy_interface_lg8x.svg',
    description: (
      <>
        More stable than DeepNude and easy to use thanks to its modern design.
      </>
    ),
  },
  {
    title: 'Body customization',
    imageUrl: 'img/features/undraw_adjustments_p22m.svg',
    description: (
      <>
        Create the body of your dreams, increase or decrease the size of the body parts or leave everything to random.
      </>
    ),
  },
  {
    title: 'Video support',
    imageUrl: 'img/features/undraw_video_files_fu10.svg',
    description: (
      <>
        Don't just stay with static photos, you can also nudify <b>GIFs, MP4 and WEBM</b> videos!
      </>
    ),
  },
  {
    title: 'Photos and videos from anywhere',
    imageUrl: 'img/features/undraw_upload_87y9.svg',
    description: (
      <>
        Open files or folders from your computer, you can also open files from Instagram and the web.
      </>
    ),
  },
  {
    title: 'Photo tools',
    imageUrl: 'img/features/undraw_smart_resize_wpn8.svg',
    description: (
      <>
        Vitamined with editing tools for any case, you can also make the process fully automatic.
      </>
    ),
  },
  {
    title: 'Custom masks',
    imageUrl: 'img/features/undraw_making_art_759c.svg',
    description: (
      <>
        Powerful working method that allows you to edit the algorithm step by step and obtain results that only a human could achieve.
      </>
    ),
  },
  {
    title: 'Fast with NVIDIA',
    imageUrl: 'img/features/undraw_speed_test_wxl0.svg',
    description: (
      <>
        Use the power of your NVIDIA GPU to nudify in just a few seconds or use the slowest method for any CPU.
      </>
    ),
  },
  {
    title: 'One-click updates',
    imageUrl: 'img/features/undraw_update_uxn2.svg',
    description: (
      <>
        DreamTime and its components updates can be downloaded and installed from the app itself.
      </>
    ),
  },
  {
    title: 'Still using the old DeepNude?',
    imageUrl: 'img/features/undraw_blank_canvas_3rbb.svg',
    description: (
      <>
        Switch to DreamTime now and find out <a href="/docs/dreamtime#comparison">why it's better</a>.
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
          <p className="hero__subtitle">🙈 The easiest to use application to create fake nudes from photos and videos.</p>
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
