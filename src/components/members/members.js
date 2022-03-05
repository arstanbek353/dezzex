import { useContext, useEffect } from "react";
import { StateContext } from "../../context/state/stateContext";
import Member from "../member/member";

import './members.scss'

const Members = () => {
    const { fetchMembers, members, loading } = useContext(StateContext);

    useEffect(() => {
        fetchMembers()
    }, []);

    if (loading || !members) {
        return (
            <div>loading</div>
        )
    }

    return (
        <div className="Members">
            <div className="Block-head">
                <div className="Block-head__title">
                    Members
                </div>
                <a href="" className="Block-head__all">View All</a>
            </div>
            {members.map(member => <Member member={member} key={member.id} />)}
        </div>
    )
}

export default Members