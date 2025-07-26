import React from 'react';
import Counter from './components/Counter';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile  from './components/UserProfile';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <WelcomeMessage />
      </div>
      <div>
        <Header />
        <MainContent />
        <Footer />
      </div>
       <UserProfile
        name="Alice"
        age="25"
        bio="Loves hiking and photography"
      />
      <div>
        <Counter />
      </div>
    </>
  )
}

export default App;
