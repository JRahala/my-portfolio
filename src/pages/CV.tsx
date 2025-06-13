import React from 'react';
import styles from '../styles/CV.module.css';

const base = import.meta.env.BASE_URL;

const CV: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Curriculum Vitae</h2>
      <p className={styles.description}>
        Below you’ll find a full version of my CV embedded for convenient viewing.
        You may also download the CV or a short-form résumé using the links below.
      </p>

      <div className={styles.links}>
        <a href={`${base}Jasamrit Rahala.pdf`} target="_blank" rel="noopener noreferrer">📄 Download Full CV (PDF)</a>
        <a href={`${base}Jasamrit Rahala Resume.pdf`} target="_blank" rel="noopener noreferrer">📄 Download Résumé (PDF)</a>
      </div>

      <div className={styles.viewerWrapper}>
        <iframe
          src={`${base}Jasamrit Rahala.pdf`}
          className={styles.iframe}
          title="CV PDF Viewer"
        />
      </div>
    </section>
  );
};

export default CV;
