import { Text, View } from "react-native";
import { styles } from "./service.style.js";
import Btn from "../../components/btn/Btn.jsx";

export default function Service(props) {
  return (
    <View style={styles.service}>
      <View style={styles.containerText}>
        <Text style={styles.description}>{props.description}</Text>
        <Text style={styles.price}>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(props.price)}
        </Text>
      </View>

      <View style={styles.containerButton}>
        <Btn text="Agendar" onPress={() => props.onPress(props.id_service)} />
      </View>
    </View>
  );
}