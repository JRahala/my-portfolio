import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/Projects.module.css';
import placeholderLogo from '../assets/logos/princeton.svg';

interface Project {
  title: string;
  date: string;
  description: string;
  tags: string[];
  link: string;
  logo: string;
}

const allProjects: Project[] = [
  {
    title: 'Concurrent Tree Engine',
    date: 'Mar 2024',
    description: 'A lock-free data structure library built in C++ for fast concurrent operations.',
    tags: ['C++', 'Concurrency', 'Algorithms'],
    link: '/blog/concurrent-tree-engine',
    logo: placeholderLogo
  },
  {
    title: 'GraphQL Research Dashboard',
    date: 'Jan 2024',
    description: 'A real-time dashboard visualizing ML experiment metadata using GraphQL and D3.',
    tags: ['React', 'D3.js', 'GraphQL'],
    link: '/blog/graphql-dashboard',
    logo: placeholderLogo
  }
];

const Projects: React.FC = () => {
  const [query, setQuery] = useState('');

  const filtered = allProjects.filter(project =>
    project.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Projects</h2>

      <input
        type="text"
        className={styles.search}
        placeholder="Search projects..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className={styles.grid}>
        {filtered.map((project, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.header}>
              <img src={project.logo} className={styles.logo} alt="Project logo" />
              <div className={styles.meta}>
                <strong className={styles.projectTitle}>
                  <Link to={project.link}>{project.title}</Link>
                </strong>
                <span className={styles.date}>{project.date}</span>
              </div>
            </div>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.tags}>
              {project.tags.map(tag => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
