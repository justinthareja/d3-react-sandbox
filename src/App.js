import React, { Component, PropTypes } from 'react';
import BarChart from './components/BarChart';

const barChartProps = {
    data: [1, 2, 3, 4],
    height: 500,
    width: 600,
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