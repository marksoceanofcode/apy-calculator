"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";

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
  minLabel?: string; //Display label for the minimum value below the range slider
  maxLabel?: string; //Display label for the maximum value below the range slider
  name?: string; //Name used for the input and label relationship
  step?: string; //Specifies the granularity
  defaultValue?: string;
  unit?: string; //Static unit string positioned to the right inside the text input

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
  minLabel,
  maxLabel,
  name,
  step,
  defaultValue,
  unit,
  //orient,
  containerClasses,
  inputClasses,
  onChange,
  onInput,
}: RangeInputProps) => {
  const formatWithStep = (val: string | undefined) => {
    if (val === undefined) return "";
    if (step && step.includes(".")) {
      const decimals = step.split(".")[1]?.length ?? 0;
      const num = Number(val);
      if (!Number.isNaN(num)) {
        return num.toFixed(decimals);
      }
    }
    return val;
  };

  const [value, setValue] = useState<string>(() =>
    formatWithStep(defaultValue ?? min ?? "0")
  );

  const containerClass = twMerge("mb-4", containerClasses);

  const minNum = min !== undefined ? Number(min) : 0;
  const maxNum = max !== undefined ? Number(max) : 100;
  const parsedValue = Number(value);
  const clampedValue = Number.isNaN(parsedValue)
    ? minNum
    : Math.min(Math.max(parsedValue, minNum), maxNum);
  const progress =
    maxNum > minNum ? ((clampedValue - minNum) / (maxNum - minNum)) * 100 : 0;

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(formatWithStep(e.target.value));
    onChange?.(e);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange?.(e);
  };

  const handleTextBlur = () => {
    if (value.trim() === "" || Number.isNaN(Number(value))) {
      setValue(formatWithStep(defaultValue ?? min ?? "0"));
      return;
    }
    setValue(formatWithStep(String(clampedValue)));
  };

  return (
    <div className={containerClass}>
      <div className="flex items-center justify-between mb-2">
        {label ? (
          <label className="font-semibold" htmlFor={name}>
            {label}
          </label>
        ) : (
          <></>
        )}
        <div className="inline-block relative">
          {unit ? (
            <span className="absolute right-[10px] pt-2 pointer-events-none text-accent-gray">
              {unit}
            </span>
          ) : (
            <></>
          )}
          <input
            aria-label={label ? `${label} value` : name}
            className="border border-accent-gray placeholder-text-accent-gray pl-3 py-2 rounded-md text-right w-28"
            style={
              unit
                ? { paddingRight: `calc(${unit.length * 0.85}ch + 16px)` }
                : { paddingRight: "12px" }
            }
            inputMode="decimal"
            pattern="^[0-9]+(?:\.[0-9]+)?$"
            type="text"
            value={value}
            onChange={handleTextChange}
            onBlur={handleTextBlur}
          />
        </div>
      </div>
      <input
        id={id}
        list={list}
        min={min}
        max={max}
        name={name}
        step={step}
        value={clampedValue}
        //orient={orient?.toString()}
        onChange={handleRangeChange}
        onInput={onInput}
        className={inputClasses}
        style={{
          background: `linear-gradient(to right, #8aed39 ${progress}%, #cccccc ${progress}%)`,
        }}
        type="range"
      ></input>
      {min !== undefined || max !== undefined || minLabel || maxLabel ? (
        <div className="flex justify-between mt-1 text-sm text-accent-gray">
          <span>{minLabel ?? min}</span>
          <span>{maxLabel ?? max}</span>
        </div>
      ) : (
        <></>
      )}
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
