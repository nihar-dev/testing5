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
   title: ' Overall ',
   showlegend: true};

Plotly.newPlot('myDiv', data, layout, {displayModeBar: false});

var trace11 = {
    x:['Display', 'Facebook', 'instagram','LinkedIn Brand', 'Outdoor', 'Search Brand','Twitter','youtube'],
   y: ['-5%', '-57%', '-27%','67%', '-7%', '-17%','-10%','-20%'],
   type: 'bar',
   name: 'Spend Changes',
   marker:{color:"rgb(219,0,17)"}
};

var trace21 = {
    x:['Display', 'Facebook', 'instagram','LinkedIn Brand', 'Outdoor', 'Search Brand','Twitter','youtube'],
y: ['12%', '17%', '27%','37%', '-17%', '-7%','10%','-20%'],
   type: 'bar',
   name: 'Application Changes',
   marker:{color:"#007bff"}
};
var layout2 = {
    title: ' March ',
    showlegend: true};
var data1 = [trace11, trace21];

Plotly.newPlot('myDiv2', data1, layout2, {displayModeBar: false});