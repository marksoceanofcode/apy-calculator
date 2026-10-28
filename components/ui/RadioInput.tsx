import { twMerge } from "tailwind-merge";

interface RadioInputProps {
  id: string;
  label?: string;
  name?: string;
  containerClasses?: string;
}

export const RadioInput = ({
  id,
  label = "Compound Frequency",
  name = "compoundFrequency",
  containerClasses,
}: RadioInputProps) => {
  const containerClass = twMerge("mb-4", containerClasses);

  return (
    <div id={id} className={containerClass}>
      {label ? (
        <span className="block mb-2 font-semibold">{label}</span>
      ) : (
        <></>
      )}
      <div className="flex gap-3">
        <div>
          <input
            id={`${id}-daily`}
            className="peer sr-only"
            defaultChecked
            name={name}
            type="radio"
            value="daily"
          />
          <label
            htmlFor={`${id}-daily`}
            className="inline-block cursor-pointer rounded-lg bg-[#cccccc] px-6 py-2.5 font-semibold text-foreground transition-colors peer-checked:bg-dark-green peer-checked:text-bright-green"
          >
            Daily
          </label>
        </div>
        <div>
          <input
            id={`${id}-monthly`}
            className="peer sr-only"
            name={name}
            type="radio"
            value="monthly"
          />
          <label
            htmlFor={`${id}-monthly`}
            className="inline-block cursor-pointer rounded-lg bg-[#cccccc] px-6 py-2.5 font-semibold text-foreground transition-colors peer-checked:bg-dark-green peer-checked:text-bright-green"
          >
            Monthly
          </label>
        </div>
      </div>
    </div>
  );
};

