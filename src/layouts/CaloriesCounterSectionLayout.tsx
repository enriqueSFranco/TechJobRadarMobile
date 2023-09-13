import { Text, View } from 'react-native'

interface Props {
  children: React.ReactNode
  title?: string
  separate?: number
}

export const CaloriesCounterSectionLayout = ({
  children,
  title,
  separate = 8,
}: Props) => {
  return (
    <View style={{ gap: separate }}>
      {title != undefined ? (
        <Text
          style={{
            textTransform: 'capitalize',
            fontWeight: '700',
            fontSize: 16,
          }}
        >
          {title}
        </Text>
      ) : null}
      <View>{children}</View>
    </View>
  )
}
