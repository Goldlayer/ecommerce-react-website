import { Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import AuthenticationPage from './pages/AuthenticationPage'
import CheckoutPage from './pages/CheckoutPage'
import Navbar from './components/Navbar'
import AuthProvider from './context/AuthContext'
import ProductDetails from './pages/ProductDetails'
import CartProvider from './context/CartContext'

function App() {

  return (
    <AuthProvider>
      <CartProvider>
      
        <div className='app'>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/auth' element={<AuthenticationPage />} />
            <Route path='/checkout' element={<CheckoutPage />} />
            <Route path='/products/:id' element={<ProductDetails />} />
          </Routes>
        </div>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
