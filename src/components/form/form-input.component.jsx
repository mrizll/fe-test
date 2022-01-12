import React, {useState} from 'react';
import './form-input.styles.scss'

const FormInput = ({title, subTitle, value, onChange}) => {
  return (
    <div className="form-wrapper">
      <h3>{title}</h3>
      <span>{subTitle}</span>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
}

export default FormInput;
