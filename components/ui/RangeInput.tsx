type OrientValues = "horizontal" | "vertical";
type DataListObj = { id?: string; label?: string; value: string };

interface RangeInputProps {
  //Additional Attributes
  dataList?: DataListObj[];
  id?: string; //ID of the input element
  label?: string; //Label for the input element, optional but recommended
  list?: string; //A string of the id of a <datalist> element in the same document
  max?: string; //The greatest value in the range.
  min?: string; //The lowest value in the range.
  name?: string; //Name used for the input and label relationship
  step?: string; //Specifies the granularity
  defaultValue?: string;

  //Non-Standard Attributes
  //orient?: OrientValues;

  //Events
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onInput?: React.InputEventHandler<HTMLInputElement>;

  //Styling
  containerClasses?: string;
  inputClasses?: string;
}

export const RangeInput = ({
  dataList,
  id,
  label,
  list,
  max,
  min,
  name,
  step,
  defaultValue,
  //orient,
  containerClasses,
  inputClasses,
  onChange,
  onInput,
}: RangeInputProps) => {
  return (
    <div className={containerClasses}>
      {label ? <label htmlFor={name}>{label}</label> : <></>}
      <input
        id={id}
        list={list}
        min={min}
        max={max}
        name={name}
        step={step}
        defaultValue={defaultValue}
        //orient={orient?.toString()}
        onChange={onChange}
        onInput={onInput}
        className={inputClasses}
        type="range"
      ></input>
      {dataList ? (
        dataList.map((item, key) => (
          <option id={item.id} label={item.label} key={key} value={item.value}></option>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};
