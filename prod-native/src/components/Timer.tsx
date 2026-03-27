import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { POMODORA } from '../constants/pomodoraConfig';
import { colors } from '../utils/color';

export default function Timer() {

  const [status, setStatus] = useState<"idle" | "running" | "paused">("idle");
  const [timeLeft, setTimeLeft] = useState(POMODORA.TOTAL_WORK_SECONDS);
  const [selectedMode, setSelectedMode] = useState<"focus" | "shortBreak" | "longBreak">("focus");

  // ---TIMER EFFECT---
  useEffect(() => {
    let interval: any;

    if (status === "running") {
      interval = setInterval(() => {
        setTimeLeft((prev) => (prev <= 0 ? 0 : prev - 1));
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [status]);

  // ---RESET---
  const handleStop = () => {
    setStatus("idle");
    setTimeLeft(POMODORA.TOTAL_WORK_SECONDS);
  };

  // --- FORMATERA TID ---
  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };
 // ---MODE---

 const startTimer = () => {
  switch (selectedMode) {
    case "focus":
    setTimeLeft(POMODORA.WORK_MINUTES * 60);
    break;
    case "shortBreak":
    setTimeLeft(POMODORA.SHORT_BREAK_MINUTES * 60);
    break;
    case "longBreak":
      setTimeLeft(POMODORA.LONG_BREAK_MINUTES * 60);
      break;
  }
    setStatus("running");
 };   

  return (
    <View style={styles.container}>

      {/* VÄLJ MODE */}
      <View style={styles.modeRow}>
        
        <Pressable
          onPress={() => setSelectedMode("focus")}
          style={[
            styles.modeButton,
            selectedMode === "focus" && { borderColor: colors.primary, borderWidth: 2 },
          ]}
        >
          <MaterialIcons name="self-improvement" size={36} color={colors.text} />
          <Text style={styles.modeText}>Fokus</Text>
        </Pressable>

        
        <Pressable
          onPress={() => setSelectedMode("shortBreak")}
          style={[
            styles.modeButton,
            selectedMode === "shortBreak" && { borderColor: colors.primary, borderWidth: 2 },
          ]}
        >
          <MaterialIcons name="free-breakfast" size={36} color={colors.text} />
          <Text style={styles.modeText}>Kort Paus</Text>
        </Pressable>

        <Pressable
          onPress={() => setSelectedMode("longBreak")}
          style={[
            styles.modeButton,
            selectedMode === "longBreak" && { borderColor: colors.primary, borderWidth: 2 },
          ]}
        >
          <MaterialIcons name="beach-access" size={36} color={colors.text} />
          <Text style={styles.modeText}>Lång Paus</Text>
        </Pressable>
      </View>

      {/* TIMER DISPLAY */}
      <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>

      {/* KNAPPAR */}
      <View style={styles.buttonRow}>
        {/* START */}
        {status === "idle" && (
          <Pressable onPress={startTimer} style={styles.button}>
            <Entypo name="controller-play" size={50} color={colors.start} />
            <Text style={styles.buttonText}>Start</Text>
          </Pressable>
        )}

        {/* PAUS + STOPP */}
        {status === "running" && (
          <>
            <Pressable onPress={() => setStatus("paused")} style={styles.button}>
              <Entypo name="controller-paus" size={50} color={colors.pause} />
              <Text style={styles.pausText}>Paus</Text>
            </Pressable>

            <Pressable onPress={handleStop} style={styles.button}>
              <Entypo name="controller-stop" size={50} color={colors.stop} />
              <Text style={styles.buttonText}>Stopp</Text>
            </Pressable>
          </>
        )}

        {/* FORTSÄTT + STOPP */}
        {status === "paused" && (
          <>
            <Pressable onPress={() => setStatus("running")} style={styles.button}>
              <Entypo name="controller-play" size={50} color={colors.resume} />
              <Text style={styles.buttonText}>Fortsätt</Text>
            </Pressable>

            <Pressable onPress={handleStop} style={styles.button}>
              <Entypo name="controller-stop" size={50} color={colors.stop} />
              <Text style={styles.buttonText}>Stopp</Text>
            </Pressable>
          </>
        )}
      </View>
    </View>
  );
}

// ---STYLES ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    gap: 40,
    paddingHorizontal: 20,
  },
  modeRow: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 20,
  },
  modeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  modeText: {
    color: colors.text,
    marginTop: 5,
    fontSize: 14,
  },
  timerText: {
    fontSize: 64,
    fontWeight: 'bold',
    color: colors.text,
  },
  startButton: {
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 20,
  },
  button: {
    alignItems: 'center',
  },
  buttonText: {
    color: colors.text,
    marginTop: 5,
    fontSize: 16,
  },
  pausText: {
    color: colors.pausText,
    marginTop: 5,
    fontSize: 16,
  },
});