import { render, screen } from "@testing-library/react";
import Breake from ".";

describe("Breake", () => {
  it("should find hr", () => {
    render(<Breake />);

    expect(screen.getByRole("separator")).toBeInTheDocument();
  });
});
