import React from "react";
import { TypographyProps } from "./types.type";

const Typography = (props: TypographyProps) => {
  const { children } = props;
  return <div>{children}</div>;
};

export default Typography;
