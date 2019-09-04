import React from 'react';
import styled from 'styled-components';

import SideNav from './components/SideNav';
import AppHeader from './components/AppHeader';
import ChoreList from './components/ChoreList/ChoreList';

const Container = styled.div`
  height: 100%;
  background-color: orange;
`;

const MainContent = styled.div`
  display: flex;
  height: 100%;
`;

const App: React.FC = () => {
  return (
    <Container id="app">
      <AppHeader />
      <MainContent id="main-content">
        <SideNav />
        <ChoreList />
      </MainContent>
    </Container>
  );
};

export default App;
