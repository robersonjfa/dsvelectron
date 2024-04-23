import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectUser, setUser, logoutUser } from '../../app/AuthSlice'
import { jwtDecode } from 'jwt-decode'
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import Button from '../elements/button'
import { axiosClient } from '../../service/axios.service'
import useRefreshToken from '../../hooks/use-refresh-token'
import { useNavigate } from 'react-router-dom'
import { Layout, Menu, MenuProps, Modal } from 'antd'
import { InfoCircleOutlined, LogoutOutlined, UserOutlined, HomeOutlined } from '@ant-design/icons'

const Navbar = () => {
  const navigate = useNavigate()
  const loggedUser = useSelector(selectUser)
  const dispatch = useDispatch()
  const refresh = useRefreshToken()

  const decodeAndStore = (token: string) => {
    const payload: { username: string } = jwtDecode(token)
    dispatch(setUser({ username: payload.username }))
  }

  useEffect(() => {
    if (loggedUser) return

    const token = Cookies.get('token')

    if (token) {
      decodeAndStore(token)
    } else {
      refresh().then((token) => decodeAndStore(token))
    }
  }, [])

  const logout = async (): Promise<void> => {
    await axiosClient.post('/auth/logout')
    Cookies.remove('token')
    dispatch(logoutUser())
    navigate('/')
  }

  const items: MenuProps['items'] = [
    {
      label: 'Home',
      key: '1',
      icon: <HomeOutlined />
    },
    {
      label: 'Cadastro',
      key: '2',
      icon: <UserOutlined />,
      children: [
        {
          label: 'Residências',
          key: '21'
        },
        {
          label: 'Armadilhas',
          key: '22'
        }
      ]
    },
    {
      label: 'Monitoramento',
      key: '3',
      icon: <UserOutlined />,
      children: [
        {
          label: 'Casos',
          key: '31',
          onClick: () => navigate('/dashboard/casos')
        },
        {
          label: 'Mapa',
          key: '32',
          onClick: () => navigate('dashboard/mapa')
        }
      ]
    },
    {
      label: 'Sobre',
      key: '4',
      icon: <InfoCircleOutlined />
    },
    {
      label: 'Sair',
      key: '5',
      icon: <LogoutOutlined />,
      onClick: logout
    }
  ]

  return (
    <>
      <nav className="w-full bg-blue-600/10 font-bold text-slate-900 text-center p-4">
        {loggedUser ? (
          <>
            <Menu theme="light" items={items} defaultSelectedKeys={['1']} mode="horizontal" />
          </>
        ) : (
          ''
        )}
      </nav>
      
    </>
  )
}

export default Navbar
