import { Text, TouchableOpacity } from "react-native";
import { styles } from "./button.style";

export default function Button(props) {
  return (
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
}
