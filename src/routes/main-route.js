import { Routes, Route } from 'react-router-dom'
import Dashboard from "../pages/dashboard/dashboard";
import Analytics from "../pages/analytics/analytics"
import Trading from "../pages/trading/trading"
import Notifications from "../pages/notifications/notifications"

const MainRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/trading" element={<Trading />} />
            <Route path="/notifications" element={<Notifications />} />
        </Routes>
    )
}

export default MainRoute