import { useEffect, useMemo } from 'react'
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { useAppDispatch, useAppSelector } from '@/hooks/useStore'
import { fetchAllJobs } from '@/features/job-slice'
import { SectionLayout } from '@/layouts/section'
import { Header } from '@/components/header'
import { Avatar } from '@/components/avatar'
import { Job } from '@/components/job'
import { JobRecommended } from '@/components/job-recommended'
import { FormSearch } from '@/components/ui/form-search'
import { Chip } from '@/components/chip'
import { Button } from '@/components/button'
import { styles } from '@/styles/home'

export const Home = () => {
  const navigation = useNavigation()
  const { jobs, loading } = useAppSelector(state => state.jobs)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllJobs())
  }, [dispatch])

  const totalJobs = useMemo(() => jobs && jobs.length, [jobs])

  return (
    <SafeAreaView style={styles.app}>
      {/* HEADER */}
      <Header>
        <View style={styles.headerRight}>
          <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer)}>
            <Avatar image='https://unavatar.io/github/enriqueSFranco' size={42} />
          </TouchableOpacity>
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

      {/* CONTENIDO PRINCIPAL */}
      <View style={styles.mainContainer}>
        {/* fomulario de busqueda */}
        <View style={styles.form}>
          <FormSearch />
          <Button bgColor='transparent'>
            <AntDesign name="filter" size={22} color="#222" />
          </Button>
        </View>

        {/* VACANTES RECOMENDADAS */}
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

        {/* LISTA DE VACANTES */}
        <SectionLayout sectionTitle='all jobs' sectionSubTitle={totalJobs ? totalJobs : 0}>
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
    </SafeAreaView>
  )
}
