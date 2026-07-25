type TypeOfInput = "text" | "range";

interface ModularInputProps {
  type: TypeOfInput;
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

export const ModularInput = ({ description, label, name }: ModularInputProps) => {
  return <></>;
};
