import React, { Component, PropTypes } from 'react';
import BarChart from './components/BarChart';

const barChartProps = {
    data: [
      {label: 'A', value: 11},
      {label: 'B', value: 30},
      {label: 'C', value: 50},
      {label: 'D', value: 2},
      {label: 'E', value: 39},
      {label: 'F', value: 25}
    ],
    height: 200,
    width: 200,
    style: {
      padding: 30
    },
    color: 'blue'
  }

class App extends Component {
  
  render() {
    return (
      <BarChart {...barChartProps} />
    )
  }

}


export default App