import React from 'react';
import { createRoot } from 'react-dom/client';
import BarSection from './BarSection.jsx';
import MenuSection from './MenuSection.jsx';
import FeedSection from './FeedSection.jsx'

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <BarSection />
        <MenuSection />
        <FeedSection />
      </div>
    );
  }
}

createRoot(document.getElementById('stuffie')).render(<MainPage />);