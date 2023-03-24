import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";

import { styles } from "./styles";

import { Participant } from "../../components/Participant";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");

  function handleParticipantAdd() {
    if (participantName == "") {
      Alert.alert(
        "Coloque o nome do participante",
        "Adicione o nome para ele conseguir entrar na lista."
      );

      return setParticipantName("");
    }
    else if (participants.indexOf(participantName) !== -1) {
      Alert.alert(
        "Participante Existente!",
        "Já existe esse participante na sua lista."
      );

      return setParticipantName("");
    }

    setParticipants((prevState) => [...prevState, participantName]);
    setParticipantName("");
  }

  function handleParticipantRemove(name: String) {
    console.log(name)
    
    Alert.alert("Remover", `Deseja realmente remover ${name} da sua lista`, [
      {
        text: "Sim",
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name)),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Lucas Henrique</Text>

      <Text style={styles.eventData}>Quarta, 22 de Março de 2023</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Participante"
          placeholderTextColor="#6b6b6b"
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={handleParticipantAdd}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou ainda, adicione algum participante!
          </Text>
        )}
      />
    </View>
  );
}
