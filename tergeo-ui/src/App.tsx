import React from 'react';

import './App.css';
import ChoreList from './ChoreList/ChoreList';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">Tergeo</header>
      <ChoreList />
    </div>
  );
};

export default App;
