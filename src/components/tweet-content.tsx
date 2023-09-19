import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { Feather } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { Tweet } from "../shared"

type TweetProps = {
  tweet: Tweet
}

export const TweetContent = ({ tweet }: TweetProps) => {
  const { author, fullText, replyCount, retweetCount, favoriteCount } = tweet
  const { name, screenName } = author

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image source={{ uri: author.avatar }} style={styles.avatar} />
        <View style={{ flexShrink: 1, flexGrow: 1 }}>
          <View style={styles.tweetHeader}>
            <Text style={styles.gray}>{name}</Text>
            <Text style={styles.gray}>@{screenName}</Text>
          </View>
          <Text style={styles.description}>{fullText}</Text>
          <View style={styles.actionBar}>
            <Text style={styles.gray}><Feather name="message-circle" size={16} color="#777" />{replyCount}</Text>
            <Text style={styles.gray}><Ionicons name="md-repeat-outline" size={16} color="#777" />{retweetCount}</Text>
            <Text style={styles.gray}><Ionicons name="heart-outline" size={16} color="#777" />{favoriteCount}</Text>
            <Pressable>
              <Feather name="share" size={16} color="#777" />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    flexShrink: 0,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    objectFit: 'cover'
  },
  actionBar: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  container: {
    flex: 1,
    padding: 16,
  },
  description: {
    fontSize: 14,
    color: "#000",
  },
  gray: {
    color: '#777',
    fontSize: 13,
    paddingRight: 2,
  },
  row: { flexDirection: 'row' },
  tweetHeader: {
    flexDirection: 'row'
  }
})