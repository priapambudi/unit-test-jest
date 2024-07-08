import React from "react";
import { fireEvent, render } from "@testing-library/react";
import HomepageView from "../../../components/pages/Home";

describe("render home", () => {
  it("should render home", () => {
    const { container } = render(<HomepageView />);
    expect(container).toMatchSnapshot();
  });
  it("should click button submit on home page", () => {
    const { getByText } = render(<HomepageView />);
    const buttonSubmit = getByText("Submit");
    fireEvent.click(buttonSubmit);
    expect(buttonSubmit).toBeInTheDocument();
  });
});
