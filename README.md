# React SVG Charts 

###### Inspired by [frappe/charts](https://github.com/frappe/charts)
--------------
A set of simple React Components that generates SVG-based charts.

## Installation

```bash
    npm install react-comps-svg-charts@latest --save
```

## Importing it

Commons JS 
```js
  import { BarChart, LineChart, PercentageChart, PieChart, ScatterChart } = require('react-comps-svg-charts');
```


ES Modules
```js
import { BarChart, LineChart, PercentageChart, PieChart, ScatterChart } from 'react-comps-svg-charts';
```

UNPKG

  ```html
  <script src="https://unpkg.com/react-comps-svg-charts@1.0.4/dist/lib.js"></script>
  ```

  Then, just..
  ```js
    <script>
      window.BarChart;
      //...
    </script>
  ```


## Examples

```js
import React, { Component } from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'
import {
  BarChart, 
  LineChart, 
  PercentageChart, 
  PieChart, 
  ScatterChart
} from 'react-comps-svg-charts'

import '../../node_modules/react-comps-svg-charts/dist/svg-charts-styles.css'

class App extends React.Component {

  constructor () {
    super()

    this.state = {
      data: {
        labels: ['12am-3am', '3am-6pm', '6am-9am', '9am-12am', '12pm-3pm'],
        datasets: [
          {
            title: 'Some Data',
            color: 'light-blue',
            values: [25, 40, 30, 35, 8]
          },
          {
            title: 'Another Set',
            color: 'violet',
            values: [25, 50, -10, 15, 18]
          }
        ]
      }
    }
  }

  render () {
    return (
      <div>
        <BarChart
          title='Test Bar Chart'
          data={this.state.data}
          height={250}
        />

        <LineChart
          title='Test Line Chart'
          data={this.state.data}
          height={250}
        />

        <PercentageChart
          title='Test Percentage Chart'
          data={this.state.data}
          height={250}
        />
        
        <PieChart
          title='Test Pie Chart'
          data={this.state.data}
          height={250}
        />
        
        <ScatterChart
          title='Test Scatter Chart'
          data={this.state.data}
          height={250}
        />
        
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))

```

## When it gets rendered

### Bar Chart
![Bar Chart](https://image.ibb.co/iVYuHm/image.png)

### Line Chart
![Line Chart](https://image.ibb.co/jfV8cm/image.png)

### Percentage Chart
![Percentage Chart](https://image.ibb.co/f24eiR/image.png)

### Pie Chart 
![Pie Chart](https://image.ibb.co/gCCziR/image.png)

### Scatter Chart
![Scatter Chart](https://image.ibb.co/dd4Jcm/image.png)