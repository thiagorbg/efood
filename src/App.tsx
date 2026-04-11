import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './style'
import Home from './pages/home'
import Perfil from './pages/Perfil_'
import Cart from './components/Cart'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurantes/:id" element={<Perfil />} />
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Rotas />
      <Cart/>
    </BrowserRouter>
  )
}

export default App
