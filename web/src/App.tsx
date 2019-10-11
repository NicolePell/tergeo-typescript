import React from 'react';
import styled from 'styled-components';

import SideNav from './components/SideNav';
import AppHeader from './components/AppHeader';
import MainContent from './components/MainContent';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const MainContentContainer = styled.div`
  display: flex;
  flex-grow: 1;
  background-color: #fafafa;
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
