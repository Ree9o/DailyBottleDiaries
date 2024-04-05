import React from "react";

interface LabeledInputProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
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
      <label htmlFor={id} className="mb-2 block font-bold">
        {label}
      </label>
      {id === "content" && type === "text" ? (
        <textarea
          id={id}
          className="h-40 w-full rounded-md border px-3 py-2"
          value={value}
          onChange={onChange}
          required={required}
        />
      ) : (
        <input
          type={type}
          id={id}
          className="w-full rounded-md border px-3 py-2 "
          value={value}
          onChange={onChange}
          required={required}
          maxLength={30}
        />
      )}
    </div>
  );
}
