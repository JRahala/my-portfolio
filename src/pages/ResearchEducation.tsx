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

      <div className={styles.entry}>
        <div className={styles.logoWrapper}>
          <img src={princetonLogo} className={styles.logo} alt="Princeton University Logo" />
        </div>
        <div className={styles.date}>Aug 2022 – May 2026</div>
        <div className={styles.details}>
          <strong>BSE in Computer Science & Mathematics — Princeton University</strong><br />
          Undergraduate studies with departmental honors. Coursework in theoretical CS, machine learning, quantum computing, and applied mathematics.
          Engaged in original research and lab work from sophomore year onward.
        </div>
      </div>

      <div className={styles.entry}>
        <div className={styles.logoWrapper}>
          <img src={etonLogo} className={styles.logo} alt="Eton College Logo" />
        </div>
        <div className={styles.date}>Sept 2018 – July 2022</div>
        <div className={styles.details}>
          <strong>King’s Scholar & New Foundation Scholar — Eton College</strong><br />
          Conducted independent research in symbolic logic and foundational mathematics.
          Authored an extended dissertation and mentored junior scholars in problem-solving and formal reasoning.
        </div>
      </div>

    </div>

    {/* RESEARCH SECTION */}
    <h3 className={styles.subheading}>Research Projects & Internships</h3>
    <div className={styles.timeline}>

      <div className={styles.entry}>
        <div className={styles.logoWrapper}>
          <img src={princetonLogo} className={styles.logo} alt="Princeton Logo" />
        </div>
        <div className={styles.date}>Dec 2024 – Present</div>
        <div className={styles.details}>
          <strong>Princeton Algorithms Lab — Research Assistant</strong><br />
          Worked with Prof. Robert Tarjan on concurrent data structures.
          Developed a lock-free version of ZipTrees — a novel concurrent self-balancing binary search tree — with proof of correctness and benchmark validation.
        </div>
      </div>

      <div className={styles.entry}>
        <div className={styles.logoWrapper}>
          <img src={mitLogo} className={styles.logo} alt="MIT CSAIL Logo" />
        </div>
        <div className={styles.date}>May 2024 – Aug 2024</div>
        <div className={styles.details}>
          <strong>MIT CSAIL — Research Intern</strong><br />
          Under Prof. Manolis Kellis, developed methods to align variational autoencoder latent spaces using Procrustes analysis.
          Work applied to biological datasets to improve representation consistency and interpretability.
        </div>
      </div>

      <div className={styles.entry}>
        <div className={styles.logoWrapper}>
          <img src={imperialLogo} className={styles.logo} alt="Imperial College Logo" />
        </div>
        <div className={styles.date}>Oct 2020 – Jan 2021</div>
        <div className={styles.details}>
          <strong>Imperial College London — Research Assistant</strong><br />
          Built and trained CNNs to classify embryo viability in IVF clinics with Dr. Cristina Hickman.
          Model results contributed to early-stage clinical decision-making tools.
        </div>
      </div>

    </div>
  </section>
);

export default ResearchEducation;
