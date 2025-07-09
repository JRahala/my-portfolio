import React from 'react';
import styles from '../styles/AwardsMedia.module.css';

// import bbcLogo from '../assets/logos/bbc.png';
import guardianLogo from '../assets/logos/guardian.jpg';
// import mensaLogo from '../assets/logos/mensa.png';
import etonLogo from '../assets/logos/eton.png';
import timesLogo from '../assets/logos/times2.png';
import channelfLogo from '../assets/logos/channel4.png'

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
  date: 'Dec 2021',
  title: 'Countdown Star Targets More TV Success',
  description: 'Guardian feature on Jasamrit’s run on Channel 4 Countdown and his aspirations toward University Challenge and Mastermind.',
  sources: [
    {
      name: 'The Guardian',
      link: 'https://www.theguardian.com/tv-and-radio/2021/dec/10/countdown-star-jasamrit-rahala-17-targets-more-tv-success',
      logo: guardianLogo,
      date: 'Dec 10, 2021',
      description: 'Profile covering his 100% Mensa IQ, Eton background and Countdown finals ambitions.'
    }
  ]
  },
  {
    date: 'Nov 2021',
    title: 'Eton’s Countdown Champion',
    description: 'Eton College celebrates his 7‑win streak and finals qualification on Channel 4’s Countdown.',
    sources: [
      {
        name: 'Eton College',
        link: 'https://www.etoncollege.com/news-and-diary/school-news/etons-countdown-champion/',
        logo: etonLogo,
        date: 'Nov 3, 2021',
        description: 'College news recounting his performance and standout conundrum moments.'
      }
    ]
  },
  {
    date: 'Oct 2021',
    title: 'From Humble Beginnings to Countdown Finals',
    description: 'The Times profiles his journey from a modest Slough upbringing to the heart of national quiz success.',
    sources: [
      {
        name: 'The Times',
        link: 'https://www.thetimes.com/culture/tv-radio/article/from-two-up-two-down-to-eton-and-now-teen-genius-is-in-countdown-finals-9f8hgsgfp',
        logo: timesLogo, // replace with Times logo asset
        date: 'Oct/Nov 2021',
        description: 'Coverage of his background, scholarship to Eton, and strong Countdown run.'
      }
    ]
  },
  {
    date: 'May 2015',
    title: 'Child Genius 2015',
    description: 'Youngest Series finalist of prime time TV show, Child Genius on Channel 4',
    sources: [
      { 
        name: 'Channel 4',
        link: 'https://www.channel4.com/press/news/child-genius',
        logo: channelfLogo,
        date: 'May 2015',
        description: 'Youngest Series finalist of prime time TV show, Child Genius on Channel 4',
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
