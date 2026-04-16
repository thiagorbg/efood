import {Provider} from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './style'
import Home from './pages/home'
import Perfil from './pages/Perfil_'
import Cart from './components/Cart'
import { store } from './store'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurantes/:id" element={<Perfil />} />
  </Routes>
)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <GlobalStyle />
      <Rotas />
      <Cart/>
      </BrowserRouter>
    </Provider>
  )
}

export default App
