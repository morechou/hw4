Highcharts.chart('container', {

    title: {
        text: '台灣與日本及韓國2011年-2022年觀光客人數比較圖(單位:百萬)',
        align: 'left'
    },

    subtitle: {
        text: 'By:UNWTO',
        align: 'left'
    },

    yAxis: {
        title: {
            text: '入境觀光客人數'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2011 to 2022'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2011
        }
    },

    series: 
    [
        
        {
            name: '日本',
            data: [6.22, 8.36, 10.36, 13.41, 19.74, 24.04, 28.69, 31.19, 31.88, 4.12, 0.25, 3.83]
        },
         {
            name: '韓國',
            data: [9.8, 11.14, 12.18, 14.2, 13.23, 17.24,  13.34, 15.35, 17.5, 2.52, 0.97, 3.2]
        },
         {
            name: '台灣',
            data: [6.09, 7.31, 8.02, 9.91, 10.44, 10.69, 10.74, 11.07, 11.86, 1.38, 0.14, 0.9]
        } 
    ],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});