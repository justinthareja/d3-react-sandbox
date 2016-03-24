import React, { Component, PropTypes } from 'react'
import Bar from './Bar'
import { map } from 'lodash'


class Bars extends Component {

  render () {

    const { height, color, data, xScale, yScale } = this.props

    return (
      <g>
        {
          map(data, (point, i) => {
            return <Bar height={height - yScale(point.value)} width={xScale.rangeBand()} 
              offset={xScale(point.label)} availableHeight={height} color={color} key={i} />
          })
        }
      </g>
    )
  }

}


export default Bars