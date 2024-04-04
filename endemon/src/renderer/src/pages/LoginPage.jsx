import { useAuth } from '../hooks/useAuth'
import '../App.css'
import { Layout, Form, Input, Button, Image } from 'antd'
import { useState, useEffect, useRef } from 'react'
const { Header, Content } = Layout

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()

  // const [usuario, setUsuario] = useState()
  // const [senha, setSenha] = useState()
  // const [error, setError] = useState()
  // const [success, setSuccess] = useState()
  const iusuario = useRef(null)

  const handleLogin = async (e) => {
    e.preventDefault()

    // Here you would usually send a request to your backend to authenticate the user
    // For the sake of this example, we're using a mock authentication
    if (username === 'endemon' && password === 'endemon') {
      // Replace with actual authentication logic
      await login({ username })
    } else {
      alert('Invalid username or password')
    }
  }

  // const validaLogin = () => {
  //   fetch('http://localhost:4000/usuario/validalogin', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ login: usuario, senha: senha })
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       if (res.length === 0) {
  //         setSuccess(false)
  //         setError(true)
  //       } else {
  //         setSuccess(true)
  //         setError(false)
  //       }
  //     })
  // }

  // const errorAlert = error ? (
  //   <Row>
  //     <Col span="8"></Col>
  //     <Col span="8">
  //       <Alert message="Falha no Login!" type="warning"></Alert>
  //     </Col>
  //   </Row>
  // ) : (
  //   ''
  // )

  // const login = success ? (
  //   <Row>
  //     <Col span="8"></Col>
  //     <Col span="8">
  //       <Alert message="Sucesso no Login!" type="warning"></Alert>
  //     </Col>
  //   </Row>
  // ) : (
  //   ''
  // )

  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  useEffect(() => {
    iusuario.current.focus()
  }, [])

  return (
    <Layout>
      <Header style={{ backgroundColor: 'green' }}>
        <h1>EndeMon - Monitoramento de Endemias como a Dengue</h1>
      </Header>
      <Content>
        <Form
          name="basic"
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
          labelCol={{
            span: 8
          }}
          wrapperCol={{
            span: 16
          }}
          initialValues={{
            remember: true
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Image width={250} preview={false} align="center" src="../assets/logo.png" />
          <Form.Item
            label="Usuário"
            name="usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            rules={[
              {
                required: true,
                message: 'Informe o usuário!'
              }
            ]}
          >
            <Input ref={iusuario} />
          </Form.Item>

          <Form.Item
            label="Senha"
            name="senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            rules={[
              {
                required: true,
                message: 'Informe a senha!'
              }
            ]}
          >
            <Input.Password />
          </Form.Item>

          {/* {errorAlert} */}
          {/* {login} */}

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16
            }}
          >
            <Button type="primary" htmlType="submit" onClick={handleLogin}>
              Acessar
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  )
}

export default LoginPage
