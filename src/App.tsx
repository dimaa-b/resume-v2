import { useState } from 'react';
import './styles/App.css';
import { WikipediaResume, PaperBackground } from './components';

function App() {
  const [isNightMode, setIsNightMode] = useState(false);

  return (
    <div className={isNightMode ? 'night-mode' : 'day-mode'}>
      {isNightMode && <PaperBackground />}
      <WikipediaResume 
        isNightMode={isNightMode} 
        onToggleTheme={() => setIsNightMode(!isNightMode)} 
      />
    </div>
  );
}

export default App;
