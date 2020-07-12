const colors = {
  modalBackground: "#f6f3f3",
  inputBackground: "#ffffff",
  tumbleweed: "#d8a48f",
  oldRose: "#bb8588",
  mediumChampagne: "#d6ce93",
  border: "#a3a380",
  infoTipText: "#a3a380",
  commonText: "#000000",
  green: "#86e3ce",
  yellow: "#ffdd94",
  red: "#fa897b",
  white: "#ffffff",
};

const media = {
  tabletOnly: "@media screen and (min-width: 600px) and (max-width: 1003px)",
  desktopOnly: "@media screen and (min-width: 1004px)",
};

const compoundStyles = {
  border: `solid ${colors.border} thin`,
  borderRadius: "10px",
};

export const stylesConstans = {
  colors,
  media,
  compoundStyles,
};
