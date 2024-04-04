import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import PrincipalPage from './pages/PrincipalPage'
import CasoPage from './pages/CasoPage'
import MapaPage from './pages/MapaPage'
import PessoaPage from './pages/PessoaPage'

import './App.css'
import { ProtectedRoute } from './components/ProtectedRoute'
import { AuthProvider } from './hooks/useAuth'

const App = () => {
  // // rotas do breadcrumb
  // const routes = [
  //   {
  //     path: '/',
  //     breadcrumbName: 'home',
  //   },
  //   {
  //     path: '/',
  //     breadcrumbName: 'Monitoramento',
  //     children: [
  //       {
  //         path: '/casos',
  //         breadcrumbName: 'Registrar Caso',
  //       },
  //       {
  //         path: '/mapa',
  //         breadcrumbName: 'Acompanhar Mapa',
  //       }
  //     ],
  //   }
  // ];

  // function itemRender(route, params, routes, paths) {
  //   const last = routes.indexOf(route) === routes.length - 1;
  //   return last ? (
  //     <span>{route.breadcrumbName}</span>
  //   ) : (
  //     <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
  //   );
  // }

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<PrincipalPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Route path="casos" element={<CasoPage />} />
                <Route path="pessoas" element={<PessoaPage />} />
                <Route path="mapa" element={<MapaPage />} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
