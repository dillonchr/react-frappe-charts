import React from 'react';
import PropTypes from 'prop-types';
import ChartBuilder from './ChartBuilder';
import { PERCENTAGE } from './ChartType';
import { defaultChartPropTypes } from './defaults';

class PercentageChart extends React.Component {
    render() {
        return <ChartBuilder { ...this.props } />
    }
}

PercentageChart.defaultProps = {
    type: PERCENTAGE
}

PercentageChart.propTypes = defaultChartPropTypes;

export default PercentageChart;
