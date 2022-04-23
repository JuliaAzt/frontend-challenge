import PropTypes from 'prop-types';
import Typography from '../Typography';
import './Card.scss';

function Card(props) {
  const { children, title, subtitle, className } = props;
  return (
    <div className={`card ${className || ''}`}>
      <div className="card__header">
        <Typography variant="title" level="medium" className="card__title">
          {title}
        </Typography>
        {subtitle !== '' && (
          <Typography variant="text" level="small" className="card__subtitle">
            {subtitle}
          </Typography>
        )}
      </div>

      <div>{children}</div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any
};

export default Card;
