import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Formata o tempo de segundos para MM:SS
const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};

const Counter = ({ timeLeft, isStudy }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{isStudy ? 'Tempo de Estudo' : 'Tempo de Descanso'}</Text>
      <Text style={styles.timer}>{formatTime(timeLeft)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000'
  },
  timer: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ff0000',
  },
});

export default Counter;