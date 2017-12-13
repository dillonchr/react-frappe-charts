import React from 'react';
import PropTypes from 'prop-types';
import ChartBuilder from './ChartBuilder';
import { LINE } from './ChartType';
import { defaultChartPropTypes } from './defaults';

class LineChart extends React.Component {
  render () {
    return <ChartBuilder { ...this.props } />
  }
}

LineChart.defaultProps = {
    type: LINE
}

LineChart.propTypes = defaultChartPropTypes;

export default LineChart;
