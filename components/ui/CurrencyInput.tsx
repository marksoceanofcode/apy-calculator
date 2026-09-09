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
      <label className="block mb-2 font-semibold" htmlFor={name}>
        {label}
      </label>
      <div className="inline-block relative">
        <span className="absolute left-[10px] pt-2 pointer-events-none text-accent-gray">
          $
        </span>
        <input
          id={id}
          className="border border-accent-gray placeholder-text-accent-gray pl-6 pr-4 py-2 rounded-md"
          inputMode="decimal"
          name={name}
          pattern="^[0-9]+(?:\.[0-9]+)?$"
          placeholder="0"
          type="text"
        />
      </div>
      {description ? (
        <span className="block mt-0.5 text-xs text-accent-gray">{description}</span>
      ) : (
        <></>
      )}
    </div>
  );
};
