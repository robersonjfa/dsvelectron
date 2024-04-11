import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectUser } from '../app/AuthSlice'
import Button from '../components/elements/button'
import logo from '../assets/logo.png'

const HomePage = () => {
  const loggedUser = useSelector(selectUser)

  return (
    <section className="w-full max-w-[700px] flex flex-col space-y-12 px-3 py-6">
      <img width="200" height="200" src={logo} />
      <h1 className="text-4xl md:text-4xl font-bold text-center text-slate-800">
        ENDEMON - SEU APP DE ENDEMIAS
      </h1>
      <p className="font-light text-center text-2xl md:text-2xl">
        O Endemon surge como uma ferramenta revolucionária no combate a endemias, como a dengue,
        oferecendo um sistema de monitoramento eficaz e interativo. Por meio de um aplicativo
        intuitivo, usuários podem registrar e visualizar em tempo real a distribuição geográfica de
        focos de doenças. Esse mapeamento permite a rápida identificação de áreas críticas,
        facilitando ações preventivas e de controle. Com a tecnologia do Endemon, a comunidade e as
        autoridades sanitárias unem forças em uma frente comum contra as endemias, promovendo um
        ambiente mais seguro e saudável para todos.
      </p>
      {loggedUser ? (
        <>
          <p className="font-light text-center text-2xl md:text-2xl">
            Bem-vindo{' '}
            <span className="text-pink-800 font-bold">
              {loggedUser.slice(0, 1).toUpperCase() + loggedUser.slice(1)}
            </span>
            {'! '}
          </p>

          <div className="flex items-center justify-center">
            <Link to="/dashboard">
              <Button value={'Acessar!'} className="w-max px-12" />
            </Link>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center space-y-3">
          <p className="font-light text-center text-2xl md:text-3xl">
            Somente usuários autorizados podem acessar!
          </p>
          <Link to="/login">
            <Button value={'Acessar!'} />
          </Link>
        </div>
      )}
    </section>
  )
}

export default HomePage
