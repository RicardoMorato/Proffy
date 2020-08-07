import React, { SelectHTMLAttributes } from 'react';

import './styles.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
};

const AppSelect: React.FC<SelectProps> = ({ name, label, ...rest }) => {
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} {...rest} />
    </div>
  );
}

export default AppSelect
