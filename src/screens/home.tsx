import { useMemo } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useAppSelector } from '../hooks/useStore'
import { SectionLayout } from '../layouts/section-layout'
import { Header } from '../components/header'
import { Avatar } from '../components/avatar'
import { Job } from '../components/job'
import { JobRecommended } from '../components/job-recommended'
import { FormSearch } from '../components/form-search'

export const Home = () => {
  const jobs = useAppSelector(state => state.jobs)

  const totalJobs = useMemo(() => jobs.length, [jobs])

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Text style={styles.welcomeText}>Hola, Enrique!👋</Text>
        <View style={styles.headerRight}>
          {/* notifications */}
          <Avatar image='https://unavatar.io/github/enriqueSFranco' size={36} />
        </View>
      </Header>
      <View style={styles.mainContainer}>
        {/* fomulario de busqueda */}
        <FormSearch />

        {/* empleos populares */}
        <SectionLayout sectionTitle='recommended jobs'>
          <FlatList
            data={jobs}
            renderItem={({ item }) => <JobRecommended job={item} />}
            keyExtractor={(item) => item.id.toString()}
            horizontal
          />
        </SectionLayout>

        {/* empleos recomendados */}
        <SectionLayout sectionTitle='all jobs' sectionSubTitle={totalJobs}>
          {/* TODO: VALIDAR SI HAY EMPLEOS HA RENDERIZAR */}
          <FlatList
            data={jobs}
            renderItem={({ item }) => <Job job={item} />}
            keyExtractor={(item) => item.id.toString()}
            ListEmptyComponent={<View><Text>Lo sentimos, aun no hay vacantes registradas.</Text></View>}
            ItemSeparatorComponent={() => <View style={[styles.divider]} />}
          />
        </SectionLayout>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#DDD',
  },
  mainContainer: { flex: 1, gap: 16, padding: 16, backgroundColor: '#fff' },
  headerRight: {},
  welcomeText: {
    fontWeight: '600',
    fontSize: 18
  },
})
