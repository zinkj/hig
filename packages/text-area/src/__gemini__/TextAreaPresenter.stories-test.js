import React from "react";
import { storiesOf } from "@storybook/react";

import TextArea from "../index";

const defaultProps = {
  label: "Comments",
  placeholder: "Enter your comments here.",
  required: "This field is required.",
  disabled: false,
  error: false
};

storiesOf("TextArea", module).add("default", () => (
  <TextArea {...defaultProps} />
));

storiesOf("TextArea", module).add("disabled", () => (
  <TextArea {...defaultProps, disabled=true} />
));

storiesOf("TextArea", module).add("error", () => (
  <TextArea {...defaultProps, error=true} />
));