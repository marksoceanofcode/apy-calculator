import { RangeInput } from "./ui/RangeInput";

export const ApyCalculatorContainer = () => {
  return (
    <div className="w-full">
      <div className="mb-8">
        <h2 className="font-semibold font-montserrat text-5xl text-center">APY Calculator</h2>
      </div>
      <div className="flex flex-col w-full lg:flex-row">
        <div className="flex-1 p-3">
          <RangeInput
            id="apyInputId"
            min="1"
            max="10"
            name="apyInput"
            step="0.1"
            defaultValue="3"
          />
        </div>
        <div className="flex-1 p-3 items-center justify-center">Col 2</div>
      </div>
    </div>
  );
};
