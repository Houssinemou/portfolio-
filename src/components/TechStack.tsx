import React from 'react';
import { Server, Database, Globe, Smartphone, Code2 } from 'lucide-react';
import clsx from 'clsx';
import styles from './TechStack.module.css';

const TechStack: React.FC = () => {
  return (
    <section className={styles.techSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Compétences Techniques</h2>
        
        <div className={styles.bentoGrid}>
          {/* Java Backend */}
          <div className={clsx('glass-panel', styles.bentoCard, styles.cardBackendJava)}>
            <div className={styles.glowBlob} />
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <Database size={24} />
              </div>
              <h3 className={styles.cardTitle}>Java Ecosystem</h3>
            </div>
            <p className={styles.cardDesc}>
              Architecture backend d'entreprise robuste créée avec Spring Boot, Spring Security et des microservices.
            </p>
          </div>

          {/* .NET Backend */}
          <div className={clsx('glass-panel', styles.bentoCard, styles.cardBackendNet)}>
            <div className={styles.glowBlob} />
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <Server size={24} />
              </div>
              <h3 className={styles.cardTitle}>.NET Core</h3>
            </div>
            <p className={styles.cardDesc}>
              API hautes performances, Entity Framework, et solutions cloud natives sur Azure avec C#.
            </p>
          </div>

          {/* Angular Frontend */}
          <div className={clsx('glass-panel', styles.bentoCard, styles.cardWebFront)}>
            <div className={styles.glowBlob} />
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <Globe size={24} />
              </div>
              <h3 className={styles.cardTitle}>Angular Web</h3>
            </div>
            <p className={styles.cardDesc}>
              Tableaux de bord complexes et interactifs avec gestion d'état réactive, RxJS et routage dynamique.
            </p>
          </div>

          {/* Flutter Mobile */}
          <div className={clsx('glass-panel', styles.bentoCard, styles.cardMobile)}>
            <div className={styles.glowBlob} />
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <Smartphone size={24} />
              </div>
              <h3 className={styles.cardTitle}>Flutter Mobile</h3>
            </div>
            <p className={styles.cardDesc}>
              Applications magnifiques compilées nativement pour iOS et Android via un seul code, avec une UI/UX soignée.
            </p>
          </div>

          {/* WordPress CMS */}
          <div className={clsx('glass-panel', styles.bentoCard, styles.cardWordPress)}>
            <div className={styles.glowBlob} />
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <Code2 size={24} />
              </div>
              <h3 className={styles.cardTitle}>WordPress CMS</h3>
            </div>
            <p className={styles.cardDesc}>
              Développement de sites web professionnels avec WordPress, WooCommerce et plugins custom. Gestion complète de contenu et e-commerce.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
