import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import TheHeader from './components/Header/TheHeader'
import './App.css'
import TheFooter from './components/Footer/TheFooter'
import TheForm from './components/Form/TheForm'
import Home from './components/Home/Home'
import UserProfile from './components/UserProfile/UserProfile'
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart';
// import { GlobalProvider} from './context/GlobalState'
import { ProductsProvider } from './context/ProductsContext/ProductsState'

function App() {

  return (
    <>
      {/* <GlobalProvider> */}
     
      <UserProvider>
        <ProductsProvider>
        <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<TheForm />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            {/* FALTA FOOTER PREGUNTAR DONDE VA */}
        </Routes>
        </Router>
        </ProductsProvider>
        </UserProvider>
      {/* </GlobalProvider> */}
    </>
  )
}

export default App
