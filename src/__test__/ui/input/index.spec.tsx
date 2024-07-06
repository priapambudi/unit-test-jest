import React from "react";
import { render } from "@testing-library/react";
import Input from "@/components/ui/Input";

describe("input component", () => {
  it("should render input type text", () => {
    const { container, getBylabelText } = render(
      <Input type={"text"} label={"test"} name={"test"} />
    );
    const input = getBylabelText("test");
    expect(input).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  it("should render inpit type textarea", () => {
    const { container } = render(
      <Input
        type={"textarea"}
        label={"test"}
        placeholder="your commet here"
        name={"test"}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
