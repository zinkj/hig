export default function stylesheet(props, themeData, themeMeta) {
  const { width, stylesheet: customStylesheet } = props;

  const styles = {
    wrapper: {
      height: "auto",
      width: width || "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch"
    },
    sectionWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      padding: `${themeData["menu.section.verticalPadding"]} 0`,
      borderTop: `1px solid ${themeData["menu.section.borderColor"]}`
    },
    sectionLabel: {
      fontFamily: themeData["menu.section.label.fontFamily"],
      fontSize: themeData["menu.section.label.fontSize"],
      fontWeight: themeData["menu.section.label.fontWeight"],
      lineHeight: themeData["menu.section.label.lineHeight"],
      color: themeData["menu.section.label.color"],
      textTransform: "uppercase",
      padding: `0 ${themeData["menu.item.horizontalPadding"]} ${
        themeData["menu.section.verticalPadding"]
      } ${themeData["menu.item.horizontalPadding"]}`
    },
    itemWrapper: {
      display: "flex",
      alignItems: "center",
      padding: `0 ${themeData["menu.item.horizontalPadding"]}`
    },
    itemLabel: {
      fontFamily: themeData["menu.item.label.fontFamily"],
      fontSize: themeData["menu.item.label.fontSize"],
      fontWeight: themeData["menu.item.label.fontWeight"],
      lineHeight: themeData["menu.item.label.lineHeight"],
      color: themeData["menu.item.label.color"],
      padding: `${themeData["menu.item.label.verticalPadding"]} 0`,
      flexGrow: 1,
      flexShrink: 1
    },
    itemIcon: {
      display: "flex",
      padding: `${themeData["menu.item.label.verticalPadding"]} 0`,
      flexGrow: 0,
      flexShrink: 0,
      paddingRight: themeData["menu.item.horizontalPadding"]
    }
  };

  if (customStylesheet) {
    return customStylesheet(styles, props, themeData, themeMeta);
  }
  return styles;
}
