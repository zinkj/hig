import React, { Component } from "react";
import PropTypes from "prop-types";
import { cx, css } from "emotion";
import { ThemeContext } from "@hig/theme-context";
import { createCustomClassNames } from "@hig/utils";

import { variants, AVAILABLE_VARIANTS } from "../constants";
import stylesheet from "../stylesheet";

export default class MenuItemPresenter extends Component {
  static propTypes = {
    /** Text label of the menu item */
    label: PropTypes.string.isRequired,
    /** Specify whether the menu item is checked/selected */
    checked: PropTypes.bool,
    icon: PropTypes.node,
    avatar: PropTypes.string,
    image: PropTypes.string,
    checkmark: PropTypes.bool,
    disabled: PropTypes.bool,
    /** Function to modify the menu item's styles */
    stylesheet: PropTypes.func,
    variant: PropTypes.oneOf(AVAILABLE_VARIANTS)
  };

  static defaultProps = {
    checked: false,
    checkmark: false,
    variant: variants.BASIC
  };

  render() {
    const {
      label,
      checked,
      variant,
      checkmark,
      icon,
      avatar,
      image,
      stylesheet: customStylesheet,
      ...otherProps
    } = this.props;

    const { className } = otherProps;

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles, metadata }) => {
          const styles = stylesheet(
            {
              checked,
              checkmark,
              icon,
              avatar,
              image,
              variant,
              stylesheet: customStylesheet
            },
            resolvedRoles,
            metadata
          );

          const labelClassName = createCustomClassNames(
            className,
            "item-label"
          );
          const iconClassName = createCustomClassNames(className, "item-icon");

          return (
            <div className={cx(css(styles.itemWrapper), className)}>
              {variant === variants.WITH_ICON && (
                <div className={cx(css(styles.itemIcon), iconClassName)}>
                  {icon}
                </div>
              )}
              <div className={cx(css(styles.itemLabel), labelClassName)}>
                {label}
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
