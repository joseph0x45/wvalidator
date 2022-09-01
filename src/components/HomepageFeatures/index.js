import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Open Source',
    Svg: require('@site/static/img/os.svg').default,
    description: (
      <>
        WValidator is also yours. And we will be very happy if users start implementing their own validators. Just clone the repo, read some code and you are ready to go
      </>
    ),
  },
  {
    title: 'Written in TypeScript',
    Svg: require('@site/static/img/ts.svg').default,
    description: (
      <>
        WValidator uses Type Safety under the hood, to better control your inputs values. Written in TypeScript and converted into ES6
      </>
    ),
  },
  {
    title: 'Zero Dependencies',
    Svg: require('@site/static/img/zero.svg').default,
    description: (
      <>
        Work out of the box. No JQuery or any library needed. Just pure JavaScript. Can be used as ES6 modules or Global scripts
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
