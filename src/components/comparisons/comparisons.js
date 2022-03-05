import { useContext, useEffect } from "react";
import { StateContext } from "../../context/state/stateContext";
import Comparison from "../comparison/comparison";

import './comparisons.scss'

const Comparisons = () => {
    const { fetchCountrys, countrys, loading } = useContext(StateContext);

    useEffect(() => {
        fetchCountrys()
    }, []);

    if (loading || !countrys) {
        return (
            <div>loading</div>
        )
    }

    /**
     * renderComparison creates components
     * @param {array[object]} array array of countrys' data
     * @param {number} limit limit of rendered components
     * @param {number} sort order by descending or ascending: default value 1 and default ordering by descending.
     * Set -1 for order by ascending
     * @return {array} array of components
     */
    const renderComparison = (array, limit, sort = 1) => {

        const sortArray = array.sort(function (a, b) {
            if (sort === -1) {
                return a.percent - b.percent;
            } else {
                return b.percent - a.percent
            }
        });

        const JSX = []

        for (let i = 0; i < limit; i++) {
            const data = sortArray[i]
            JSX[i] = <Comparison data={data} key={data.id} />
        }

        return JSX
    }

    return (
        <div className="Comparisons">
            <div className="Block-head">
                <div className="Block-head__title">
                    Members
                </div>
                <a href="" className="Block-head__all">View All</a>
            </div>
            <div className="Comparisons__content">
                {renderComparison(countrys, 3)}
            </div>
        </div>
    )
}

export default Comparisons