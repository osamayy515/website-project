import React from 'react'
// import ReactDOM from 'react-dom'
// import logo from './logo.svg';
import './App.css';
import { Container, CssBaseline } from '@mui/material';
import NavigationBar from './NavigationBar';
import GridLayout from './GridLayout';
import Footer from './Footer';


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
      <Footer />
    </div>
  );
}

export default App;
