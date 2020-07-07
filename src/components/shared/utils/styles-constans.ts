const colors = {
  modalBackground: "#fcf7f0",
  tumbleweed: "#d8a48f",
  oldRose: "#bb8588",
  mediumChampagne: "#d6ce93",
  borderColor: "#a3a380",
};

const media = {
  tabletOnly: "@media screen and (min-width: 600px) and (max-width: 1003px)",
  desktopOnly: "@media screen and (min-width: 1004px)",
};

const compoundStyles = {
  border: `solid ${colors.borderColor} thin`,
};

export const stylesConstans = {
  colors,
  media,
  compoundStyles,
};
