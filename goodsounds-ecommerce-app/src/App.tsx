import React from 'react';
import './default.scss';
import Header from './components/Header'
import HomePage from './pages/HomePage';

function App() {

  return (
    <>
    <Header thisProp={true}/>
    <HomePage prop1='Look@GoodSounds' />
    </>
  )
}

export default App
