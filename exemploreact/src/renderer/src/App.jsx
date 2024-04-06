import { useState } from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input, message } from 'antd'

const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [messageApi, contextHolder] = message.useMessage()

  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    if (username === 'teste' && password === 'teste') {
      // Replace with actual authentication logic
      messageApi.success('Usuário e senha válidos!', 5)
    } else {
      messageApi.error('Usuário e senha inválidos!', 10)
    }
  }

  return (
    <>
      {contextHolder}
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          rules={[
            {
              required: true,
              message: 'Please input your Username!'
            }
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          value={username}
          onChange={(e) => setPassword(e.target.value)}
          rules={[
            {
              required: true,
              message: 'Please input your Password!'
            }
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={handleLogin}
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </>
  )
}
export default App
