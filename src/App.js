import React from 'react'
// import ReactDOM from 'react-dom'
// import logo from './logo.svg';
import './App.css';
import { Container, CssBaseline } from '@mui/material';
import NavigationBar from './NavigationBar';
import GridLayout from './GridLayout';

function App() {
  return (
    <div className='App'>
      <CssBaseline />
      <NavigationBar />
      <Container>
        <main>
          <GridLayout />
        </main>
      </Container>
    </div>
  );
}

export default App;
