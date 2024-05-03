export const tabNavigatorScreenOptions = (theme: any) => {
  return {
    headerShown: false,
    tabBarStyle: {
      backgroundColor: theme.colors.black,
      borderTopColor: theme.colors.white,
      height: 60,
      paddingBottom: 10,
      paddingTop: 10,
    },
    tabBarHideOnKeyboard: true,
    tabBarShowLabel: true,
  };
};
