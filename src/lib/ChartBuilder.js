import React from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
import Chart from 'frappe-charts/dist/frappe-charts.min.esm';
import 'frappe-charts/dist/frappe-charts.min.css';
import { debug } from 'util';

class ChartBuilder extends React.Component {
  
  componentDidMount () {

    const {
      title,
      data,
      type,
      height,
      ...rest
    } = this.props

    this.c = new Chart({ parent: this.chart, title, data, type, height, ...rest });
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps && !nextProps.data || !isEqual(this.props.data, nextProps.data)) {

      const {
        title,
        data,
        type,
        height,
        ...rest
      } = nextProps;

      if (this.c && this.c.update_values && typeof this.c.update_values === "function") {
        this.c.update_values(nextProps.data.datasets, nextProps.data.labels);
      } else {
        this.c = new Chart({ parent: this.chart, title, data, type, height, ...rest });
      }
    }
  }

  render () {
    return (<div ref={ chart => (this.chart = chart) } />)
  }
}

export default ChartBuilder;
