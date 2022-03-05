import { useContext, useRef } from "react"
import { NavLink } from "react-router-dom"
import { AuthContext } from "../../context/auth/authContext"

import './sidebar.scss'

const Sidebar = () => {
    const { logout } = useContext(AuthContext)
    const sidebarEl = useRef(null);

    /**
     * sidebarToggle toggles sidebar (open/close)
     */
    const sidebarToggle = () => {
        sidebarEl.current.classList.toggle('active');
    }

    return (
        <div className="Sidebar" ref={sidebarEl}>
            <button className="Sidebar__toggle" onClick={sidebarToggle}>
                <i className="bi bi-arrow-right-square"></i>
            </button>
            <div className="Sidebar__inner">
                <nav className="Sidebar__nav">
                    <NavLink to="/" className="Sidebar__item">
                        <span className="Sidebar__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="45.691" height="45.691" viewBox="0 0 45.691 45.691">
                                <defs>
                                    <style>{'.a{fill:none;stroke:#b5bad0;stroke-linecap:round;stroke-linejoin:round;stroke-width:3px;}'}</style>
                                </defs>
                                <g transform="translate(1 1)">
                                    <circle className="a stroke" cx="8" cy="8" r="8" transform="translate(0.5 27.191)" />
                                    <path className="a stroke" d="M2.5,12.143V.5A34.929,34.929,0,0,1,37.429,35.429H25.786" transform="translate(5.762)" />
                                    <line className="a stroke" y1="10.036" x2="10.036" transform="translate(14.75 18.905)" />
                                </g>
                            </svg>
                        </span>
                        <span className="Sidebar__str">
                            Dashboard
                        </span>
                    </NavLink>
                    <NavLink to="/analytics" className="Sidebar__item">
                        <span className="Sidebar__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                                <defs>
                                    <style>{'.b{fill:none;stroke:#b5bad0;stroke-linecap:square;stroke-miterlimit:10;stroke-width:4px;}'}</style>
                                </defs>
                                <g transform="translate(-4 -4)">
                                    <line className="b stroke" y1="26" transform="translate(15 16)" />
                                    <line className="b stroke" y1="16" transform="translate(24 26)" />
                                    <line className="b stroke" y1="26" transform="translate(33 16)" />
                                    <line className="b stroke" y1="16" transform="translate(42 26)" />
                                    <line className="b stroke" y1="36" transform="translate(6 6)" />
                                </g>
                            </svg>
                        </span>
                        <span className="Sidebar__str">
                            Analytics
                        </span>
                    </NavLink>
                    <NavLink to="/trading" className="Sidebar__item">
                        <span className="Sidebar__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="45.224" height="45.191" viewBox="0 0 45.224 45.191">
                                <defs>
                                    <style>{'.c{fill:#b5bad0;}.d{fill:none;stroke:#b5bad0;stroke-miterlimit:10;stroke-width:2.5px;}'}</style>
                                </defs>
                                <g transform="translate(0.267 0.25)">
                                    <path className="c fill" d="M23.475,22.88a4.956,4.956,0,0,1-1.721,3.881,8.75,8.75,0,0,1-4.97,1.884v3.522H14.626V28.74a16.743,16.743,0,0,1-6.609-1.23V24.081a16.644,16.644,0,0,0,3.264,1.145,14.781,14.781,0,0,0,3.345.479V19.631l-1.358-.5a9.613,9.613,0,0,1-3.891-2.443,5.191,5.191,0,0,1-1.23-3.514A4.574,4.574,0,0,1,9.893,9.483a8.645,8.645,0,0,1,4.735-1.746V5h2.158V7.68a17.9,17.9,0,0,1,6.252,1.331l-1.188,2.975a17.464,17.464,0,0,0-5.067-1.2V16.7l1.234.472a11.255,11.255,0,0,1,4.269,2.5,4.628,4.628,0,0,1,1.188,3.212ZM11.962,13.136a2.171,2.171,0,0,0,.582,1.541A5.866,5.866,0,0,0,14.632,15.9V10.851a3.8,3.8,0,0,0-1.983.8A1.911,1.911,0,0,0,11.962,13.136Zm7.68,9.986a2.02,2.02,0,0,0-.658-1.552,6.726,6.726,0,0,0-2.2-1.178v5.177Q19.643,25.137,19.642,23.122Z" transform="translate(6.599 3.762)" />
                                    <path className="c fill" d="M24.971,24.454,17.5,25.521l1.067-7.471Z" transform="translate(15.518 16.035)" />
                                    <path className="c fill" d="M9.054,9.571,10.121,2.1,2.65,3.167Z" transform="translate(1.552 1.035)" />
                                    <path className="d stroke" d="M24.971,24.454,17.5,25.521l1.067-7.471Z" transform="translate(15.518 16.035)" />
                                    <path className="d stroke" d="M9.054,9.571,10.121,2.1,2.65,3.167Z" transform="translate(1.552 1.035)" />
                                    <path className="d stroke" d="M27.093,37.439A21.345,21.345,0,0,0,12,1" transform="translate(10.345)" />
                                    <path className="d stroke" d="M7.252,4.222A21.345,21.345,0,0,0,22.345,40.661" transform="translate(0 3.03)" />
                                </g>
                            </svg>
                        </span>
                        <span className="Sidebar__str">
                            Trading
                        </span>
                    </NavLink>
                    <NavLink to="/notifications" className="Sidebar__item">
                        <span className="Sidebar__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="46.364" height="37.676" viewBox="0 0 46.364 37.676">
                                <defs>
                                    <style>{'.e{fill:none;stroke:#b5bad0;stroke-linecap:round;stroke-linejoin:round;stroke-width:3px;}'}</style>
                                </defs>
                                <g transform="translate(1.512)">
                                    <path className="e stroke" d="M.5,28.47,8.206,13.059,19.764,36.176,31.323,1.5,42.882,28.47" />
                                </g>
                            </svg>
                        </span>
                        <span className="Sidebar__str">
                            Notifications
                        </span>
                    </NavLink>

                </nav>
                <button onClick={logout} className="Sidebar__item Sidebar__logout">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40.469" height="40.469" viewBox="0 0 40.469 40.469">
                        <defs>
                            <style>{'.f{fill:none;stroke:#b5bad0;stroke-linecap:round;stroke-linejoin:round;stroke-width:3px;}'}</style>
                        </defs>
                        <g transform="translate(1 1)">
                            <path className="f stroke" d="M8.5,3,18.719,13.219,8.5,23.437" transform="translate(19.25 6.016)" />
                            <line className="f stroke" x1="27.25" transform="translate(10.719 19.234)" />
                            <path className="f stroke" d="M17.531,37.969H3.906A3.406,3.406,0,0,1,.5,34.562V3.906A3.406,3.406,0,0,1,3.906.5H17.531" />
                        </g>
                    </svg>
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Sidebar