import './member.scss'

const Member = ({ member }) => {

    return (
        <div className="Member">
            <div className="Member__left">
                <img
                    src={`images/avatars/${member.img ? member.img : 'plug'}.png`}
                    alt=""
                    className="Member__img"
                />
                <div className="Member__name">
                    {member.first_name} {member.family_name}
                </div>
            </div>
            <div
                className={`Member__role ${member.role.toLowerCase().replace(' ', '_')}`}
            >
                {member.role}
            </div>
        </div>
    )
}

export default Member