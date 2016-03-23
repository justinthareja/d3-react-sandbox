import React, { Component, PropTypes } from 'react'
import d3 from 'd3'
import { getXScale, getYScale } from '../util/d3-scale'
import Chart from './Chart'
import Bars from './Bars'
import XYAxis from './XYAxis'

class BarChart extends Component {

  render () {
    const { data, height, width } = this.props

    const scales = {
      xScale: getXScale(data, width),
      yScale: getYScale(data, height)
    }

    return (
      <Chart {...this.props}>
        <Bars {...this.props} {...scales} />
        <XYAxis {...this.props} {...scales} />
      </Chart>
    )  
  }
}

export default BarChart