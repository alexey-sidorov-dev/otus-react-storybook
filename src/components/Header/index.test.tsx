import { render, screen } from "@testing-library/react";
import Header from ".";

describe("Header", () => {
  it("should find header", () => {
    render(<Header />);

    expect(screen.getByTestId("header")).toBeInTheDocument();
  });
});
