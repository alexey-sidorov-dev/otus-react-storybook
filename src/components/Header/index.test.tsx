import { render, screen } from "@testing-library/react";
import { Header } from ".";

describe("Header", () => {
  it("should find header", () => {
    const level = 1;
    const text = String(Math.random());
    render(<Header level={level} text={text} />);

    expect(screen.getByTestId("header")).toBeInTheDocument();
  });
});
