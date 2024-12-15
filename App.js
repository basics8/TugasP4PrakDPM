import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  const handleIncrement = (team) => {
    if (team === 'A') {
      const newScore = scoreA + 1;
      setScoreA(newScore);
      if (newScore === 10) Alert.alert('Tim A Menang!');
    } else {
      const newScore = scoreB + 1;
      setScoreB(newScore);
      if (newScore === 10) Alert.alert('Tim B Menang!');
    }
  };

  const handleDecrement = (team) => {
    if (team === 'A' && scoreA > 0) {
      setScoreA(scoreA - 1);
    } else if (team === 'B' && scoreB > 0) {
      setScoreB(scoreB - 1);
    }
  };

  const handleReset = () => {
    setScoreA(0);
    setScoreB(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Skor Pertandingan Futsal</Text>

      {/* Team A */}
      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>Tim A</Text>
        <Text style={styles.score}>{scoreA}</Text>
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.button} onPress={() => handleIncrement('A')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleDecrement('A')}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Team B */}
      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>Tim B</Text>
        <Text style={styles.score}>{scoreB}</Text>
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.button} onPress={() => handleIncrement('B')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleDecrement('B')}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Reset Button */}
      <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
        <Text style={styles.resetText}>Reset Pertandingan</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1e1e2f',
    paddingVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  teamContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  teamName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  score: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#4caf50',
    marginBottom: 20,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#4caf50',
    padding: 15,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  resetButton: {
    backgroundColor: '#ff5252',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  resetText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
