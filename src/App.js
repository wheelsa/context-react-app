import React from 'react';
import './App.css';
import { Container } from 'semantic-ui-react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import AccountProfile from './pages/AccountProfile';
import HomePage from './pages/Home';

function App() {
  return (
    <>
    <Navbar />
    <Container>
    
     <Switch>
      <Route exact path = '/' render={ HomePage }/>
      <Route exact path = '/accounts/profile' render={ AccountProfile } />

     </Switch>
    </Container>
    </>
  );
}

export default App;
