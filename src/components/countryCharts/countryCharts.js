import { useContext, useEffect } from "react";
import { StateContext } from "../../context/state/stateContext";
import CountryChart from '../countryChart/countryChart'

import './countryCharts.scss'

const CountryCharts = () => {
    const { fetchCountrys, countrys, loading } = useContext(StateContext);
    useEffect(() => {
        fetchCountrys()
    }, []);

    if (loading || !countrys) {
        console.log(loading)
        return (
            'loading'
        )
    }

    return (
        <div className="CountryCharts">
            {countrys.map(country => <CountryChart country={country} key={country.id} />)}
        </div>
    )
}

export default CountryCharts