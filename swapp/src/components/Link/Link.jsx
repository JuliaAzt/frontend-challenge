import PropTypes from 'prop-types';
import './Link.scss';

function Link(props) {
  const { to, children } = props;
  return (
    <a href={to} className="link">
      {children}
    </a>
  );
}

Link.propTypes = {
  to: PropTypes.string,
  children: PropTypes.any
};

export default Link;
