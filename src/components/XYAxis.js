import React, { Component, PropTypes } from 'react'
import Axis from './Axis'

class XYAxis extends Component {

  render() {
    const { xScale, yScale, height } = this.props

    return (
      <g>
        <Axis orient="bottom" scale={xScale} translate={`translate(0, ${height})`}/>
        <Axis orient="left" scale={yScale} translate={'translate(0,0)'}/>
      </g>
    )
  }
}

export default XYAxis