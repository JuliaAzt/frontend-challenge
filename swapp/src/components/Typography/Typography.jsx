import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Typography.scss';

function Typography(props) {
  const { children, variant, level, className } = props;

  const style = classNames(
    `typography__${variant}`,
    `typography__${variant}--${level || 'medium'}`,
    className || ''
  );

  return <span className={style}>{children}</span>;
}

Typography.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
  level: PropTypes.string,
  children: PropTypes.any
};

export default Typography;
