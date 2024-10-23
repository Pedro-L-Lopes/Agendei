import { Text, TouchableOpacity } from "react-native";
import { styles } from "./btn.style";

export default function Btn(props) {
  return (
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
}
