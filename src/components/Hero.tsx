import React from 'react';
import styles from './Hero.module.css';
import ProfileCard from './ProfileCard';
import profileImage from '../assets/Gemini_Generated_Image_87c30r87c30r87c3.png';
import cvFile from '../assets/ELHOUSSINE MOURAM.pdf';

const Hero: React.FC = () => {
  const handleContactClick = () => {
    // Scroll to projects or navigate to contact
    const projectsSection = document.querySelector('.container');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.heroSection}>
      {/* Background glowing nodes an lines simulating bridging technologies */}
      <svg className={styles.backgroundNodes} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
        {/* Lines */}
        <path className={styles.glowLine} d="M100 200 Q 400 50, 700 300 T 1300 100" fill="transparent" stroke="var(--color-java)" strokeWidth="2" opacity="0.4" />
        <path className={styles.glowLine} d="M150 600 Q 500 800, 800 500 T 1400 700" fill="transparent" stroke="var(--color-net)" strokeWidth="2" opacity="0.4" />
        <path className={styles.glowLine} d="M300 100 Q 600 400, 1000 200 T 1400 400" fill="transparent" stroke="var(--color-angular)" strokeWidth="2" opacity="0.4" />
        <path className={styles.glowLine} d="M50 400 Q 400 700, 900 600 T 1350 500" fill="transparent" stroke="var(--color-flutter)" strokeWidth="2" opacity="0.4" />

        {/* Nodes */}
        <circle className={styles.node} cx="100" cy="200" r="4" style={{ '--color-accent': 'var(--color-java)' } as any} />
        <circle className={styles.node} cx="700" cy="300" r="6" style={{ '--color-accent': 'var(--color-java)' } as any} />
        <circle className={styles.node} cx="1300" cy="100" r="5" style={{ '--color-accent': 'var(--color-java)' } as any} />

        <circle className={styles.node} cx="150" cy="600" r="5" style={{ '--color-accent': 'var(--color-net)' } as any} />
        <circle className={styles.node} cx="800" cy="500" r="6" style={{ '--color-accent': 'var(--color-net)' } as any} />
        <circle className={styles.node} cx="1400" cy="700" r="4" style={{ '--color-accent': 'var(--color-net)' } as any} />

        <circle className={styles.node} cx="300" cy="100" r="5" style={{ '--color-accent': 'var(--color-angular)' } as any} />
        <circle className={styles.node} cx="1000" cy="200" r="6" style={{ '--color-accent': 'var(--color-angular)' } as any} />

        <circle className={styles.node} cx="50" cy="400" r="5" style={{ '--color-accent': 'var(--color-flutter)' } as any} />
        <circle className={styles.node} cx="900" cy="600" r="7" style={{ '--color-accent': 'var(--color-flutter)' } as any} />
      </svg>

      <div className={`container ${styles.content}`}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>Elhoussine Mouram</h1>
          <p className={styles.subtitle}>
            Ingénieur Informatique | Applications Web & Mobile
          </p>
          <a href={cvFile} download className={styles.uploadBtn}>
            Télécharger le CV
          </a>
        </div>
        <div className={styles.imageContent}>
          <ProfileCard
            name="Elhoussine Mouram"
            title="Software Engineer"
            handle="ElhoussineMouram"
            status="Available for Work"
            contactText="Contact Me"
            avatarUrl={profileImage}
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={handleContactClick}
            behindGlowColor="rgba(79, 184, 255, 0.9)"
            behindGlowSize="45%"
            behindGlowEnabled={true}
            innerGradient="linear-gradient(135deg, rgba(79, 184, 255, 0.1) 0%, rgba(124, 58, 237, 0.08) 100%)"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
