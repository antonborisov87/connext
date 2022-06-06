import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {

    title: '👋 Адкрытасць',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Connext ўвасабляе дух адкрытага зыходнага кода з нуля.
        Connext вітае членаў каманды і супольнасці ўсіх полаў, этнічных груп, паходжання, арыентацыі з усіх юрысдыкцый.
      </>
    ),
  },
  {
    title: '🏃‍♀️ Скіраванасць на дзеянне',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Connext не проста гаворыць пра рэчы.
        Connext бязлітасна расстаўляе прыярытэты для самых важных задач і выконвае іх дзень за днём, як самастойна, так і ў камандзе.
      </>
    ),
  },
  {
    title: '🔍 Празрыстасць',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Connext адкрыты да карыстальнікаў і сумленны перад імі, калі нешта не працуе. Connext робіць гэта, асабліва калі гэта цяжка.
      </>
    ),
  },
  {
    title: '🔓 Прастата',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Connext імкнецца да прастаты ва ўсім, што робіць.
        Connext лічыць, што лепшыя прадукты і кампаніі ў свеце пабудаваныя такім чынам.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--6')}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div> */}
      <div className={styles.feature}>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
