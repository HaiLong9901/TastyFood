import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider, useSelector } from 'react-redux'
import { selectCurrentUser } from './features/auth/authSlice'
import store from './store'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import ProductsList from './pages/ProductsList'
import ProductDetail from './pages/ProductDetail'
import Layout from './components/Layout'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import Admin from './pages/Admin'
function App() {
  const user = useSelector(selectCurrentUser)

  return (
    <Router>
      {user.isAdmin ? (
        <div>
          <Routes>
            <Route path="/" element={<Admin />} />
          </Routes>
        </div>
      ) : (
        <div className="App overflow-hidden">
          <Routes>
            <Route element={<Layout loginHeaderPath={['/login', '/register']} />}>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<ProductsList />} />
              <Route path="/product/:productId" element={<ProductDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/cart/:userId" element={<Cart />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      )}
    </Router>
  )
}

export default App
