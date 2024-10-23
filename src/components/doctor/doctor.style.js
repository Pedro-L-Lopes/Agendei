import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = StyleSheet.create({
  doctor: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    padding: 8,
    borderWidth: 1,
    borderColor: COLORS.gray4,
    marginTop: 3,
    marginBottom: 3,
    borderRadius: 6,
  },
  name: {
    fontSize: FONT_SIZE.md,
    color: COLORS.gray1,
    marginTop: 5,
  },
  speciality: {
    fontSize: FONT_SIZE.md,
    color: COLORS.gray3,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 8,
  },
});
