import { Text, View } from 'react-native'

type SectionLayoutProps = {
  sectionTitle?: string
  sectionSubTitle?: string | number
  children: React.ReactNode
}

export const SectionLayout = ({ sectionTitle = '', sectionSubTitle = '', children }: SectionLayoutProps) => {
  return (
    <View style={{ gap: 16, flex: 1 }}>
      <View style={{ flexDirection: 'row', gap: 8 }}>
        <Text style={{ color: '#222', fontWeight: '700', textTransform: 'capitalize' }}>{sectionTitle}</Text>
        <Text style={{ color: '#222', fontWeight: '700', textTransform: 'capitalize' }}>{sectionSubTitle}</Text>
      </View>
      {children}
    </View>
  )
}
