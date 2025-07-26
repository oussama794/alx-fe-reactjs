import React from 'react';
import UserDetails from './components/UserDetails';
import UserInfo from './components/UserInfo';
import UserContext from '/UserContext';
import ProfilePage from './components/ProfilePage';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

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
      <UserContext.Provider value={userData}>
        <ProfilePage />
        <UserInfo />
        <UserDetails />
      </UserContext.Provider>
    </>
  )
}

export default App;
