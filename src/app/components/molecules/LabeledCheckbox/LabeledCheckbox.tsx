import React from "react";

interface LabeledCheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function LabeledCheckbox({
  id,
  label,
  checked,
  onChange,
}: LabeledCheckboxProps) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="inline-flex items-center">
        <input
          type="checkbox"
          id={id}
          className="form-checkbox"
          checked={checked}
          onChange={onChange}
        />
        <span className="ml-2">{label}</span>
      </label>
    </div>
  );
}
