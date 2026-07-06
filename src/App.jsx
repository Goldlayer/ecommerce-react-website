import { Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import AuthenticationPage from './pages/AuthenticationPage'
import CheckoutPage from './pages/CheckoutPage'
import Navbar from './components/Navbar'
import AuthProvider from './context/AuthContext'
import ProductDetails from './pages/ProductDetails'
import CartProvider from './context/CartContext'
import Footer from './components/Footer'

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className='app'>
          <Navbar />
          
          {/* 🌟 FIX: Wrap routes inside a main tag to push footer cleanly to the baseline */}
          <main className="main-content">
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/auth' element={<AuthenticationPage />} />
              <Route path='/checkout' element={<CheckoutPage />} />
              <Route path='/products/:id' element={<ProductDetails />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
