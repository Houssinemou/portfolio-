import React, { useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
  const [expandedVideo, setExpandedVideo] = useState<string | null>(null);
  return (
    <section className={styles.projectsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Réalisations Principales</h2>
          <p className={styles.sectionSubtitle}>Découvrez mes projets les plus significatifs</p>
        </div>

        {/* Featured Project - Logistique */}
        <div className={styles.featuredProject}>
          <div className={styles.featuredContent}>
            <h3 className={styles.featuredSubtitle}>Featured Project</h3>
            <h2 className={styles.featuredTitle}>Système de Logistique & Suivi</h2>
            <p className={styles.featuredDescription}>
              Écosystème temps réel reposant sur une API Django centralisée. <b>L'application mobile (Chauffeur)</b> permet le scan QR, la validation API et l'upload de photos de BL sur AWS S3. <b>Le backend</b> met à jour PostgreSQL et envoie des notifications.
            </p>
            <div className={styles.techPills}>
              <span className={styles.pill}>Flutter</span>
              <span className={styles.pill}>Django API</span>
              <span className={styles.pill}>PostgreSQL</span>
              <span className={styles.pill}>AWS S3</span>
            </div>
          </div>
          <div className={styles.featuredMockup}>
            <video
              className={styles.phoneVideo}
              autoPlay
              loop
              muted
              playsInline
              src="/POD-last.mp4"
              poster="https://placehold.co/300x600/0A0F1D/FFFFFF?text=Logistique"
            />
            <button
              className={styles.expandFeaturedBtn}
              onClick={() => setExpandedVideo('/POD-last.mp4')}
              aria-label="Agrandir la vidéo"
            >
              <Maximize2 size={20} />
            </button>
          </div>
        </div>

        <div className={styles.projectsGrid}>
          {/* PFE Project */}
          <div className={styles.projectCard}>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>Générateur d’étiquettes codes à barres</h3>
              <p className={styles.projectDesc}>
                Projet de fin d'études (PFE) pour une gestion d’inventaire optimisée. Application complète pour la création, visualisation et l'impression d'étiquettes à codes à barres.
              </p>
              <div className={styles.techPills}>
                <span className={styles.pill}>Angular</span>
                <span className={styles.pill}>.NET</span>
                <span className={styles.pill}>SQL Server</span>
              </div>
            </div>
            <div className={styles.mockupContainer}>
              {/* Le fichier src="/video_pfe.mp4" doit être placé dans le dossier public */}
              <video
                className={styles.projectVideo}
                autoPlay
                loop
                muted
                playsInline
                src="/Enregistrement 2025-07-01 153807.mp4"
                poster="https://placehold.co/600x400/0A0F1D/FFFFFF?text=Vidéo+de+Démonstration"
              />
              <button
                className={styles.expandButton}
                onClick={() => setExpandedVideo('/Enregistrement 2025-07-01 153807.mp4')}
                aria-label="Agrandir la vidéo"
              >
                <Maximize2 size={20} />
              </button>
            </div>
          </div>

          {/* Sales & Invoicing Project */}
          <div className={styles.projectCard}>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>Système de Gestion des Ventes et Facturation</h3>
              <p className={styles.projectDesc}>
                Plateforme complète de gestion commerciale avec génération automatique de factures. <b>Le backend</b> Spring Boot expose une API REST robuste pour les opérations CRUD. <b>L'interface React</b> offre une expérience utilisateur intuitive pour la gestion des ventes, clients et factures avec export PDF.
              </p>
              <div className={styles.techPills}>
                <span className={styles.pill}>Spring Boot</span>
                <span className={styles.pill}>React</span>
                <span className={styles.pill}>PostgreSQL</span>
                <span className={styles.pill}>REST API</span>
              </div>
            </div>
            <div className={styles.mockupContainer}>
              <video
                className={styles.projectVideo}
                autoPlay
                loop
                muted
                playsInline
                src="/Enregistrement 2026-04-21 235452.mp4"
              />
              <button
                className={styles.expandButton}
                onClick={() => setExpandedVideo('/Enregistrement 2026-04-21 235452.mp4')}
                aria-label="Agrandir la vidéo"
              >
                <Maximize2 size={20} />
              </button>
            </div>
          </div>

        {/* Featured Project - Classy Rose */}
        <div className={styles.featuredProject2}>
          <div className={styles.featuredMockup2}>
            <div className={styles.desktopMockup}>
              <video
                className={styles.desktopVideo}
                autoPlay
                loop
                muted
                playsInline
                src="/Enregistrement 2026-04-22 002025.mp4"
              />
            </div>
            <button
              className={styles.expandFeaturedBtn}
              onClick={() => setExpandedVideo('/Enregistrement 2026-04-22 002025.mp4')}
              aria-label="Agrandir la vidéo"
            >
              <Maximize2 size={20} />
            </button>
          </div>
          <div className={styles.featuredContent}>
            <h3 className={styles.featuredSubtitle}>Featured Project</h3>
            <h2 className={styles.featuredTitle}>La Bourgeoise by Classy Rose</h2>
            <p className={styles.featuredDescription}>
              Plateforme e-commerce de luxe pour <b>La Bourgeoise</b>, chocolaterie belge d'exception installée à Casablanca. Solution <b>WordPress & WooCommerce</b> avec catalogue de produits premium, gestion avancée des commandes et intégration de paiement.
            </p>
            <div className={styles.techPills}>
              <span className={styles.pill}>WordPress</span>
              <span className={styles.pill}>WooCommerce</span>
              <span className={styles.pill}>PHP</span>
              <span className={styles.pill}>MySQL</span>
              <span className={styles.pill}>E-Commerce</span>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Video Modal */}
      {expandedVideo && (
        <div className={styles.videoModal} onClick={() => setExpandedVideo(null)}>
          <div className={styles.videoModalContent} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeButton}
              onClick={() => setExpandedVideo(null)}
              aria-label="Fermer"
            >
              <X size={28} />
            </button>
            <video
              className={styles.modalVideo}
              autoPlay
              controls
              src={expandedVideo}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
