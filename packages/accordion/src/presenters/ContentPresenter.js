import React, { Component } from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { ThemeContext } from "@hig/theme-context";
import { createCustomClassNames } from "@hig/utils";

import stylesheet from "../stylesheet";

export default class ContentPresenter extends Component {
  static propTypes = {
    collapsed: PropTypes.bool,
    stylesheet: PropTypes.func,
    children: PropTypes.node
  };

  constructor(props) {
    super(props);
    this.contentInnerWrapper = null;
    this.setContentInnerWrapperRef = element => {
      this.contentInnerWrapper = element;
    };
  }

  render() {
    const {
      stylesheet: customStylesheet,
      collapsed,
      children,
      ...otherProps
    } = this.props;

    const { className } = otherProps;
    const contentTransitionWrapperClassName = createCustomClassNames(
      className,
      "content-transition-wrapper"
    );
    const contentInnerWrapperClassName = createCustomClassNames(
      className,
      "content-inner-wrapper"
    );

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles, metadata }) => {
          const styles = stylesheet(
            {
              collapsed,
              stylesheet: customStylesheet
            },
            resolvedRoles,
            metadata
          );

          return (
            <div
              className={cx(
                css(styles.contentTransitionWrapper),
                css({
                  height:
                    !collapsed && this.contentInnerWrapper
                      ? `${this.contentInnerWrapper.clientHeight}px`
                      : 0
                }),
                contentTransitionWrapperClassName
              )}
            >
              <div
                className={cx(
                  css(styles.contentInnerWrapper),
                  contentInnerWrapperClassName
                )}
                ref={this.setContentInnerWrapperRef}
              >
                {children}
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
