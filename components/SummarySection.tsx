interface SummarySectionProps {
    id: string;
    futureBalance?: number;
}

export const SummarySection = (({id, futureBalance = 0.00}: SummarySectionProps) => {
    const ulItemLeftClasses = "font-semibold";
    const ulItemRightClasses = "float-right";

    return (
        <div className="flex flex-col gap-y-3">
            <h4 className="font-semibold text-2xl">
                Estimated Future Balance
            </h4>
            <p className="font-semibold text-3xl">
                ${futureBalance.toString()}
            </p>
            <p className="text-accent-gray text-xs">
                The total accumulated balance after the savings period.
            </p>
            <ul className="flex flex-col gap-y-5 w-full">
                <li>
                    <span className={ulItemLeftClasses}>Interest Earned</span> <span className={ulItemRightClasses}>$0.00</span>
                </li>
                <li>
                    <span className={ulItemLeftClasses}>Total Contributions</span> <span className={ulItemRightClasses}>$0.00</span>
                </li>
                <li>
                    <span className={ulItemLeftClasses}>Initial Deposit</span> <span className={ulItemRightClasses}>$0.00</span>
                </li>
            </ul>

        </div>
    )
})