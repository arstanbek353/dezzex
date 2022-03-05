import { useContext } from 'react'
import MainRoute from './routes/main-route';
import AuthRoute from './routes/auth-route'
import { AuthContext } from "./context/auth/authContext";


import './App.scss';
import Sidebar from './components/sidebar/sidebar';

function App() {
    const { user } = useContext(AuthContext);
    return (
        <div className="App">
            {user ?
                <div className="App__inner">
                    <Sidebar />
                    <div className="App__content">
                        <MainRoute />
                    </div>
                </div>
                : <div className="App__auth"><AuthRoute /></div>}
        </div>
    );
}

export default App;
