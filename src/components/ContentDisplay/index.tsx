import React from 'react';
import { ContentSection } from './components/ContentSection';
import { HeaderSection } from './components/HeaderSection';
import './styles.css';

const App = () => {
  return (
    <div className="container">
      <div className="floating-content">
        <HeaderSection />
        <ContentSection />
      </div>
    </div>
  );
}

export default App;
