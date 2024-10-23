import { StatusBar } from 'expo-status-bar';
import { useState, useRef } from 'react';
import { StyleSheet, View, Alert, ImageBackground } from 'react-native';
import InputTime from './components/inputTime';
import ButtonReset from './components/buttonReset';
import ButtonStart from './components/buttonStart';
import ButtonStop from './components/buttonStop';
import Counter from './components/counter';


export default function App() {

  //Váriaveis para alternar os valores de tempo e descanso :) 
  const [studyTime, setStudyTime] = useState (25 * 60);
  const [restTime, setRestTime] = useState (5 * 60);
  const [timeLeft, setTimeLeft] = useState(studyTime);
  //Váriaveis de validação
  const [isRunning, setIsRunning] = useState(false);
  const [isStudy, setIsStudy] = useState(true);

  const intervalRef = useRef(null)

  const startTimer = () => {
    if(!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if(prevTime <= 1) {
            clearInterval(intervalRef.current);
            Alert.alert(
              'Tempo Esgotado',
              isStudy ? 'Hora de descansar!' : 'Hora de estudar!',
            );
            setIsStudy(!isStudy)
            setTimeLeft(isStudy ? restTime : studyTime);
            setIsRunning(false);
          };
          return prevTime -1;
        });
      }, 1000);
    };
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setIsStudy(true);
    setTimeLeft(studyTime);
  };

  const handleSetStudyTime = (time) => {
    setStudyTime(time * 60);
    setTimeLeft(time * 60);
  };

  const handleSetRestTime = (time) => {
    setRestTime(time * 60);
  };

  return (
    <ImageBackground source={require('./assets/imperial-walkers-darth-vader-wallpaper.jpg')} style={styles.background}>
      <View style = {styles.container}>
        <Counter timeLeft={timeLeft} isStudy={isStudy} />
        <ButtonStart onPress={startTimer} />
        <ButtonStop onPress={stopTimer} />
        <ButtonReset onPress={resetTimer} />
        <InputTime setStudyTime={handleSetStudyTime} setRestTime={handleSetRestTime} />
        <StatusBar style="auto" />
      </View>
     </ImageBackground> 
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
});