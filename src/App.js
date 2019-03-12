import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
componentDidMount(){
  var d3=window.d3;
  console.log("did miount")
var margin = {top: 20, right: 20, bottom: 30, left: 50},
width = 960 - margin.left - margin.right,
height = 500 - margin.top - margin.bottom;
    var data = [{ "date": "2000-01-01","close":30 },
    { "date": "2001-01-01","close":20 },
    { "date": "2002-01-01","close":30 },
    { "date": "2003-01-01","close":20 },
    { "date": "2004-01-01","close":30 },
    { "date": "2005-01-01","close":20 },
      { "date": "2005-05-01","close":25 },
      { "date": "2005-09-01","close":25 },
        { "date": "2005-11-01","close":10 },
    { "date": "2006-01-01","close":20 },
    { "date": "2007-01-01","close":40 },
    { "date": "2008-01-01","close":0 }]
var parseDate = d3.time.format("%Y-%m-%d").parse;
var x = d3.time.scale()
.range([0, width]);

var y = d3.scale.linear()
.range([height, 0]);

var xAxis = d3.svg.axis()
.scale(x)
.orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

    var line = d3.svg.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.close); });

//   var svg = d3.select('.chart-container').append("svg")
//     .attr("width", '100%')
//     .attr("height", '100%')
//     .attr('viewBox','0 0 '+Math.min(width,height)+' '+Math.min(width,height))
//     .attr('preserveAspectRatio','xMinYMin')
//     .append("g")
//     .attr("transform", "translate(" + Math.min(width,height) / 2 + "," + Math.min(width,height) / 2 + ")");

    var svg = d3.select('.chart-container').append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    data.forEach(function(d) {
    d.date = parseDate(d.date);
    d.close = +d.close;
});


x.domain(d3.extent(data, function(d) { return d.date; }));
y.domain(d3.extent(data, function(d) { return d.close; }));

svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);
    svg.append("g")
    .attr("class", "y axis")
    .call(yAxis)
  .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0)
    .style("text-anchor", "initial")
    .text("($)");
    
svg.append("path")
    .datum(data)
    .attr("class", "line")
    .attr("d", line)
    .attr("fill","none")
    .attr("stroke","steelblue")
    .attr("stroke-width","1.5px");
 }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div className="chart-container"></div>
       
        </header>
      </div>
    );
  }
}

export default App;
