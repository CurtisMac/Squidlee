const MainTheme = {
  //Text colors
  textBody: "white",
  //Primary colors
  primaryLighter: "#8952CB",
  primaryLight: "#6D449F",
  primary: "#631ABB",
  primaryDark: "#4C2080",
  primaryDarker: "#400F7A",
  //Secondary colors
  secondaryLighter: "#DA4DA9",
  secondaryLight: "#B5448D",
  secondary: "#CF0D8B",
  secondaryDark: "#921A68",
  secondaryDarker: "#8B075D",
  //Tetiary colors
  tetiaryLighter: "#5969CC",
  tetiaryLight: "#4955A1",
  tetiary: "#2338BD",
  tetiaryDark: "#253282",
  tetiaryDarker: "#15237B",
  //Complementary colors
  complementLighter: "#FFF25A",
  complementLight: "#EADF58",
  complement: "#FFEC10",
  complementDark: "#BEB122",
  complementDarker: "#B4A609",
  get gradient() {
    return `linear-gradient(to bottom right, ${this.primaryDarker}, ${
      this.primary
    })`;
  }
};

export { MainTheme };
