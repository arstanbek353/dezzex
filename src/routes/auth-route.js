import { Routes, Route } from 'react-router-dom'
import Login from '../components/auth/login'
import Registration from '../components/auth/registration'

const AuthRoute = () => {
    return (
        <Routes>
            <Route path="/registration" element={<Registration />} />
            <Route path="*" element={<Login />} />
        </Routes>
    )
}

export default AuthRoute