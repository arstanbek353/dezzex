import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import './countryChart.scss'

const CountryChart = ({ country }) => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
    );

    /**
     * direction difine direction of chart
     * @param {array[number]} array of chart's value
     * @returns {string}
     */
    const direction = (array) => {
        const first = array[0]
        const last = array[array.length - 1]
        return first > last ? 'down' : 'up'
    }

    const labels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
    ];
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true
            }
        },
        scales: {
            y: {
                display: false
            },
            x: {
                display: false
            }
        }
    };
    const data = {
        labels: country.data,
        datasets: [
            {
                data: country.data,
                borderColor: direction(country.data) === 'up' ? '#00e38c' : '#ff4b75',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                pointRadius: 0,
                borderWidth: 1
            }
        ],
    };

    return (
        <div className="CountryChart">
            <div className="CountryChart__info">
                <div className="CountryChart__name">
                    {country.name}
                </div>
                <div className="CountryChart__value">
                    <div className="CountryChart__price">
                        {country.data[country.data.length - 1]}
                    </div>
                    <div className="CountryChart__direction">
                        <i className={`bi bi-triangle-fill ${direction(country.data)}`}></i>
                    </div>
                </div>
            </div>
            <div className="CountryChart__chart">
                <Line options={options} data={data} />
            </div>
        </div>
    )
}

export default CountryChart