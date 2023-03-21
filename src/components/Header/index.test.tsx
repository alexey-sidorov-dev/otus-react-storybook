import { render, screen } from "@testing-library/react";
import { Header } from ".";

describe("Header", () => {
  it("should find header", () => {
    render(<Header level="1" text="text" />);

    expect(screen.getByTestId("header")).toBeInTheDocument();
  });
});
