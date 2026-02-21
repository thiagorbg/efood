import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './style'
import Home from './pages/home'
import Perfil from './pages/Perfil_'


const Rotas = () => (
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/perfil' element={<Perfil/>}/>
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Rotas />
    </BrowserRouter>
  )
}

export default App
