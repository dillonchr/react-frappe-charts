import React from 'react';
import PropTypes from 'prop-types';
import ChartBuilder from './ChartBuilder';
import { BAR } from './ChartType';
import { defaultChartPropTypes } from './defaults';

class BarChart extends React.Component {
    render() {
        return <ChartBuilder { ...this.props } />
    }
}

BarChart.defaultProps = {
    type: BAR
}

BarChart.propTypes = defaultChartPropTypes;

export default BarChart;
