import React from 'react';
import PropTypes from 'prop-types';
import ChartBuilder from './ChartBuilder';
import { SCATTER } from './ChartType';
import { defaultChartPropTypes } from './defaults';

class PieChart extends React.Component {
    render() {
        return <ChartBuilder { ...this.props } />
    }
}

PieChart.defaultProps = {
    type: SCATTER
}

PieChart.propTypes = defaultChartPropTypes;

export default PieChart;
