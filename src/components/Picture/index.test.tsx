import { render, screen } from "@testing-library/react";
import { Picture } from ".";
import { text } from "../../constants";

describe("Picture", () => {
  it("should find picture", () => {
    const float = "left";
    render(<Picture text={text} float={float} />);

    expect(screen.getByTestId("picture")).toBeInTheDocument();
  });
});
