import React, { useState, useRef } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const DEFAULT_MINUTES = 25;
const MIN_MINUTES = 1;
const MAX_MINUTES = 120;

export default function TimerScreen() {
  const [timerMinutes, setTimerMinutes] = useState(DEFAULT_MINUTES);
  const [secondsLeft, setSecondsLeft] = useState(DEFAULT_MINUTES * 60);
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

  const handleIncrease = () => {
    if (isRunning) return;
    setTimerMinutes((prev) => {
      const next = Math.min(prev + 1, MAX_MINUTES);
      setSecondsLeft(next * 60);
      return next;
    });
  };

  const handleDecrease = () => {
    if (isRunning) return;
    setTimerMinutes((prev) => {
      const next = Math.max(prev - 1, MIN_MINUTES);
      setSecondsLeft(next * 60);
      return next;
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Zamanlayıcı</Text>
      <Text style={styles.timer}>{formatTime(secondsLeft)}</Text>
      <View style={styles.durationControls}>
        <TouchableOpacity
          style={[styles.durationButton, timerMinutes < MAX_MINUTES ? styles.buttonActive : styles.buttonDisabled]}
          onPress={handleIncrease}
          disabled={isRunning || timerMinutes >= MAX_MINUTES}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <Text style={styles.durationValue}>{timerMinutes} dk</Text>
        <TouchableOpacity
          style={[styles.durationButton, timerMinutes > MIN_MINUTES ? styles.buttonActive : styles.buttonDisabled]}
          onPress={handleDecrease}
          disabled={isRunning || timerMinutes <= MIN_MINUTES}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
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
  durationControls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  durationButton: {
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    minWidth: 40,
    alignItems: 'center',
  },
  buttonActive: {
    backgroundColor: '#a23b72',
  },
  buttonDisabled: {
    backgroundColor: '#d1d1d1',
  },
  durationValue: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1f2933',
    minWidth: 60,
    textAlign: 'center',
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
    fontSize: 20,
    fontWeight: '600',
  },
});
