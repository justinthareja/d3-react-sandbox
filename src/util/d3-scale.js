import d3 from 'd3'

const getYScale = (data, height) => d3.scale.linear()
  .domain([0, d3.max(data)]) // range of possible input values
  .range([height, 0]) // range of possible output values

const getXScale = (data, width) => d3.scale.ordinal()
  .domain(d3.range(data.length))
  .rangeRoundBands([0, width], 0.05)


export { 
  getYScale, 
  getXScale 
}