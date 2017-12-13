import PropTypes from 'prop-types';

const defaultChartPropTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string),
    datasets: PropTypes.arrayOf(PropTypes.object)
  }).isRequired,
  height: PropTypes.number.isRequired
};

export {
    defaultChartPropTypes
}
