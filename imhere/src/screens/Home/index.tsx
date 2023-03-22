import { Text, View } from "react-native";

import { styles } from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Lucas Henrique
      </Text>
      
      <Text style={styles.eventData}>
        Quarta, 21 de Março de 2023
      </Text>
    </View>
  );
}
