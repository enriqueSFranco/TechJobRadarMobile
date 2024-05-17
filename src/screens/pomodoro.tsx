import { View, Platform, Text, StyleSheet, TouchableOpacity } from "react-native"
import { useEffect, useState } from "react"
import { TimerType, TimerText, COLORS, type Color } from '../shared'
import { Header } from "../components/header"
import { Timer } from '../components/timer'

const OPTIONS: TimerType[] = ['Pomodoro', 'Long Break', 'Short Break']

export const PomodoroApp = () => {
  const [isWorking, updateIsWorking] = useState<boolean>(false)
  const [timer, setTimer] = useState<number>(25 * 60)
  const [currentTimer, setCurrtentTimer] = useState<TimerType>('Pomodoro')
  const [colorTimerWorking, updatedColorTimerWorking] = useState<Color>(COLORS.FIUSHA)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isWorking) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1)
      }, 1000)
    } else if (interval != null) {
      clearInterval(interval)
    }

    if (timer === 0) {
      updateIsWorking(false)
      setTimer(isWorking ? 300 : 1500)
    }

    return () => {
      if (interval != null) {
        clearInterval(interval)
      }
    }
  }, [isWorking])

  function handleInit () {
    updateIsWorking(prevState => !prevState)
  }

  function calculateTimer (timerType: TimerType) {
    if (timerType === TimerText.POMODORO) {
      return 25 * 60 // multiplicamos 25 * 60 para obtener el total de segundos que tienen 25 min
    }
    else if (timerType === TimerText.LONG_BREAK) {
      return 15 * 60 // multiplicamos 15 * 60 para obtener el total de segundos que tienen 15 min
    } else {
      return 5 * 60 // multiplicamos 5 * 60 para obtener el total de segundos que tienen 5 min
    }
  }
  /**
   * Actualiza el temporizador basado en el texto proporcionado.
   * @param {string} currentTimerText - El texto del temporizador (por ejemplo, 'Pomodoro', 'Long Break', 'Short Break').
   */
  function updatedCurrentTimer (currentTimerText: TimerType) {
    if (typeof currentTimerText != 'string') {
      throw new Error("currentTimerText debe ser de tipo string")
    }

    const lowerCaseText = currentTimerText
    let newTimer = calculateTimer(lowerCaseText)

    if (lowerCaseText.includes(TimerText.POMODORO)) {
      updatedColorTimerWorking(COLORS.FIUSHA)
    }
    else if (lowerCaseText.includes(TimerText.LONG_BREAK)) {
      updatedColorTimerWorking(COLORS.PURPLE)
    }
    else {
      updatedColorTimerWorking(COLORS.PINK)
    }

    setCurrtentTimer(currentTimerText)
    setTimer(newTimer)
  }

  return (
    <View style={{ backgroundColor: colorTimerWorking }}>
      <Header>
        <Text style={styles.title}>{currentTimer}</Text>
        <View style={styles.itemList}>
          {OPTIONS.map((option) => (
            <TouchableOpacity key={`option-${option}`} onPress={() => updatedCurrentTimer(option)} style={styles.item}>
              <Text>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Header>
      <Timer time={timer} />
      <TouchableOpacity onPress={handleInit} style={styles.startBtn}>
        <Text style={{ color: isWorking ? '#ccc' : '#fff' }}>{isWorking ? 'Stop' : 'Start'}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: '700',
    textTransform: 'capitalize'
  },
  itemList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  item: {
    width: '33%',
  },
  startBtn: {
    alignItems: 'center',
    backgroundColor: '#2b2d42',
    padding: 10,
    borderRadius: 4,
    textTransform: 'capitalize',
  }
})