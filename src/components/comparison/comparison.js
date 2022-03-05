import './comparison.scss'

/**
 * @param {object} data
 */
const Comparison = ({ data }) => {

    return (
        <div className="Comparison">
            <div className="Comparison__top">
                <img
                    src={`images/flags/${data.img ? data.img : 'plug'}.svg`}
                    alt=""
                    className="Comparison__img"
                />
                <div className="Comparison__name">
                    {data.name}
                </div>
            </div>
            <div
                className="Comparison__percent"
            >
                <div
                    className="Comparison__percent-line"
                    style={{ width: data.percent + '%' }}
                >
                    <div className="Comparison__percent-value">{data.percent}%</div>
                </div>
            </div>
        </div>
    )
}

export default Comparison