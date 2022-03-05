import { useContext, useEffect } from "react";
import { StateContext } from "../../context/state/stateContext";
import './total.scss'

const Total = () => {
    const { fetchTotal, total, loading } = useContext(StateContext);
    useEffect(() => {
        fetchTotal()
    }, []);
    if (loading || !total) {
        return (
            'loading'
        )
    }
    return (
        <div className="Total">
            <div className="Total__item">
                <div className="Total__title">
                    BALANCE
                </div>
                <div className="Total__value">
                    <div className="Total__price">
                        {total.balance.value}
                    </div>
                </div>
            </div>
            <div className="Total__line"></div>
            <div className="Total__item">
                <div className="Total__title">
                    PROFITS
                </div>
                <div className="Total__value">
                    <div className="Total__price">
                        {total.profits.value}
                    </div>
                    <div className="Total__percent Total__percent--up">
                        <i className="bi bi-triangle-fill"></i>
                        + {total.profits.percent} %
                    </div>
                </div>
            </div>
            <div className="Total__line"></div>
            <div className="Total__item">
                <div className="Total__title">
                    LOSSES
                </div>
                <div className="Total__value">
                    <div className="Total__price">
                        {total.losses.value}
                    </div>
                    <div className="Total__percent Total__percent--down">
                        <i className="bi bi-triangle-fill down"></i>
                        - {total.losses.percent} %
                    </div>
                </div>
            </div>
            <div className="Total__line"></div>
            <div className="Total__item">
                <div className="Total__title">
                    CURRENCIES
                </div>
                <div className="Total__currencies">
                    {total.currencies.map(currency =>
                        <span className="Total__currency" key={currency}>
                            <i
                                className={`bi bi-currency-${currency}`}
                            ></i>
                        </span>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Total