import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TheHeader from './components/Header/TheHeader'

import TheFooter from './components/Footer/TheFooter'
import TheForm from './components/Form/TheForm'
import Home from './components/Home/Home'
import UserProfile from './components/UserProfile/UserProfile'

function App() {

  return (
    <>
      <TheForm />
      <TheHeader />
      <TheFooter />
      <Home />
      <UserProfile />
    </>
  )
}

export default App
