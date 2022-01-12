import React, {useState} from 'react';
import './form-input.styles.scss'

const FormInput = ({title, subTitle, value, onChange}) => {
  return (
    <div className="form-wrapper" data-testid="form-input">
      <h3 data-testid="title">{title}</h3>
      <span data-testid="subtitle">{subTitle}</span>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
}

export default FormInput;
