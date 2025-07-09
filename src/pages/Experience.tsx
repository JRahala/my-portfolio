import React from 'react';
import styles from '../styles/Experience.module.css';
import { Link } from 'react-router-dom';

import mitLogo from '../assets/logos/mit.png';
import princetonLogo from '../assets/logos/princeton.svg';
import imperialLogo from '../assets/logos/imperial.png';
import teensInAILogo from '../assets/logos/teensinai.jpg';

const skills = [
  'Python', 'C++', 'PyTorch', 'React', 'Git',
  'Data Structures', 'Machine Learning', 'Concurrency', 'LaTeX', 'Research'
];

const experiences = [
  {
    logo: princetonLogo,
    date: 'Dec 2024 – Present',
    title: 'Research Assistant — Princeton Algorithms Lab',
    description:
      'Invented a lock-free concurrent ZipTree data structure with Prof. Robert Tarjan. Focused on concurrency, correctness proofs, and performance benchmarking.',
    tags: ['C++', 'Concurrency', 'Data Structures'],
    link: '/blog/princeton-ziptrees'
  },
  {
    logo: mitLogo,
    date: 'May 2024 – Aug 2024',
    title: 'Research Intern — MIT CSAIL',
    description:
      'Worked on aligning latent embeddings with VAEs and Procrustes under Prof. Manolis Kellis. Explored cross-domain biological datasets using unsupervised learning.',
    tags: ['Python', 'Autoencoders', 'Machine Learning'],
    link: '/blog/mit-csail'
  },
  {
    logo: imperialLogo,
    date: 'Oct 2020 – Jan 2021',
    title: 'Research Assistant — Imperial College London',
    description:
      'Built CNN-based embryo classifiers with Dr. Cristina Hickman using PyTorch. Assisted in training and evaluating models on IVF imaging data.',
    tags: ['PyTorch', 'Python', 'Computer Vision'],
    link: '/blog/imperial-ivf'
  },
  {
    logo: teensInAILogo,
    date: 'Jun 2020 – Sep 2020',
    title: 'Instructor — TeensInAI',
    description:
      'Taught AI fundamentals via Jupyter notebooks and live demos. Delivered hands-on sessions on ML concepts for high school students.',
    tags: ['Teaching', 'Python', 'Jupyter'],
    link: '/blog/teensinai'
  }
];

const Experience: React.FC = () => (
  <section className={styles.container}>
    <h2 className={styles.title}>Experience</h2>

    <div className={styles.tags}>
      {skills.map(skill => (
        <span key={skill} className={styles.tag}>{skill}</span>
      ))}
    </div>

    <div className={styles.timeline}>
      {experiences.map((exp, index) => (
        <div key={index} className={styles.entry}>
          <div className={styles.logoWrapper}>
            <img src={exp.logo} className={styles.logo} alt="Logo" />
          </div>
          <div className={styles.date}>{exp.date}</div>
          <div className={styles.details}>
            <strong>{exp.title}</strong><br />
            <p className={styles.description}>{exp.description}</p>
            <Link to={`${import.meta.env.BASE_URL}${exp.link}`} className={styles.linkButton}> Read more » </Link>
            <div className={styles.expTags}>
              {exp.tags.map(tag => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
