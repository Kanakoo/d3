/**
 * Created by admini161015 on 2017/7/24.
 */
var width=500,height=250,
    margin={top:30,right:20,bottom:20,left:50},
    g_width=width-margin.left-margin.right,
    g_height=height-margin.top-margin.bottom;
var data=[1,3,5,7,8,4,2];
var scale_x=d3.scale.linear()
    .domain([0,data.length-1]).range([0,g_width])
var scale_y=d3.scale.linear()
    .domain([0,d3.max(data)]).range([g_height,0])//改变纵坐标方向
var line_generator=d3.svg.line()
    .x(function(d,i){return scale_x(i);})
    .y(function(d){return scale_y(d);})
    .interpolate("cardinal")

var svg=d3.select("#container").append("svg:svg").attr({"width":width,"height":height});
svg.append("g").attr({"transform":"translate("+margin.left+","+margin.top+")"});
var g=d3.select("g");
g.append("path").attr("d",line_generator(data));
var axis_x=d3.svg.axis().scale(scale_x),
    axis_y=d3.svg.axis().scale(scale_y).orient("left");
g.append("g").call(axis_x).attr({"transform":"translate(0,"+g_height+")"});
g.append("g").call(axis_y)
    .append("text")
    .text("Price($)")
    .attr({"transform":"rotate(-90)",
    "text-anchor":"end",
    "dy":"1em"})
    ;
