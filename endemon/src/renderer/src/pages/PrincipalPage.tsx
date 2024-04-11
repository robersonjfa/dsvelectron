import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FloatButton } from 'antd'
import { LoginOutlined } from '@ant-design/icons'
import logo from '../assets/logo.png'

const PrincipalPage = () => {
  const navigate = useNavigate()

  const loginPage = () => {
    navigate('/login')
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <img alt="logo" src={logo} />

      <FloatButton
        icon={<LoginOutlined />}
        type="primary"
        style={{ right: 24 }}
        onClick={loginPage}
      />
    </div>
  )
}

export default PrincipalPage
