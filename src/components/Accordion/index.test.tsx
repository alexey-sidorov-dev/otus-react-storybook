import { render, screen } from "@testing-library/react";
import { Accordion } from ".";

describe("Accordion", () => {
  it("should render accordion", () => {
    const collapsed = true;
    const text = String(Math.random());
    render(<Accordion visible={collapsed} text={text} />);

    expect(screen.getByTestId("accordion")).toBeInTheDocument();
  });
});
