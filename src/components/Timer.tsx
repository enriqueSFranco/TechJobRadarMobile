import { Text, View, StyleSheet } from 'react-native'
import { formatTime } from '../helpers/format-number'

interface TimerProps {
  time: number
}

export const Timer: React.FC<TimerProps> = ({ time }) => {
  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const timerFormat = formatTime(minutes, seconds)

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{timerFormat}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgba(248, 249, 250, 0.40)",
    borderRadius: 4,
    padding: 15
  },
  timerText: {
    fontSize: 80,
    fontWeight: '700',
    color: '#2b2d42'
  }
})