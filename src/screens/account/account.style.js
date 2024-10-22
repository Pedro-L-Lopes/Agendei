import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    padding: 50,
    justifyContent: "space-between",
  },
  containerLogo: {
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 30,
  },
  containerInput: {
    marginBottom: 15,
  },
  input: {
    backgroundColor: COLORS.gray5,
    padding: 10,
    borderRadius: 6,
  },
  footer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  footerLink: {
    color: COLORS.blue,
  },
});
