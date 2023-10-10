import { useEffect, useMemo } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { useAppDispatch, useAppSelector } from '@/hooks/useStore'
import { styles } from '@/styles/home'
import { SectionLayout } from '@/layouts/section-layout'
import { Header } from '@/components/header'
import { Avatar } from '@/components/avatar'
import { Job } from '@/components/job'
import { JobRecommended } from '@/components/job-recommended'
import { FormSearch } from '@/components/ui/form-search'
import { fetchAllJobs } from '@/features/job-slice'
import { Chip } from '@/components/chip'

export const Home = () => {
  const { jobs, loading } = useAppSelector(state => state.jobs)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllJobs())
  }, [dispatch])

  const totalJobs = useMemo(() => jobs && jobs.length, [jobs])

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <View style={styles.headerRight}>
          <Avatar image='https://unavatar.io/github/enriqueSFranco' size={42} />
          <Chip bgColor='#ade8f4'>
            <Ionicons name="ios-school-outline" size={20} color="#0077b6" />
            <Text style={{ color: '#0077b6', fontSize: 14 }}>ESCOM</Text>
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
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 6 }}>
          <FormSearch />
          <TouchableOpacity style={{ backgroundColor: '#f4f4f4', padding: 8, borderRadius: 12 }}>
            <Ionicons name='color-filter-outline' size={22} color='#222' />
          </TouchableOpacity>
        </View>

        {/* empleos populares */}
        <SectionLayout sectionTitle='Empleos Recomendados'>
          <FlatList
            data={jobs}
            renderItem={({ item }) => <JobRecommended job={item} />}
            keyExtractor={(item) => item.id.toString()}
            ListEmptyComponent={
              <View>
                <Text>Lo sentimos, aun no hay vacantes recomendadas.</Text>
              </View>
            }
            ItemSeparatorComponent={() => <View style={{ width: 16, backgroundColor: 'transparent' }} />}
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
  )
}
