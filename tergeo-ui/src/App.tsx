import React from 'react';

import SideNav from './components/SideNav';
import AppHeader from './components/AppHeader';
import ChoreList from './components/ChoreList/ChoreList';

const App: React.FC = () => {
  return (
    <div className="App">
      <AppHeader />
      <SideNav />
      <ChoreList />
    </div>
  );
};

export default App;
