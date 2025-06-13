import React from 'react';
import styles from '../styles/AwardsMedia.module.css';

import bbcLogo from '../assets/logos/bbc.png';
import guardianLogo from '../assets/logos/guardian.jpg';
import mensaLogo from '../assets/logos/mensa.png';
import etonLogo from '../assets/logos/eton.png';

interface MediaSource {
  name: string;
  link: string;
  logo: string;
  date: string;
  description: string;
}

interface MediaEvent {
  date: string;
  title: string;
  description: string;
  sources: MediaSource[];
}

const mediaEvents: MediaEvent[] = [
  {
    date: 'Mar 2013',
    title: '162+ Mensa IQ Score',
    description: 'Youngest in the UK to achieve full marks on the Mensa IQ test at age 11.',
    sources: [
      {
        name: 'Mensa UK',
        link: 'https://www.mensa.org.uk',
        logo: mensaLogo,
        date: 'Mar 2013',
        description: 'Official announcement and recognition by Mensa UK of the test result and historical context.'
      }
    ]
  },
  {
    date: 'Sept 2015',
    title: 'Child Genius Media Coverage',
    description: 'National press coverage related to participation in Child Genius and gifted education.',
    sources: [
      {
        name: 'BBC',
        link: 'https://www.bbc.co.uk/news/education-34363829',
        logo: bbcLogo,
        date: 'Sept 22, 2015',
        description: 'BBC Education segment highlighting young intellectual talents and the UK Child Genius programme.'
      },
      {
        name: 'The Guardian',
        link: 'https://www.theguardian.com/education/2016/jul/04/child-genius-profile',
        logo: guardianLogo,
        date: 'Jul 4, 2016',
        description: 'Feature article in The Guardian about the cultural and academic impact of Child Genius contestants.'
      }
    ]
  },
  {
    date: 'May 2022',
    title: 'Dual Scholar Recognition at Eton',
    description: 'Awarded the rare distinction of being both a King’s Scholar and a New Foundation Scholar.',
    sources: [
      {
        name: 'Eton College',
        link: 'https://www.etoncollege.com',
        logo: etonLogo,
        date: 'May 2022',
        description: 'Eton College announcement of concurrent scholar titles and academic recognition.'
      }
    ]
  }
];

const AwardsMedia: React.FC = () => (
  <section className={styles.container}>
    <h2 className={styles.title}>Awards & Media Appearances</h2>

    <div className={styles.timeline}>
      {mediaEvents.map((event, idx) => (
        <div key={idx} className={styles.event}>
          <div className={styles.header}>
            <div className={styles.date}>{event.date}</div>
            <div className={styles.meta}>
              <strong className={styles.titleText}>{event.title}</strong>
              <p className={styles.description}>{event.description}</p>
            </div>
          </div>

          <ul className={styles.sourceList}>
            {event.sources.map((source, sidx) => (
              <li key={sidx} className={styles.sourceItem}>
                <div className={styles.sourceLogo}>
                  <img src={source.logo} alt={`${source.name} logo`} />
                </div>
                <div className={styles.sourceDetails}>
                  <div className={styles.sourceHeader}>
                    <strong>{source.name}</strong> — <span className={styles.sourceDate}>{source.date}</span>
                  </div>
                  <p className={styles.sourceDescription}>{source.description}</p>
                  <a href={source.link} target="_blank" className={styles.linkButton}>Read article »</a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default AwardsMedia;
