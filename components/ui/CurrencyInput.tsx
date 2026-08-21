import { twMerge } from "tailwind-merge";

interface CurrencyInputProps {
  id: string;
  label: string;
  name: string;
  containerClasses?: string;
  description?: string;
}

export const CurrencyInput = ({
  id,
  label,
  name,
  containerClasses,
  description,
}: CurrencyInputProps) => {
  const containerClass = twMerge("mb-4", containerClasses);
  const currenyPattern = "^[0-9]+(?:\.[0-9]+)?$"; // Regex: /^[0-9]+(?:\.[0-9]+)?$/

  return (
    <div className={containerClass}>
      <label htmlFor={name}>{label}</label>
      <input className="block" name={name} pattern="^[0-9]+(?:\.[0-9]+)?$" type="text" />
    </div>
  );
};
