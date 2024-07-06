import React from "react";
import { render } from "@testing-library/react";
import HomepageView from "../components/pages/Home";

describe("render home", () => {
  it("should render home", () => {
    const { container } = render(<HomepageView />);
    expect(container).toMatchSnapshot();
  });
});
