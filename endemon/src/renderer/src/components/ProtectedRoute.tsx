import { Navigate, Outlet } from 'react-router-dom'

import { Layout, Menu, Modal } from 'antd'
import {
  MonitorOutlined,
  InfoCircleOutlined,
  LogoutOutlined,
  UserOutlined,
  ExclamationCircleOutlined,
  HomeOutlined
} from '@ant-design/icons'
const { Footer, Content, Sider } = Layout
const { SubMenu } = Menu

const { confirm } = Modal

export const ProtectedRoute = () => {

  // sair
  function showExitConfirm() {
    confirm({
      title: 'Sair',
      icon: <ExclamationCircleOutlined />,
      content: 'Deseja realmente sair?',
      onOk() {
        console.log('teste')
        window.api.send('toMain', { funcao: 'exit' })
      },
      onCancel() {}
    })
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <span>Home</span>
            <Navigate to="/" />
          </Menu.Item>
          <SubMenu key="cadastro" icon={<UserOutlined />} title="Cadastro">
            <Menu.Item key="2">
              <span>Pessoas</span>
              <Navigate to="/pessoas" />
            </Menu.Item>
            <Menu.Item key="3">Residências</Menu.Item>
            <Menu.Item key="4">Armadilhas</Menu.Item>
          </SubMenu>
          <SubMenu key="monitoramento" icon={<MonitorOutlined />} title="Monitoramento">
            <Menu.Item key="5">
              <span>Registrar Caso</span>
              <Navigate to="/casos" />
            </Menu.Item>
            <Menu.Item key="6">
              {' '}
              <span>Acompanhar Mapa</span>
              <Navigate to="/mapa" />
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="7" icon={<InfoCircleOutlined />}>
            Sobre
          </Menu.Item>
          <Menu.Item key="8" icon={<LogoutOutlined />} onClick={showLogoutConfirm}>
            Sair
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
        <Content style={{ margin: '0 16px' }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }} itemRender={itemRender} routes={routes} >
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Bill</Breadcrumb.Item>
  </Breadcrumb> */}
        </Content>
        <Footer style={{ textAlign: 'center' }}>EndeMon - 2024</Footer>
      </Layout>
      <Outlet />
    </Layout>
  )
}
