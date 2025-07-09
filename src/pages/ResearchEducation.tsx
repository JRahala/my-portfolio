import React from 'react';
import styles from '../styles/ResearchEducation.module.css';

import mitLogo from '../assets/logos/mit.png';
import princetonLogo from '../assets/logos/princeton.svg';
import imperialLogo from '../assets/logos/imperial.png';
import etonLogo from '../assets/logos/eton.png';

const courses = [
  'Algorithms', 'Advanced Programming', 'Computational Neuroscience',
  'Quantum Computing', 'Theory of Computation', 'Machine Learning',
  'Information Theory', 'Numerical Methods', 'Computer Vision',
  'Game Theory', 'Statistics', 'Linear Algebra'
];

type TimelineEntryProps = {
  logo: string;
  alt: string;
  date: string;
  title: string;
  description: string;
};

const TimelineEntry: React.FC<TimelineEntryProps> = ({ logo, alt, date, title, description }) => (
  <div className={styles.entry}>
    <div className={styles.logoWrapper}>
      <img src={logo} className={styles.logo} alt={alt} />
    </div>
    <div className={styles.date}>{date}</div>
    <div className={styles.details}>
      <strong>{title}</strong><br />
      {description}
    </div>
  </div>
);

const educationEntries: TimelineEntryProps[] = [
  {
    logo: princetonLogo,
    alt: 'Princeton University Logo',
    date: 'Aug 2022 – May 2026',
    title: 'BSE in Computer Science & Mathematics — Princeton University',
    description:
      'Undergraduate studies with departmental honors. Coursework in theoretical CS, machine learning, quantum computing, and applied mathematics. Engaged in original research and lab work from sophomore year onward.',
  },
  {
    logo: etonLogo,
    alt: 'Eton College Logo',
    date: 'Sept 2018 – July 2022',
    title: 'King’s Scholar & New Foundation Scholar — Eton College',
    description:
      'Conducted independent research in symbolic logic and foundational mathematics. Authored an extended dissertation and mentored junior scholars in problem-solving and formal reasoning.',
  },
];

const researchEntries: TimelineEntryProps[] = [
  {
    logo: princetonLogo,
    alt: 'Princeton Logo',
    date: 'Dec 2024 – Present',
    title: 'Princeton Algorithms Lab — Research Assistant',
    description:
      'Worked with Prof. Robert Tarjan on concurrent data structures. Developed a lock-free version of ZipTrees — a novel concurrent self-balancing binary search tree — with proof of correctness and benchmark validation.',
  },
  {
    logo: mitLogo,
    alt: 'MIT CSAIL Logo',
    date: 'May 2024 – Aug 2024',
    title: 'MIT CSAIL — Research Intern',
    description:
      'Under Prof. Manolis Kellis, developed methods to align variational autoencoder latent spaces using Procrustes analysis. Work applied to biological datasets to improve representation consistency and interpretability.',
  },
  {
    logo: imperialLogo,
    alt: 'Imperial College Logo',
    date: 'Oct 2020 – Jan 2021',
    title: 'Imperial College London — Research Assistant',
    description:
      'Built and trained CNNs to classify embryo viability in IVF clinics with Dr. Cristina Hickman. Model results contributed to early-stage clinical decision-making tools.',
  },
];


const ResearchEducation: React.FC = () => (
  <section className={styles.container}>
    {/* Header Section */}
    <div className={styles.header}>
      <h2>Research & Education</h2>
      <p className={styles.gpa}>
        Departmental GPA: <strong>3.96</strong> &nbsp;|&nbsp;
        <a href="/transcript.pdf" target="_blank">View Transcript</a>
      </p>
      <div className={styles.tags}>
        {courses.map(course => (
          <span key={course} className={styles.tag}>{course}</span>
        ))}
      </div>
    </div>

    {/* EDUCATION SECTION */}
    <h3 className={styles.subheading}>Formal Education</h3>
    <div className={styles.timeline}>
      {educationEntries.map((entry, index) => (
        <TimelineEntry key={index} {...entry} />
      ))}
    </div>


  {/* RESEARCH SECTION */}
  <h3 className={styles.subheading}>Research Projects & Internships</h3>
  <div className={styles.timeline}>
    {researchEntries.map((entry, index) => (
      <TimelineEntry key={index} {...entry} />
    ))}
  </div>
  
  </section>
);

export default ResearchEducation;
