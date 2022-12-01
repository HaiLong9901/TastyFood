import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import ProductsList from './pages/ProductsList'
import ProductDetail from './pages/ProductDetail'
import Layout from './components/Layout'
import Login from './pages/Login'
import Register from './pages/Register'
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App overflow-hidden">
          <Routes>
            <Route element={<Layout loginHeaderPath={['/login', '/register']} />}>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<ProductsList />} />
              <Route path="/product/:productId" element={<ProductDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </Provider>
  )
}

export default App
