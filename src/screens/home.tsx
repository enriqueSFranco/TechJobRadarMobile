import { useEffect, useMemo } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import { useAppDispatch, useAppSelector } from '@/hooks/useStore'
import { SectionLayout } from '@/layouts/section-layout'
import { Header } from '@/components/header'
import { Avatar } from '@/components/avatar'
import { Job } from '@/components/job'
import { JobRecommended } from '@/components/job-recommended'
import { FormSearch } from '@/components/form-search'
import { fetchAllJobs } from '@/features/jobSlice'
import { Chip } from '@/components/chip'

export const Home = () => {
  const { jobs, loading } = useAppSelector(state => state.jobs)
  const dispatch = useAppDispatch()

  useEffect(() => {
    console.log('Efecto de carga de trabajos')
    dispatch(fetchAllJobs())
  }, [dispatch])

  const totalJobs = useMemo(() => jobs && jobs.length, [jobs])

  return (
    <View style={{ flex: 1 }}>
      <Header>
        {/* <Text style={styles.welcomeText}>Hola, Enrique!👋</Text> */}
        <View style={styles.headerRight}>
          {/* notifications */}
          <Avatar image='https://unavatar.io/github/enriqueSFranco' size={42} />
          <Chip bgColor='#f4f4f4'>
            <Ionicons name="ios-school-outline" size={20} color="#222" />
            <Text style={{ color: '#222', fontSize: 14 }}>ESCOM</Text>
          </Chip>
        </View>
        <View style={{ flexDirection: 'row', gap: 18 }}>
          <TouchableOpacity>
            <AntDesign name="message1" size={20} color="#222" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={20} color="#222" />
          </TouchableOpacity>
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
            ListEmptyComponent={
              <View>
                <Text>Lo sentimos, aun no hay vacantes recomendadas.</Text>
              </View>
            }
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </SectionLayout>

        {/* empleos recomendados */}
        <SectionLayout sectionTitle='all jobs' sectionSubTitle={totalJobs ? totalJobs : 0}>
          {/* TODO: VALIDAR SI HAY EMPLEOS HA RENDERIZAR */}
          {loading
            ? (
              <View>
                <Text>cargando vacantes...</Text>
              </View>
            )
            : <FlatList
              data={jobs}
              renderItem={({ item }) => <Job job={item} />}
              keyExtractor={(item) => item.id.toString()}
              ListEmptyComponent={
                <View>
                  <Text>Lo sentimos, aun no hay vacantes registradas.</Text>
                </View>
              }
              ItemSeparatorComponent={() => <View style={[styles.divider]} />}
              showsVerticalScrollIndicator={false}
            />}

        </SectionLayout>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#DDD',
  },
  mainContainer: { flex: 1, gap: 16, padding: 16, backgroundColor: '#fff' },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  welcomeText: {
    fontWeight: '600',
    fontSize: 18
  },
})
