import { View, Text, FlatList } from "react-native";
import { styles } from "./calendar.style";
import { appointments } from "../../constants/data";
import Appoitment from "../../components/appoitment/Appoitment";
import icon from "../../constants/icon";

export default function Calendar() {
  return (
    <View style={styles.container}>
      <FlatList
        data={appointments}
        keyExtractor={(app) => app.id_appoitment}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Appoitment
              service={item.service}
              doctor={item.doctor}
              speciality={item.speciality}
            />
          );
        }}
      />
    </View>
  );
}
