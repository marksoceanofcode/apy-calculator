type TypeOfInput = "text" | "range";

interface ModularInputProps {
  type: TypeOfInput;
  containerClasses?: string;
  description?: string;
  descriptionClasses?: string;
  id?: string;
  inputClasses?: string;
  label?: string;
  labelClases?: string;
  maxlength?: string;
  minlength?: string;
  name?: string;
  onchange?: string;
  required?: boolean;
  size?: string;
}

export const ModularInput = ({
  type,
  containerClasses,
  description,
  inputClasses,
  label,
  name,
}: ModularInputProps) => {
  return (
    <div className={containerClasses}>
      <input className={inputClasses} type={type}></input>
    </div>
  );
};
