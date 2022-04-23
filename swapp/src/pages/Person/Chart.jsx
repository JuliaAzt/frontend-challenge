import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import PropTypes from 'prop-types';
ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ number }) => {
  const data = {
    datasets: [
      {
        label: '# of Votes',
        data: [number / 6, 1 - number / 6],
        backgroundColor: ['#FFE81F', '#7388A95A'],
        borderWidth: 0
      }
    ]
  };

  return <Pie data={data} />;
};

Chart.propTypes = {
  number: PropTypes.number
};

export default Chart;
