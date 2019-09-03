import { action } from "@storybook/addon-actions";
import { boolean, select } from "@storybook/addon-knobs/react";

const knobGroupIds = {
  basic: "Basic",
  form: "Form Attributes"
};

const knobLabels = {
  disabled: "Disabled",
  error: "Error",
  variant: "variant",
  onBlur: "onBlur",
  onChange: "onChange",
  onFocus: "onFocus"
};

const variantOptions = {
  line: "Line",
  box: "Box"
};

export default function getKnobs(props) {
  const { disabled, error, variant, onBlur, onChange, onFocus, ...otherProps } = props;

  return {
    ...otherProps,
    disabled: boolean(knobLabels.disabled, disabled, knobGroupIds.basic),
    error: boolean(knobLabels.error, error, knobGroupIds.basic),
    variant: select(
      knobLabels.variant,
      variantOptions,
      variant,
      knobGroupIds.basic
    ),
    onBlur: action(knobLabels.onBlur),
    onChange: action(knobLabels.onChange),
    onFocus: action(knobLabels.onFocus)
  };
}
