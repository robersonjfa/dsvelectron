import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import PrincipalPage from './pages/PrincipalPage'
import CasoPage from './pages/CasoPage'
import MapaPage from './pages/MapaPage'
import PessoaPage from './pages/PessoaPage'

// import { ProtectedRoute } from './components/ProtectedRoute'
import { store } from './app/store'
import { Provider } from 'react-redux'
import HomePage from './pages/HomePage'
import MainLayout from './components/layouts/main-layout'

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
    <Provider store={store}>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard">
            <Route path="casos" element={<CasoPage />} />
            <Route path="pessoas" element={<PessoaPage />} />
            <Route path="mapa" element={<MapaPage />} />
          </Route>
        </Routes>
      </MainLayout>
    </Provider>
  )
}

export default App
