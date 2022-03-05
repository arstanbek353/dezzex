import { useState, useContext } from "react";
import { AuthContext } from "../../context/auth/authContext";
import { Link } from "react-router-dom";

import './auth.scss'

const Registration = () => {
    const { registration, loading } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [first_name, setFirst_name] = useState('');
    const [family_name, setFamily_name] = useState('');

    return (
        <div className="Auth">

            <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
            <form className="Auth__form" onSubmit={(e) => e.preventDefault()}>
                <div className="Auth__item form-group mb-2">
                    <label htmlFor="login" className="Auth__label mb-1">Login</label>
                    <input
                        id="login"
                        type="text"
                        className="form-control Auth__input"
                        placeholder="Login"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="Auth__item form-group mb-2">
                    <label htmlFor="login" className="Auth__label mb-1">First name</label>
                    <input
                        id="login"
                        type="text"
                        className="form-control Auth__input"
                        placeholder="First name"
                        value={first_name}
                        onChange={(e) => setFirst_name(e.target.value)}
                    />
                </div>
                <div className="Auth__item form-group mb-2 ">
                    <label htmlFor="login" className="Auth__label mb-1 mb-1">Family name</label>
                    <input
                        id="login"
                        type="text"
                        className="form-control Auth__input"
                        placeholder="Family name"
                        value={family_name}
                        onChange={(e) => setFamily_name(e.target.value)}
                    />
                </div>
                <div className="Auth__item form-group mb-2">
                    <label htmlFor="password" className="Auth__label mb-1 mb-1">Password</label>
                    <input
                        id="password"
                        type="password"
                        className="form-control Auth__input"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="Auth__item form-group mt-4">
                    <button
                        className="w-100 btn btn-lg btn-primary mb-2"
                        disabled={loading}
                        onClick={() => registration({ username, password, first_name, family_name })}
                    >Registration</button>
                    <div className=" text-end d-block">
                        Click here if you have an account {' '}
                        <Link
                            to="/"
                            className="link-primary"
                        >Login</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Registration