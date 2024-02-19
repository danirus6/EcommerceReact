import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TheHeader from './components/Header/TheHeader'
import './App.css'
import TheFooter from './components/Footer/TheFooter'
import TheForm from './components/Form/TheForm'
import Home from './components/Home/Home'
import UserProfile from './components/UserProfile/UserProfile'
import { GlobalProvider} from './context/GlobalState'

function App() {

  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Home /> 
          <TheHeader /> 
          {/* <UserProfile /> */}
          <TheForm />
          <TheFooter />
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App
