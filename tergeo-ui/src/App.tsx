import React from 'react';
import styled from 'styled-components';

import SideNav from './components/SideNav';
import AppHeader from './components/AppHeader';
import MainContent from './components/MainContent';

const Container = styled.div`
  height: 100%;
`;

const MainContentContainer = styled.div`
  display: flex;
  background-color: #fafafa;
  height: 100%;
`;

const App: React.FC = () => {
  return (
    <Container id="app">
      <AppHeader />
      <MainContentContainer id="main-content-container">
        <SideNav />
        <MainContent />
      </MainContentContainer>
    </Container>
  );
};

export default App;
