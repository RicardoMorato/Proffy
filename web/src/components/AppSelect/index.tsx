import React, { SelectHTMLAttributes } from "react";

import "./styles.css";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const AppSelect: React.FC<SelectProps> = ({
  name,
  label,
  options,
  ...rest
}) => {
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select value="" name={name} id={name} {...rest}>
        <option value="" disabled hidden>
          Selecione uma opção
        </option>

        {options.map((item) => {
          return (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default AppSelect;
