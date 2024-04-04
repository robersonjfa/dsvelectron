import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const PrincipalPage = () => {
  const { user, logout } = useAuth()

  if (user) {
    return <Navigate to="/admin" />
  }

  const handleLogout = () => {
    logout()
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <img alt="logo" src="../assets/logo.png" />

      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default PrincipalPage
