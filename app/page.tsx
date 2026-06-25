import Link from "next/link";
import styles from './styles/home.module.css';
import { instrumentSans, playfairDisplay } from './fonts';

export default function Home() {
  // Add your prototypes to this array
  const prototypes = [
    {
      title: 'Getting started',
      description: 'How to create a prototype',
      path: '/prototypes/example'
    },
    {
      title: 'Confetti button',
      description: 'An interactive button that creates a colorful confetti explosion',
      path: '/prototypes/confetti-button'
    },
    // Add your new prototypes here like this:
    // {
    //   title: 'Your new prototype',
    //   description: 'A short description of what this prototype does',
    //   path: '/prototypes/my-new-prototype'
    // },
  ];

  return (
    <div className={`${styles.container} ${instrumentSans.className}`}>
      <header className={styles.header}>
        <p className={styles.label}>a collection of experiments</p>
        <h1 className={playfairDisplay.className}>Prototypes</h1>
        <div className={styles.rule} />
      </header>

      <main className={styles.main}>
        <section className={styles.grid}>
          {/* Goes through the prototypes list (array) to create cards */}
          {prototypes.map((prototype, index) => (
            <Link
              key={index}
              href={prototype.path}
              className={styles.card}
            >
              <span className={styles.cardNumber}>{String(index + 1).padStart(2, '0')}</span>
              <h3>{prototype.title}</h3>
              <p>{prototype.description}</p>
              <span className={styles.shell} aria-hidden="true">🐚</span>
            </Link>
          ))}
        </section>
      </main>

      <div className={styles.wavesWrapper} aria-hidden="true">
        <svg className={`${styles.wave} ${styles.wave1}`} viewBox="0 0 2880 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path fill="rgba(126, 168, 188, 0.22)" d="M0,40 Q360,5 720,40 Q1080,75 1440,40 Q1800,5 2160,40 Q2520,75 2880,40 L2880,80 L0,80 Z" />
        </svg>
        <svg className={`${styles.wave} ${styles.wave2}`} viewBox="0 0 2880 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path fill="rgba(168, 205, 222, 0.16)" d="M0,35 Q360,2 720,35 Q1080,68 1440,35 Q1800,2 2160,35 Q2520,68 2880,35 L2880,70 L0,70 Z" />
        </svg>
        <svg className={`${styles.wave} ${styles.wave3}`} viewBox="0 0 2880 55" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path fill="rgba(200, 222, 234, 0.12)" d="M0,28 Q360,8 720,28 Q1080,48 1440,28 Q1800,8 2160,28 Q2520,48 2880,28 L2880,55 L0,55 Z" />
        </svg>
      </div>
    </div>
  );
}
