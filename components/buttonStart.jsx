import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonStart = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Iniciar</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#e10000', 
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
  },
  text: {
    color: '#000000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ButtonStart;