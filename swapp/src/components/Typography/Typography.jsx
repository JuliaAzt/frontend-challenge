import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Typography.scss';

function Typography(props) {
  const { children, variant, level } = props;

  const style = classNames(
    `typography__${variant}`,
    `typography__${variant}--${level || 'medium'}`
  );

  return <span className={style}>{children}</span>;
}

Typography.propTypes = {
  variant: PropTypes.string,
  level: PropTypes.string,
  children: PropTypes.any
};

export default Typography;