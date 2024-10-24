import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    padding: 12,
  },
  text: {
    fontSize: FONT_SIZE.md,
    color: COLORS.gray1,
    textAlign: "center",
    marginBottom: 15,
  },
});
