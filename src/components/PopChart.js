import React from 'react';
import Chart from 'react-apexcharts';

const PopChart = () =>  {

           const chartData =
               {
                options: {
                    chart: {
                        background: '#f4f4f4',
                        foreColor: '#333',
                     },
                style: {
                          fontSize: '13px'   
                        },
                xaxis: {
                        categories: [
                        'monday',
                        'tuesday',
                        'wednesday'
                        ]
                        
                    },
                    plotOptions: {
                        area: {
                            horizontal: false
                        }
                    },
                    fill: {
                        colors: ['#f44336']
                    },
                    dataLabels: {
                        enabled: false
                    },
                    title: {
                        text: 'Share Price',
                        align: 'center',
                        margin: 20,
                        offsetY: 20,
                        style: {
                            fontSize: '10px'
                        }
                    },
                },
                    series: [{
                        name: 'Share Price',
                        data: [
                            1,
                            2,
                            3
                        ]
                    }],
                   
                } 
                
   
      
    return (
    <Chart
        options={chartData.options}
        series={chartData.series}
        type="area"
        height="140"
        width="15%"
        font-size="13px"
        />
        )
    
    
}

export default PopChart;