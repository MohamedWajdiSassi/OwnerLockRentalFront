new Chart($("#myChart"), {
    type: 'horizontalBar',

    // Data
    //
    data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Income",
          backgroundColor: "rgba(51,202,185,0.5)",
          borderColor: "rgba(0,0,0,0)",
          hoverBackgroundColor: "rgba(51,202,185,0.7)",
          hoverBorderColor: "rgba(0,0,0,0)",
          data: [10, 59, 80, 58, 20, 55, 40]
        },
        {
          label: "Expenses",
          backgroundColor: "rgba(243,245,246,0.8)",
          borderColor: "rgba(0,0,0,0)",
          hoverBackgroundColor: "rgba(238,239,240,1)",
          hoverBorderColor: "rgba(0,0,0,0)",
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    },

    // Options
    //
    options: {
      scales: {
        xAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });