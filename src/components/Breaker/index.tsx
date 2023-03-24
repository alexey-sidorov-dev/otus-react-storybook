import { FC } from "react";
import { BreakerProps } from "../../types";

export const Breaker: FC<BreakerProps> = ({ number, text }) => {
  const br = [...Array(number)].map((value, index) => <hr key={`${index}`} />);

  return (
    <>
      <div className="breaker" data-testid="breaker">
        {br}
        {text}
      </div>
    </>
  );
};
