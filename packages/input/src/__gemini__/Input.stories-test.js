import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeContext } from "@hig/theme-context";

import lightGrayMediumDensityTheme from "@hig/theme-data/build/json/lightGrayMediumDensityTheme/theme.json";
import darkBlueMediumDensityTheme from "@hig/theme-data/build/json/darkBlueMediumDensityTheme/theme.json";
import webLightMediumDensityTheme from "@hig/theme-data/build/json/webLightMediumDensityTheme/theme.json";
import lightGrayHighDensityTheme from "@hig/theme-data/build/json/lightGrayHighDensityTheme/theme.json";
import darkBlueHighDensityTheme from "@hig/theme-data/build/json/darkBlueHighDensityTheme/theme.json";

import InputPresenter from "@hig/input/src/presenters/InputPresenter";
import InputHaloPresenter from "@hig/input/src/presenters/InputHaloPresenter";

const themes = [
  { name: "Light gray, medium density", theme: lightGrayMediumDensityTheme },
  { name: "Light gray, high density", theme: lightGrayHighDensityTheme },
  { name: "Dark blue, medium density", theme: darkBlueMediumDensityTheme },
  { name: "Dark blue, high density", theme: darkBlueHighDensityTheme },
  { name: "Web light", theme: webLightMediumDensityTheme }
];

function Example({ theme, name }) /* eslint-disable-line react/prop-types */ {
  return (
    <ThemeContext.Provider value={theme}>
      <div
        style={{
          backgroundColor:
            theme.resolvedRoles["colorScheme.surfaceLevel100Color"],
          padding: theme.resolvedRoles["density.spacings.medium"],
          width: "300px"
        }}
      >
        <InputHaloPresenter type="line">
          <InputPresenter value={`Line, Default - ${name}`} />
        </InputHaloPresenter>
        <div
          style={{ height: theme.resolvedRoles["density.spacings.medium"] }}
        />
        <InputHaloPresenter type="box">
          <InputPresenter value={`Default, Box - ${name}`} />
        </InputHaloPresenter>
        <div
          style={{ height: theme.resolvedRoles["density.spacings.medium"] }}
        />
        <InputPresenter value={`Default - ${name}`} />
        <div
          style={{ height: theme.resolvedRoles["density.spacings.medium"] }}
        />

        <InputHaloPresenter hasHover type="line">
          <InputPresenter hasHover value={`Line, Hover - ${name}`} />
        </InputHaloPresenter>
        <div
          style={{ height: theme.resolvedRoles["density.spacings.medium"] }}
        />
        <InputHaloPresenter hasHover type="box">
          <InputPresenter hasHover value={`Hover, Box - ${name}`} />
        </InputHaloPresenter>
        <div
          style={{ height: theme.resolvedRoles["density.spacings.medium"] }}
        />
        <InputPresenter hasHover value={`Hover - ${name}`} />
        <div
          style={{ height: theme.resolvedRoles["density.spacings.medium"] }}
        />

        <InputHaloPresenter hasFocus type="line">
          <InputPresenter hasFocus value={`Line, Focus - ${name}`} />
        </InputHaloPresenter>
        <div
          style={{ height: theme.resolvedRoles["density.spacings.medium"] }}
        />
        <InputHaloPresenter hasFocus type="box">
          <InputPresenter hasFocus value={`Focus, Box - ${name}`} />
        </InputHaloPresenter>
        <div
          style={{ height: theme.resolvedRoles["density.spacings.medium"] }}
        />
        <InputPresenter hasFocus value={`Focus - ${name}`} />
        <div
          style={{ height: theme.resolvedRoles["density.spacings.medium"] }}
        />

        <InputHaloPresenter isDisabled type="line">
          <InputPresenter disabled value={`Line, Disabled - ${name}`} />
        </InputHaloPresenter>
        <div
          style={{ height: theme.resolvedRoles["density.spacings.medium"] }}
        />
        <InputHaloPresenter isDisabled type="box">
          <InputPresenter disabled value={`Disabled, Box - ${name}`} />
        </InputHaloPresenter>
        <div
          style={{ height: theme.resolvedRoles["density.spacings.medium"] }}
        />
        <InputPresenter disabled value={`Disabled - ${name}`} />
        <div
          style={{ height: theme.resolvedRoles["density.spacings.medium"] }}
        />

        <InputHaloPresenter isError type="line">
          <InputPresenter error value={`Line, Error - ${name}`} />
        </InputHaloPresenter>
        <div
          style={{ height: theme.resolvedRoles["density.spacings.medium"] }}
        />
        <InputHaloPresenter isError type="box">
          <InputPresenter error value={`Box, Error - ${name}`} />
        </InputHaloPresenter>
        <div
          style={{ height: theme.resolvedRoles["density.spacings.medium"] }}
        />
        <InputPresenter error value={`Error - ${name}`} />
        <div
          style={{ height: theme.resolvedRoles["density.spacings.medium"] }}
        />
      </div>
    </ThemeContext.Provider>
  );
}

const inputStories = storiesOf("Input", module);

themes.forEach(({ theme, name }) => {
  inputStories.add(name, () => <Example theme={theme} name={name} />);
});
