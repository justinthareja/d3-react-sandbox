import React, { Component, PropTypes } from 'react'
import d3 from 'd3'

class Axis extends React.Component {
    
  componentDidMount() {
    this.renderAxis()
  }

  componentDidUpdate() {
    this.renderAxis()
  }

  // Use a d3 scale to render the axis. 
  // This should be the same scale used for your main content
  renderAxis() {
    const { orient, scale } = this.props

    const axis = d3.svg.axis()
      .orient(orient)
      // .ticks(5)
      .scale(scale)

    d3.select(this.refs.axis).call(axis)
  }

  render() {
    const { translate } = this.props

    return (
      <g className='axis' ref='axis' transform={translate}></g>
    ) 
  }

}

export default Axis