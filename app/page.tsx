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
      {/* Sky — flocks of birds gliding at different depths */}
      <div className={styles.sky} aria-hidden="true">
        <svg className={`${styles.flock} ${styles.flock1}`} viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg">
          <path className={styles.bird} d="M2,20 Q7,13 12,20 Q17,13 22,20" />
          <path className={styles.bird} d="M34,12 Q39,6 44,12 Q49,6 54,12" />
          <path className={styles.bird} d="M60,24 Q65,18 70,24 Q75,18 80,24" />
          <path className={styles.bird} d="M92,15 Q96,10 100,15 Q104,10 108,15" />
        </svg>
        <svg className={`${styles.flock} ${styles.flock2}`} viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg">
          <path className={styles.bird} d="M6,10 Q10,5 14,10 Q18,5 22,10" />
          <path className={styles.bird} d="M40,22 Q45,16 50,22 Q55,16 60,22" />
          <path className={styles.bird} d="M74,14 Q78,9 82,14 Q86,9 90,14" />
        </svg>
        <svg className={`${styles.flock} ${styles.flock3}`} viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg">
          <path className={styles.bird} d="M10,18 Q14,13 18,18 Q22,13 26,18" />
          <path className={styles.bird} d="M46,10 Q50,6 54,10 Q58,6 62,10" />
          <path className={styles.bird} d="M80,20 Q85,14 90,20 Q95,14 100,20" />
        </svg>
      </div>

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

        {/* Foam edge gushing up the sand and receding */}
        <svg className={styles.foam} viewBox="0 0 2880 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path fill="rgba(255,255,255,0.72)" d="M0,34 Q240,14 480,30 Q720,46 960,28 Q1200,12 1440,30 Q1680,48 1920,30 Q2160,14 2400,32 Q2640,48 2880,30 L2880,60 L0,60 Z" />
          <path fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" d="M0,34 Q240,14 480,30 Q720,46 960,28 Q1200,12 1440,30 Q1680,48 1920,30 Q2160,14 2400,32 Q2640,48 2880,30" />
        </svg>
      </div>
    </div>
  );
}
