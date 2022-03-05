import { useContext } from "react";
import { AuthContext } from "../../context/auth/authContext";
import User from "../../components/user/user"
import Total from "../../components/total/total";
import CountryCharts from "../../components/countryCharts/countryCharts";
import Members from "../../components/members/members";
import Comparisons from "../../components/comparisons/comparisons";

import './dashboard.scss'

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="Dashboard">
            <div className="Dashboard__header">
                <div className="Dashboard__left">
                    <div className="Dashboard__mtitle">Dashboard</div>
                    <div className="Dashboard__greetings">Welcome back, {user.first_name}</div>
                </div>
                <div className="Dashboard__right">
                    <button className="Dashboard__add-button">
                        <i className="bi bi-plus"></i>
                        Add Unit
                    </button>
                    <User />
                </div>
            </div>
            <div className="Dashboard__total">
                <Total />
            </div>
            <div className="Dashboard__countrys">
                <CountryCharts />
            </div>
            <div className="Dashboard__grid Dashboard__grid--2">
                <div className="Dashboard__col">
                    <Members />
                </div>
                <div className="Dashboard__col">
                    <Comparisons />
                </div>
            </div>
        </div>
    )
}

export default Dashboard