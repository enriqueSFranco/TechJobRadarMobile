import { FlatList, StyleSheet, View } from 'react-native'
import { tweets } from '../api/tweets'
import { Tweet } from '../components/tweet'

export const Feed = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <Tweet tweet={item} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  divider: {
    width: '100%',
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#DDD',
  }
})