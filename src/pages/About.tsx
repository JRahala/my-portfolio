import React from 'react';
import styles from '../styles/About.module.css';

import picture from '../assets/jam.jpg';
import mitLogo from '../assets/logos/mit.png';
import princetonLogo from '../assets/logos/princeton.svg';
import imperialLogo from '../assets/logos/imperial.png';
import teensInAILogo from '../assets/logos/teensInAI.jpg';


const About: React.FC = () => (
  <section id="about" className={styles.container}>
    {/* Fixed Left Sidebar */}
    <div className={styles.sidebar}>
       <img src={picture} alt="Jasamrit Rahala" className={styles.profileImage} />
      <h2 className={styles.name}>Jasamrit Rahala</h2>
      <div className={styles.links}>
        <a href="https://github.com/JRahala" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/jasamrit-rahala/" target="_blank">LinkedIn</a>
        <a href="https://JRahala.github.io/my-portfolio/Jasamrit Rahala.pdf" target="_blank">Résumé</a>
      </div>
    </div>

    {/* Scrollable Main Content */}
    <div className={styles.content}>

      <h1>About</h1>
      <p>
        I’m a quantitative developer and computer science student at Princeton University (GPA: 3.96),
        with a mathematics minor and a background spanning machine learning, competitive programming,
        and theoretical computer science. I’ve conducted research with leading academics like
        Robert Tarjan and Manolis Kellis, and developed novel data structures, embedding techniques,
        and deep learning models across multiple domains.
      </p>

      <p>
        My work spans institutions including Princeton, MIT CSAIL, Imperial College London, and Eton.
        I bring a rare blend of academic rigor, software engineering, and communication skills
        — equally comfortable writing academic publications or deploying production-ready code.
      </p>

      <p>
        I’ve earned national recognition in AI competitions, authored computational science papers,
        and taught machine learning to teens as part of social good initiatives. I’m looking for
        opportunities in quantitative development, AI/ML, or research-driven software engineering.
      </p>

      <div className={styles.section}>
        <h3>Technologies</h3>
        <div className={styles.tags}>
          {[
            'Python', 'C++', 'Java', 'OCaml', 'React', 'SQL',
            'PyTorch', 'NumPy', 'Scikit-learn', 'Pandas',
            'Git', 'LaTeX', 'Flask', 'Unity', 'IBM Watson',
            'Qiskit', 'ARM8 Assembly', 'HTML', 'CSS', 'JavaScript'
          ].map((tech) => (
            <span key={tech} className={styles.tag}>{tech}</span>
          ))}
        </div>
      </div>

    
    <div className={styles.section}>
      <h3>Select Awards & Media</h3>
      <div className={styles.timeline}>
        <div className={styles.entry}>
          <div className={styles.date}>2018-2022</div>
          <div className={styles.details}>
            <strong>Dual Scholar at Eton</strong> — Only student to hold both King’s Scholar & New Foundation titles
            <div className={styles.learnMore}> <a href="https://csail.mit.edu" target="_blank" className={styles.linkButton}>Learn more »</a> </div>
          </div>
        </div>
        <div className={styles.entry}>
          <div className={styles.date}>2015 – 2021</div>
          <div className={styles.details}>
            <strong>Media Features</strong> — Featured in BBC, The Guardian, <em>Child Genius</em>, and others
            <div className={styles.learnMore}> <a href="https://csail.mit.edu" target="_blank" className={styles.linkButton}>Learn more »</a> </div>
          </div>
        </div>
        <div className={styles.entry}>
          <div className={styles.date}>2013</div>
          <div className={styles.details}>
            <strong>162+ Mensa IQ Score</strong> — Youngest in UK to achieve full marks (age 11)
            <div className={styles.learnMore}> <a href="https://csail.mit.edu" target="_blank" className={styles.linkButton}>Learn more »</a> </div>
          </div>
        </div>
      </div>
    </div>

    <div className={styles.section}>
      <h3>Experience</h3>
      <div className={styles.timeline}>

        <div className={styles.entry}>
          <div className={styles.logoWrapper}>
            <img src={mitLogo} alt="MIT CSAIL" className={styles.logo} />
          </div>
          <div className={styles.date}>May 2024 – Aug 2024</div>
          <div className={styles.details}>
            <strong>MIT CSAIL — Research Intern</strong><br />
            Embedding alignment using VAEs & Procrustes, supervised by Prof. Manolis Kellis
            <div className={styles.learnMore}> <a href="https://csail.mit.edu" target="_blank" className={styles.linkButton}>Learn more »</a> </div>
          </div>
        </div>

        <div className={styles.entry}>
          <div className={styles.logoWrapper}>
            <img src={princetonLogo} alt="Princeton" className={styles.logo} />
          </div>
          <div className={styles.date}>Dec 2024 – Present</div>
          <div className={styles.details}>
            <strong>Princeton Algorithms Lab — Research Assistant</strong><br />
            Invented concurrent ZipTrees with Prof. Robert Tarjan
            <div className={styles.learnMore}> <a href="https://csail.mit.edu" target="_blank" className={styles.linkButton}>Learn more »</a> </div>
          </div>
        </div>

        <div className={styles.entry}>
          <div className={styles.logoWrapper}>
            <img src={imperialLogo} alt="Imperial College London" className={styles.logo} />
          </div>
          <div className={styles.date}>Oct 2020 – Jan 2021</div>
          <div className={styles.details}>
            <strong>Imperial College London — Deep Learning Researcher</strong><br />
            CNN classifier for IVF embryo viability with Dr. Cristina Hickman
            <div className={styles.learnMore}> <a href="https://csail.mit.edu" target="_blank" className={styles.linkButton}>Learn more »</a> </div>
          </div>
        </div>

        <div className={styles.entry}>
          <div className={styles.logoWrapper}>
            <img src={teensInAILogo} alt="TeensInAI" className={styles.logo} />
          </div>
          <div className={styles.date}>Jun 2020 – Sep 2020</div>
          <div className={styles.details}>
            <strong>TeensInAI — Instructor</strong><br />
            Taught AI fundamentals with interactive notebooks and live workshops  
            <div className={styles.learnMore}> <a href="https://csail.mit.edu" target="_blank" className={styles.linkButton}>Learn more »</a> </div>
          </div>
        </div>
      </div>
    </div>


    <div className={styles.section}>
      <h3>Other Interests</h3>
      <p>
        I enjoy competitive programming, chess, and contributing to open-source. I’m passionate about bringing clarity
        and impact to problems at the intersection of data, markets, and algorithms.
      </p>
    </div>

    </div>
  </section>
);

export default About;
