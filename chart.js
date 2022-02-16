<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.1/chart.min.js"></script>

    <title>Document</title>
</head>
<body>
    <!-- <canvas id="myChart" style="width:100%;max-width:400px"></canvas> -->
    <div class="chart-container" style="position: relative; height:40vh; width:80vw">
        <canvas id="myChart"></canvas>
    </div>

    <script>

var xValues = [50,60,70,80,90,100,110,120,130,140,150];
var yValues = [7,8,8,9,9,9,10,11,14,14,15];
const CHART_COLORS = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)'
};

function transparentize(value, opacity) {
  var alpha = opacity === undefined ? 0.5 : 1 - opacity;
  return colorLib(value).alpha(alpha).rgbString();
}
// var randomElement = _.sample(yValues);

var yValues1 = [1.23,3.55,1.56,9.9,9.12,10.11,10,11,14,14,15];
new Chart(

    "myChart",
    {
        type: "line",
        data: {
            labels: xValues,
            datasets: [
                {
                    label: 'Affiliates',
                    data:yValues,
                    borderColor: CHART_COLORS.red,
                    backgroundColor: CHART_COLORS.red
                                },
                    {
                    label: 'Paid Search',
                    data:yValues1,
                    borderColor: CHART_COLORS.orange,
                    backgroundColor: CHART_COLORS.orange
                                }
            ]
        },
        
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 6, max:16}}],
    }
  }
    }
);
    </script>
</body>
</html>
