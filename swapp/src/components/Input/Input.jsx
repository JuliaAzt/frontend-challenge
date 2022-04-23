import PropTypes from 'prop-types';
import './Input.scss';
import { AiOutlineSearch } from 'react-icons/ai';
function Input(props) {
  const { value, onChange, placeholder, variant, type, label } = props;
  const inputVariant = variant || 'text';
  switch (inputVariant) {
    case 'search':
      return (
        <div className="input">
          <AiOutlineSearch />
          <input placeholder={placeholder} type={type} value={value} onChange={onChange} />
        </div>
      );
    case 'text':
      return (
        <div>
          {label !== '' && <label className="input__label">{label}</label>}
          <div className="input">
            <input placeholder={placeholder} type={type} value={value} onChange={onChange} />
          </div>
        </div>
      );

    case 'textarea':
      return (
        <div>
          {label !== '' && <label className="input__label">{label}</label>}
          <div className="input">
            <textarea
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              className="input__textarea"></textarea>
          </div>
        </div>
      );

    case 'file':
      return (
        <div className="input__file">
          {label !== '' && <label className="input__label">{label}</label>}
          <input value={value} onChange={onChange} type="file" />
        </div>
      );
  }
}

Input.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default Input;
