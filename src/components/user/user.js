import { useContext } from "react";
import { AuthContext } from "../../context/auth/authContext";

import './user.scss'

const User = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="User">
            <img src={`images/avatars/${user.id ? user.id : 'plug'}.png`} alt="" className="User__img" />
            <div className="User__name">
                {user.first_name} {user.family_name}
            </div>
        </div>
    )
}

export default User