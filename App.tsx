import { useEffect, useState, useRef } from 'react'
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, View, Button, Platform } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { TimerType, TimerText, COLORS, type Color } from './src/shared'
import { Header } from './src/components/Header'
import { Timer } from './src/components/Timer'

const OPTIONS: TimerType[] = ['Pomodoro', 'Long Break', 'Short Break']

const App: React.FC = () => {
  const [isWorking, updateIsWorking] = useState<boolean>(false)
  const [timer, setTimer] = useState<number>(25 * 60)
  const [currentTimer, setCurrtentTimer] = useState<TimerType>('Pomodoro')
  const [colorTimerWorking, updatedColorTimerWorking] = useState<Color>(COLORS.FIUSHA)
  const intervalRef = useRef<number | null>(null)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null
    if (isWorking) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1)
      }, 1000)
    } else if (interval != null) {
      clearInterval(interval)
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
    <SafeAreaView style={{ flex: 1, backgroundColor: colorTimerWorking }}>
      <View style={styles.wrapperApp}>
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
        <StatusBar style='auto' />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: '700',
    textTransform: 'capitalize'
  },
  wrapperApp: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'android' ? 30 : 0
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

export default App