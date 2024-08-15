import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = () => {
    const data = {
        labels: ['Food', 'Entertainment', 'Travel'],
        datasets: [{
            data: [70, 10, 20],
            backgroundColor: ['#ff6384', '#36a2eb', '#ffce56']
        }]
    };

    return <Pie data={data} />;
};

export default PieChart;
