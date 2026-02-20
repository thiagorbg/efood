import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GlobalStyle } from './style'
import Home from './pages/home'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Home/>
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
