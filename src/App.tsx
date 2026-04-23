import React from 'react';
import './index.css';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';

const App: React.FC = () => {
  return (
    <div className="portfolio-app">
      <Hero />
      <TechStack />
      <Projects />
      
      {/* Simple footer */}
      <footer style={{ textAlign: 'center', padding: 'var(--space-xl) 0', color: 'var(--text-tertiary)', borderTop: '1px solid var(--border-panel)' }}>
        <p>© 2026 Elhoussine Mouram. Ingénieur Informatique.</p>
      </footer>
    </div>
  );
};

export default App;
