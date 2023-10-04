import React, { useState } from 'react'
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { BaseTextInput } from '@/components/base-text-input'
import { Dropdown } from '@/components/dropdown'
import { EmploymentType, Job, LevelKnowledge } from '@/shared'

// TODO: PASAR A CONSTANTES
const JobCreationInitialState: Job = {
  title: '',
  location: '',
  category: '',
  description: '',
  totalPlaces: 0,
  minSalary: '',
  maxSalary: '',
  showRangeSalary: false,
  contractType: EmploymentType.fullTime,
  showCompanyPersonalInfo: false,
  showRecruiterPersonalInfo: false,
  requiredKnowledge: [],
  skillLevel: LevelKnowledge.advanced,
}

export const CreateJob = () => {
  const [form, setForm] = useState<Job>(JobCreationInitialState)

  function handleSelect () { }

  function handleChange (name: string, value: string) {
    setForm({
      ...form,
      [name]: value,
    })
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.boxInput}>
          <Text style={styles.label}>Titulo del empleo</Text>
          <BaseTextInput
            prompt='Game Developer'
            value={form.title}
            onChange={(e) => handleChange('title', e.nativeEvent.text)}
          />
        </View>

        <View style={styles.boxInput}>
          <Text style={styles.label}>Ubicación</Text>
          <BaseTextInput
            prompt='Ciudad de México'
            value={form.location}
            onChange={(e) => handleChange('location', e.nativeEvent.text)}
          />
        </View>

        <View style={styles.boxInput}>
          <Text style={styles.label}>Selecciona una categoria</Text>
          <Dropdown
            label='categoria'
            items={[
              { label: 'ingenieria', value: 'ingenieria' },
              { label: 'licenciatura', value: 'licenciatura' },
            ]}
            onSelect={handleSelect}
          />
        </View>

        <View>
          {/* TODO: TEXTAREAR OR TEXT EDITOR */}
          <Text>descripcion</Text>
        </View>

        <View>
          {/* TODO: COUNTER */}
          <Text>plazas a cubrir</Text>
        </View>

        <View>
          {/* TODO: INPUTS */}
          <Text>salario minimo</Text>
          <Text>salario maximo</Text>
          {/* TODO: CHECKBOX */}
          <Text>mostrar rango de sueldo</Text>
        </View>

        <View>
          {/* TODO: CHECKBOX */}
          <Text>nomina</Text>
          <Text>tiempo completo</Text>
          <Text>permanente</Text>
          <Text>honorarios asimilados</Text>
          <Text>medio tiempo</Text>
          <Text>temporal / por proyecto</Text>
        </View>

        <View>
          {/* TODO: CHECKBOX */}
          <Text>mostrar datos de la empresa</Text>
        </View>

        <View>
          {/* TODO: CHECKBOX */}
          <Text>mostrar infornacion de contacto</Text>
        </View>

        <View>
          {/* TODO CONOCIMIENTOS -> INPUT(SKILL) AND SELECT(LEVEL) */}
          <Text>SKILL</Text>
          <Text>LEVEL</Text>
        </View>

        <View>
          <TouchableOpacity>
            <Text>vista previa</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>guardar y salir</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>publicar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  boxInput: {
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingHorizontal: 20
  },
  label: {
    fontWeight: '500',
  },
})

/*
  titulo del empleo
  ubicacion
  categoria
  descripcion
  plazas a cubrir
  rango salarial mas comisiones
  mostrar rango de sueldo
  tipos de contratacion (nomina, tiempo completo, permanente, honorarios asimilados, medio tiempo, temporal / por proyecto)
  mostrar datos de la empresa (empresa confidencial?)
  mostrar infornacion de contacto (reclutador)
  conocimientos que debe tener el candidato (skill, nivel)
  
  Acciones: vista previa, guardar y salir, publicar
*/
