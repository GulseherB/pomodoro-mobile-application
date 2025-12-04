import React, { useState, useRef } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function TimerScreen() {
  const [secondsLeft, setSecondsLeft] = useState(1500); // 25 dakika
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const handleStart = () => {
    if (isRunning) return;
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handlePause = () => {
    if (!isRunning) return;
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Zamanlayıcı</Text>
      <Text style={styles.timer}>{formatTime(secondsLeft)}</Text>
      <TouchableOpacity
        style={[styles.button, isRunning ? styles.buttonPause : styles.buttonStart]}
        onPress={isRunning ? handlePause : handleStart}
      >
        <Text style={styles.buttonText}>{isRunning ? 'Duraklat' : 'Başlat'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f5f7',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1f2933',
    marginBottom: 18,
  },
  timer: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#2e86ab',
    marginBottom: 24,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonStart: {
    backgroundColor: '#a23b72',
  },
  buttonPause: {
    backgroundColor: '#f18f01',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
