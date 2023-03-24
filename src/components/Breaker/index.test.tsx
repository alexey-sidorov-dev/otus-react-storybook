import { render, screen } from "@testing-library/react";
import { Breaker } from ".";

describe("Breake", () => {
  it("should find breaker", () => {
    const number = 2;
    const text = String(Math.random());
    render(<Breaker number={number} text={text} />);

    expect(screen.getByTestId("breaker")).toBeInTheDocument();
  });
});
