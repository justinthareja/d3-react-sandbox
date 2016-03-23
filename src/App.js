import React, { Component, PropTypes } from 'react';
import d3 from 'd3'
import data from './data/conditions'
import _ from 'lodash'

// an svg rectangle
const Bar = ({ color, width, height, offset, availableHeight }) => {
  return (
    <rect fill={color} width={width} height={height} x={offset} y={availableHeight - height} />
  )
}

// svg container for the chart
const Chart = (props) => {
  return (
    <svg width={props.width} height={props.height}>{props.children}</svg>
  )
}


const DataSeries = ({ width, height, color, data, title }) => {
  const yScale = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, height])

  const xScale = d3.scale.ordinal()
    .domain(d3.range(data.length))
    .rangeRoundBands([0, width], 0.05)

  const bars = _.map(data, (point, i) => 
    <Bar height={yScale(point)} width={xScale.rangeBand()} 
      offset={xScale(i)} availableHeight={height} color={color} key={i} />)

  return <g>{bars}</g>
}

const BarChart = (props) => {
  return (
    <Chart width={props.width} height={props.height}>
      <DataSeries {...props}/>
    </Chart>
  )
}


class App extends Component {
  render() {
    const chartProps = {
      width: 500,
      height: 500,
      data: [ 30, 12, 10, 5, 8, 15, 10 ],
      color: 'blue'
    }
    return (
      <BarChart {...chartProps}/>
    )
  }
}


export default App