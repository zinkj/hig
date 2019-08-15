import { select, text } from "@storybook/addon-knobs/react";
import { makeSelectOptions } from "@hig/storybook/utils";

import { indicators, indicatorPositions } from "../constants";

const indicatorOptions = makeSelectOptions(indicators);
const indicatorPositionOptions = makeSelectOptions(indicatorPositions);

const knobGroupIds = { basic: "Basic" };

const knobLabels = {
  label: "Label",
  indicator: "Indicator",
  indicatorPosition: "Indicator position"
};

export default function getKnobs(props) {
  const { label, indicator, indicatorPosition, ...otherProps } = props;

  return {
    ...otherProps,
    label: text(knobLabels.label, label, knobGroupIds.basic),
    indicator: select(
      knobLabels.indicator,
      indicatorOptions,
      indicator,
      knobGroupIds.basic
    ),
    indicatorPosition: select(
      knobLabels.indicatorPosition,
      indicatorPositionOptions,
      indicatorPosition,
      knobGroupIds.basic
    )
  };
}
