import { CurrencyInput } from "./ui/CurrencyInput";
import { RangeInput } from "./ui/RangeInput";

export const ApyCalculatorContainer = () => {
  return (
    <div className="w-full">
      <div className="mb-8">
        <h2 className="font-semibold font-montserrat text-3xl text-center lg:text-5xl">
          APY Calculator
        </h2>
      </div>
      <div className="flex flex-col w-full lg:flex-row">
        <div className="flex-1 p-3">
          <form>
            <CurrencyInput
              id="currencyInput"
              description="The amount you start with (principal)"
              name="initialdeposit"
              label="Initial Deposit"
            />
            <CurrencyInput
              id="monthlyContributionInput"
              description="Amount you add every month"
              name="monthlycontribution"
              label="Monthly Contribution"
            />
            <RangeInput
              id="apyInputId"
              min="1"
              max="10"
              name="apyInput"
              step="0.1"
              defaultValue="3"
              inputClasses="irange-slider"
            />
          </form>
        </div>
        <div className="flex-1 p-3 items-center justify-center">Col 2</div>
      </div>
    </div>
  );
};
