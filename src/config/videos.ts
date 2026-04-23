// Configuration des URLs vidéo
// Remplace les URLs par tes URLs Cloudinary une fois créé le compte

const CLOUDINARY_CLOUD = 'dldyy8dwj'; // À remplacer après creation compte Cloudinary

export const VIDEO_URLS = {
  POD_LAST: `https://res.cloudinary.com/${CLOUDINARY_CLOUD}/video/upload/v1/portfolio/POD-last_w33o6x.mp4`,
  PFE_DEMO: `https://res.cloudinary.com/${CLOUDINARY_CLOUD}/video/upload/v1/portfolio/Enregistrement_2026-04-23_151745_poqdun.mp4`,
  SALES_SYSTEM: `https://res.cloudinary.com/${CLOUDINARY_CLOUD}/video/upload/v1/portfolio/Enregistrement_2026-04-21_235452_w57kad.mp4`,
  ECOMMERCE_DEMO: `https://res.cloudinary.com/${CLOUDINARY_CLOUD}/video/upload/v1/portfolio/Enregistrement_2026-04-22_002025_zu1kv0.mp4`,
};

// Fallback URLs (pour développement local)
export const LOCAL_VIDEO_URLS = {
  POD_LAST: '/POD-last.mp4',
  PFE_DEMO: '/Enregistrement%202026-04-23%20151745.mp4',
  SALES_SYSTEM: '/Enregistrement%202026-04-21%20235452.mp4',
  ECOMMERCE_DEMO: '/Enregistrement%202026-04-22%20002025.mp4',
};

// Utilise LOCAL_VIDEO_URLS pour développement, VIDEO_URLS pour production
export const getVideoUrl = (videoKey: keyof typeof VIDEO_URLS) => {
  const isProduction = import.meta.env.MODE === 'production';
  return isProduction ? VIDEO_URLS[videoKey] : LOCAL_VIDEO_URLS[videoKey];
};
