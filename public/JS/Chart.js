let design = {
    scales: {
        xAxes: [{
            gridLines: {
                display: false,
            },
            ticks: {
                min: 0,
            },
            labels: ['', '', '', '', '']
        }],
        yAxes: [{
            ticks: {
                min: 0,
                max: 1,
                stepSize: 0.2,
            }
        }]
    },
    legend: {
        display: false,
    },
    tooltips: {
        enabled: false,
    }
}

let data = {
    datasets: [{
        data: [0, 0, 0, 0, 0],
        borderColor: "rgb(255, 153, 0)",
        backgroundColor: 'rgba(255, 153, 0,0.2)',
        pointBorderColor: "rgb(204, 122, 0)",
        pointBackgroundColor: "rgb(204, 122, 0)",
    }]
}


