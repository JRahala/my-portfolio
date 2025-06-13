import React from 'react';
import styles from '../styles/Contact.module.css';

const Contact: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Contact</h2>
      <p className={styles.description}>
        Feel free to reach out via email or phone. I'm currently based in the US, studying at Princeton University.
      </p>

      <div className={styles.details}>
        <p><strong>Email:</strong> jasamrit.rahala@example.com</p>
        <p><strong>UK:</strong> +44 7123 456789</p>
        <p><strong>US:</strong> +1 (555) 123-4567</p>
      </div>

      <div className={styles.mapWrapper}>
        <iframe
          title="Princeton University Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.4058448181036!2d-74.65144638461104!3d40.343094979370834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3e68b504c4f4d%3A0x4a7ec344d2e0c6ff!2sPrinceton%20University!5e0!3m2!1sen!2sus!4v1680543434083!5m2!1sen!2sus"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={styles.map}
        />
      </div>
    </section>
  );
};

export default Contact;
