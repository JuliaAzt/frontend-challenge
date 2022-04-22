import PropTypes from 'prop-types';
import Typography from '../Typography';
import './Card.scss';

function Card(props) {
  const { children, title } = props;
  return (
    <div className="card">
      <Typography variant="title" level="medium">
        {title}
      </Typography>
      <div>{children}</div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any
};

export default Card;
