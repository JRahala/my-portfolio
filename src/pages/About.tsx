import React from 'react';
import styles from '../styles/About.module.css';

import picture from '../assets/jam2.jpg';
import mitLogo from '../assets/logos/mit.png';
import princetonLogo from '../assets/logos/princeton.svg';
import imperialLogo from '../assets/logos/imperial.png';
import teensInAILogo from '../assets/logos/teensInAI.jpg';
import unlikelyAILogo from '../assets/logos/unlikelyAI.jpeg';

type ExperienceEntry = {
  logo: string;
  alt: string;
  date: string;
  title: string;
  description: string;
  link: string;
};

const TimelineEntry: React.FC<ExperienceEntry> = ({logo, alt, date, title, description, link }) => (
    <div className={styles.entry}>
    <div className={styles.logoWrapper}>
      <img src={logo} alt={alt} className={styles.logo} />
    </div>
    <div className={styles.date}>{date}</div>
    <div className={styles.details}>
      <strong>{title}</strong><br />
      {description}
      {link && 
      <div className={styles.learnMore}>
        <a href={link} target="_blank" className={styles.linkButton}>Learn more »</a>
      </div>
      }
    </div>
  </div>
);

const experienceEntries: ExperienceEntry[] = [
  {
    logo: unlikelyAILogo,
    alt: 'UnlikelyAI',
    date: 'Jul 2025 - Present',
    title: 'UnlikelyAI - Machine Learning Engineer/Research Intern',
    description: 'Developed a Bayesian knowledge tracing system and neuro-symbolic LLM-RAG pipeline for Lloyds Bank’s advice chatbot.',
    link: ''
  },
  {
    logo: mitLogo,
    alt: 'MIT CSAIL',
    date: 'May 2024 – Aug 2024',
    title: 'MIT CSAIL — Machine Learning Engineer/Research Intern',
    description: 'Aligned embedding spaces with VAEs and General Procrustes under Prof. Manolis Kellis; applied t-SNE, UMAP, PCA.',
    link: ''
  },
  {
    logo: princetonLogo,
    alt: 'Princeton',
    date: 'Dec 2024 – Present',
    title: 'Princeton — Algorithms Researcher',
    description: 'Invented lock-free concurrent ZipTrees with Prof. Robert Tarjan; working toward publication to prove near logarithm concurrent update algorithm',
    link: '',
  },
  {
    logo: imperialLogo,
    alt: 'Imperial College London',
    date: 'Oct 2020 – Jan 2021',
    title: 'Imperial College London — CV Research Intern',
    description: 'Designed PyTorch CNNs for IVF embryo survival classification using few-shot learning with Dr. Cristina Hickman',
    link: '',
  },
  {
    logo: teensInAILogo,
    alt: 'TeensInAI',
    date: 'Jun 2020 – Sep 2020',
    title: 'TeensInAI — AI Instructor',
    description: 'Taught matchematical foundations of ML using notebooks, demos, and live workshops for UN AI for Good',
    link: '',
  }
];



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
        <b> 
          <em> </em>I am currently working on Bayesian Knowledge Tracking Models with the founder of Amazon Alexa, William-Tunstall Pedoe, at Unlikely AI.
        </b>
      </p>

      <p>
        I’m a quantitative developer and computer science student at Princeton University (Departmental GPA: 3.96),
        with a mathematics minor and a background spanning machine learning, competitive programming,
        and theoretical computer science. I’ve conducted research with leading academics like
        Robert Tarjan and Manolis Kellis, and developed novel data structures, embedding techniques,
        and deep learning models across multiple domains.
      </p>

      <p>
        My work spans institutions including Princeton, MIT CSAIL, Imperial College London, and Eton College.
        I bring a rare blend of academic rigor, software engineering, and communication skills
        — equally comfortable writing academic publications or deploying production-ready code.
      </p>

      <p>
        I’ve deployed ML systems for production environments, designed novel data structures, and built simulation pipelines for scientific applications. 
        I’m looking for opportunities in quantitative development, AI/ML, or research-driven software engineering. 
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
          <div className={styles.date}>2013</div>
          <div className={styles.details}>
            <strong>162+ Mensa IQ Score</strong> — Youngest person in UK to achieve full marks on the adult IQ test (age 11)
            <div className={styles.learnMore}> <a href="https://www.thetimes.com/culture/tv-radio/article/from-two-up-two-down-to-eton-and-now-teen-genius-is-in-countdown-finals-9f8hgsgfp" target="_blank" className={styles.linkButton}>Learn more »</a> </div>
          </div>
        </div>

        <div className={styles.entry}>
          <div className={styles.date}>2015 – 2021</div>
          <div className={styles.details}>
            <strong>Media Features</strong> — Featured by BBC, The Guardian, Channel 4’s <em>Child Genius</em> and <em>Countdown</em>
            <div className={styles.learnMore}> <a href="https://www.theguardian.com/tv-and-radio/2021/dec/10/countdown-star-jasamrit-rahala-17-targets-more-tv-success" target="_blank" className={styles.linkButton}>Learn more »</a> </div>
          </div>
        </div>

        <div className={styles.entry}>
          <div className={styles.date}>2018-2022</div>
          <div className={styles.details}>
            <strong>Dual Scholar at Eton</strong> — First in school’s 500-year history to be both King’s Scholar & New Foundation Scholar
            <div className={styles.learnMore}> <a href="https://www.etoncollege.com/support-us/impact-stories/jasamrits-story/" target="_blank" className={styles.linkButton}>Learn more »</a> </div>
          </div>
        </div>
      </div>
    </div>

    <div className={styles.section}>
      <h3>Experience</h3>
      <div className={styles.timeline}>
        {experienceEntries.map((entry, index) => (
          <TimelineEntry key={index} {...entry} />
        ))}
      </div>
    </div>

    <div className={styles.section}>
      <h3>Other Interests</h3>
      <p>
        I enjoy competitive programming, chess, and poker. I’m passionate about bringing clarity
        and impact to problems at the intersection of data, markets, and algorithms.
      </p>
    </div>

    </div>
  </section>
);

export default About;
