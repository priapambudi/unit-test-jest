import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Button from "@/components/ui/Button";

describe("button component", () => {
  it("should render button component", () => {
    const { container } = render(
      <Button onClick={() => console.log("clicked")}>Submit </Button>
    );
    expect(container).toMatchSnapshot();
  });
  it("should click onclick event", () => {
    const { getByRole } = render(
      <Button onClick={() => console.log("clicked")}>Submit</Button>
    );
    const buttonSubmit = getByRole("button");
    fireEvent.click(buttonSubmit);
    expect(buttonSubmit).toBeInTheDocument();
  });
});
