import d3 from 'd3'
import { map } from 'lodash'

// Returns a function that 'scales' Y coordinates from the data to fit the chart
// The .domain establishes a range of possible input values
// The .range establishes a range of possible output values (in this case pixel postion)
// In this implementation, the returned function can take a value and return it's pixel coordinate
const getYScale = (data, height) => d3.scale.linear()
  .domain([0, d3.max(map(data, 'value'))]) 
  .range([height, 0]) 

// Ordinal values are compared by rank, ordinal scales encode ordinal data
// An ordinal scale is a mapping from discrete set of data values (such as labels) 
// to a corresponding discrete set of display values (such as pixel positions)
// In specifying the domain and range, all that matters is the order of values: element i in the domain
// is mapped to element i in the range
const getXScale = (data, width) => d3.scale.ordinal()
  .domain(map(data, 'label'))
  .rangeRoundBands([0, width], 0.05)


export { 
  getYScale, 
  getXScale 
}