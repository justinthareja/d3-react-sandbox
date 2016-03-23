import React, { Component, Proptypes } from 'react'

// A SVG container for a chart
class Chart extends Component {

  render() {
    const { width, height, style, children } = this.props

    return (
      <svg width={width} height={height} style={style}>{children}</svg>
    )
  }


}

export default Chart