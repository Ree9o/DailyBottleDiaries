import React from "react";

interface LabeledInputProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  required?: boolean;
}

export default function LabeledInput({
  id,
  label,
  type = "text",
  value,
  onChange,
  required = false,
}: LabeledInputProps) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block mb-2 font-bold">
        {label}
      </label>
      {id === "content" && type === "text" ? (
        <textarea
          id={id}
          className="w-full px-3 py-2 border rounded-md h-40"
          value={value}
          onChange={onChange}
          required={required}
        />
      ) : (
        <input
          type={type}
          id={id}
          className="w-full px-3 py-2 border rounded-md "
          value={value}
          onChange={onChange}
          required={required}
        />
      )}
    </div>
  );
}
