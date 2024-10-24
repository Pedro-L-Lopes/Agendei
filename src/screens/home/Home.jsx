import { View, Text, FlatList } from "react-native";
import { styles } from "./home.style";
import { doctors } from "../../constants/data";
import Doctor from "../../components/doctor/Doctor";
import icon from "../../constants/icon";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Agende os seus serviços médicos</Text>

      <FlatList
        data={doctors}
        keyExtractor={(doc) => doc.id_doctor}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Doctor
              name={item.name}
              icon={item.icon == "M" ? icon.male : icon.female}
              speciality={item.speciality}
            />
          );
        }}
      />
    </View>
  );
}
