var trace1 = {
    x:['Display', 'Facebook', 'instagram','LinkedIn Brand', 'Outdoor', 'Search Brand','Twitter','youtube'],
   y: ['-7%', '-7%', '-7%','-7%', '-7%', '-7%','10%','20%'],
   type: 'bar',
   name: 'Spend Changes',
   marker:{color:"rgb(219,0,17)"}
};

var trace2 = {
    x:['Display', 'Facebook', 'instagram','LinkedIn Brand', 'Outdoor', 'Search Brand','Twitter','youtube'],
y: ['7%', '17%', '47%','37%', '-17%', '-37%','10%','20%'],
   type: 'bar',
   name: 'Application Changes',
   marker:{color:"#007bff"}
};

var data = [trace1, trace2];
var layout = {
   title: 'Spends vs Applications',
   showlegend: true};
Plotly.newPlot('myDiv', data, layout, {displayModeBar: false});