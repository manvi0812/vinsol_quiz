import React from 'react';
import '../styles/button.scss';

export const ButtonTypes = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUBMIT: 'submit'
};

const Button = ({ type, text, cssClassName, onClick }) => {
  const renderButtonType = () => {
    switch (type) {
      case ButtonTypes.PRIMARY:
        return (
          <button onClick={onClick} className={`btn ${type}-btn ${cssClassName}`}>
            {text}
          </button>
        );
      case ButtonTypes.SECONDARY:
        return (
          <button onClick={onClick} className={`btn ${type}-btn ${cssClassName}`}>
            {text}
          </button>
        );
      case ButtonTypes.SUBMIT:
        return (
          <button onClick={onClick} type='submit' value='Submit' className={`btn ${type}`}>
            {text}
          </button>
        );
      default:
        return 'secondary';
    }
  };

  return <>{renderButtonType()}</>;
};

export default Button;
