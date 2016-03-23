import React, { Component, PropTypes } from 'react'
import _ from 'lodash'
import Bar from './Bar'


class Bars extends Component {

  render () {

    const { height, color, data, xScale, yScale } = this.props
    
    return (
      <g>
        {
          _.map(data, (point, i) => {
            return <Bar height={height - yScale(point)} width={xScale.rangeBand()} 
              offset={xScale(i)} availableHeight={height} color={color} key={i} />
          })
        }
      </g>
    )
  }

}


export default Bars