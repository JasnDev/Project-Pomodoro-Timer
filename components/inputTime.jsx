import { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const InputTime = ({ setStudyTime, setRestTime }) => {
  const [study, setStudy] = useState('');
  const [rest, setRest] = useState('');

  const handleStudyChange = (text) => {
    const time = parseInt(text);
    setStudy(text);
    if (!isNaN(time)) {
      setStudyTime(time);
    }
  };

  const handleRestChange = (text) => {
    const time = parseInt(text);
    setRest(text);
    if (!isNaN(time)) {
      setRestTime(time);
    }
  }; //Apenas uma função para flipar o estado.

  return (
    <View style={styles.container}>
      <Text>Tempo de Estudo (min):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={study}
        onChangeText={handleStudyChange}
        placeholder="25"
      />
      <Text>Tempo de Descanso (min):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={rest}
        onChangeText={handleRestChange}
        placeholder="5"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    width: 100,
    textAlign: 'center',
  },
});

export default InputTime;