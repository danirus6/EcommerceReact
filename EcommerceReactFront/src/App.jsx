import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import TheHeader from './components/Header/TheHeader'
import TheFooter from './components/Footer/TheFooter'
import TheForm from './components/Form/TheForm'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login'
import UserProfile from './components/UserProfile/UserProfile'
import { ProductsProvider } from './context/ProductsContext/ProductsState'
import { UsersProvider} from './context/UsersContext/UsersState'
import { OrdersProvider } from './context/OrdersContext/OrdersState'
import './App.css'

// import { GlobalProvider} from './context/GlobalState'


function App() {

  return (
    <>
      {/* <GlobalProvider> */}
      <UsersProvider> 
        <ProductsProvider>
          <OrdersProvider>
              <Router>
                  <TheHeader />
                  <Routes>
                      <Route path="/" element={<Home />} /> 
                      <Route path="/login" element={<Login />} /> 
                      <Route path="/register" element={<TheForm />} />
                      <Route path="/profile" element={<UserProfile />} />
                      <Route path="/products" element={<Products />} />
                      <Route path="/cart" element={<Cart />} />
                  </Routes>
                  <TheFooter />
              </Router>
          </OrdersProvider>
        </ProductsProvider>
    </UsersProvider> 
      {/* </GlobalProvider> */}
    </>
  )
}

export default App


// function App() {
//   return (
//     <UserProvider>
//       <ProductProvider>
//         <BrowserRouter>
//           <div className='main-container'>
//             <Header />
//             <div className='main-container__options'>
//               <Routes>
//                 <Route path='/' element={<Home/>}/>
//                 <Route path='/products' element={<Products />}/>
//                 <Route path='/register' element={<Register />}/>
//                 <Route path='/login' element={<Login />}/>
//               </Routes>
//             </div>
//           </div>
//           <Footer />
//         </BrowserRouter>
//       </ProductProvider>
//     </UserProvider>
//   )
// }

// export default App