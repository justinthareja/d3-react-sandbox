import React, { Component, PropTypes } from 'react'

// A SVG rectangle
class Bar extends Component {

  render() {
    const { color, width, height, offset, availableHeight } = this.props

    // With <rect> x and y attributes correspond to the top left corner 
    return (
      <rect fill={color} width={width} height={height} x={offset} y={availableHeight - height} />
    )
  }


} 

export default Bar

