import React, { Component } from "react";
import PropTypes from "prop-types";
import { cx, css } from "emotion";
import { polyfill } from "react-lifecycles-compat";
import { ThemeContext } from "@hig/theme-context";
import { ControlBehavior } from "@hig/behaviors";

import {
  indicators,
  indicatorPositions,
  AVAILABLE_INDICATORS,
  AVAILABLE_INDICATOR_POSITIONS
} from "./constants";
import stylesheet from "./stylesheet";
import HeaderPresenter from "./presenters/HeaderPresenter";
import ContentPresenter from "./presenters/ContentPresenter";

class Accordion extends Component {
  static propTypes = {
    /** Text label for the accordion header */
    label: PropTypes.string.isRequired,
    /** Width of the accordion */
    width: PropTypes.string,
    /** Indicator icon */
    indicator: PropTypes.oneOf(AVAILABLE_INDICATORS),
    /** Indicator's position */
    indicatorPosition: PropTypes.oneOf(AVAILABLE_INDICATOR_POSITIONS),
    /** Function to modify the component's styles */
    stylesheet: PropTypes.func,
    /** Specifies whether the accordion is default collapsed or not */
    collapsed: PropTypes.bool,
    /** Specifies whether the accordion is disabled or not */
    disabled: PropTypes.bool,
    /** Content of the accordion */
    children: PropTypes.node
  };

  static defaultProps = {
    width: "auto",
    indicator: indicators.CARET,
    indicatorPosition: indicatorPositions.LEFT,
    collapsed: true,
    disabled: false
  };

  state = {
    collapsed: this.props.collapsed
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { collapsed: nextCollapsed } = nextProps;
    const { collapsed: currentCollapsed } = prevState;

    if (currentCollapsed !== nextCollapsed) {
      return { collapsed: nextCollapsed };
    }

    return null;
  }

  onClick = () => {
    const { collapsed } = this.state;
    this.setState({ collapsed: !collapsed });
  };

  render() {
    const {
      children,
      label,
      width,
      indicator,
      indicatorPosition,
      disabled,
      stylesheet: customStylesheet,
      ...otherProps
    } = this.props;

    const {
      className,
      onBlur,
      onFocus,
      onMouseDown,
      onMouseEnter,
      onMouseLeave,
      onMouseUp,
      onHover
    } = otherProps;

    const { collapsed } = this.state;

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles, metadata }) => {
          const styles = stylesheet(
            {
              width,
              indicator,
              indicatorPosition,
              collapsed,
              stylesheet: customStylesheet
            },
            resolvedRoles,
            metadata
          );

          return (
            <div className={cx(css(styles.wrapper), className)}>
              <ControlBehavior
                onBlur={onBlur}
                onFocus={onFocus}
                onMouseDown={onMouseDown}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onMouseUp={onMouseUp}
              >
                {({
                  hasFocus,
                  hasHover,
                  isPressed,
                  onBlur: handleBlur,
                  onFocus: handleFocus,
                  onMouseDown: handleMouseDown,
                  onMouseEnter: handleMouseEnter,
                  onMouseLeave: handleMouseLeave,
                  onMouseUp: handleMouseUp
                }) => (
                  <HeaderPresenter
                    {...otherProps}
                    hasFocus={hasFocus}
                    hasHover={hasHover}
                    isPressed={isPressed}
                    onBlur={handleBlur}
                    onClick={this.onClick}
                    onFocus={handleFocus}
                    onHover={onHover}
                    onMouseDown={handleMouseDown}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    stylesheet={customStylesheet}
                    label={label}
                    indicator={indicator}
                    indicatorPosition={indicatorPosition}
                    collapsed={collapsed}
                    disabled={disabled}
                  />
                )}
              </ControlBehavior>
              <ContentPresenter
                collapsed={collapsed}
                stylesheet={customStylesheet}
                className={className}
              >
                {children}
              </ContentPresenter>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default polyfill(Accordion);
