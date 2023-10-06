import { ScrollView, StyleSheet, Switch, Text, View } from 'react-native'
import { BaseTextInput } from '../base-text-input'
import { Dropdown } from '../dropdown'
import { Button } from '../button'
import { Job, JobCreationInitialState } from '@/shared'
import { useForm } from '@/hooks/useForm'

export const FormCreateJob = () => {
  const { form, handleChange } = useForm<Job>(JobCreationInitialState)

  return (
    <ScrollView style={styles.content}>
      <View style={styles.boxInput}>
        <BaseTextInput
          prompt='Game Developer'
          label='Titulo del empleo'
          value={form.title}
          onChange={(e) => handleChange('title', e.nativeEvent.text)}
        />
      </View>

      <View style={styles.boxInput}>
        <BaseTextInput
          prompt='Ciudad de México'
          label='Ubicación'
          value={form.location}
          onChange={() => { }}
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
          onSelect={() => { }}
        />
      </View>

      <View style={styles.boxInput}>
        {/* TODO: TEXTAREAR OR TEXT EDITOR */}
        <Text>descripcion</Text>
      </View>

      <View style={styles.boxInput}>
        {/* TODO: COUNTER */}
        <Text>plazas a cubrir</Text>
        <BaseTextInput
          label='plazas a cubrir'
          prompt='2'
          value={form.totalPlaces.toString()}
          onChange={e => handleChange('totalPlaces', e.nativeEvent.target)}
        />
      </View>

      <View style={styles.boxInput}>
        {/* TODO: INPUTS */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <View>
            <BaseTextInput
              label='Salario minimo'
              prompt='$ 10,000'
              value={form.minSalary.toString()}
              onChange={e => handleChange('minSalary', e.nativeEvent.text)}
            />
          </View>
          <Text>a</Text>
          <View>
            <BaseTextInput
              label='Salario maximo'
              prompt='$ 35,000'
              value={form.maxSalary.toString()}
              onChange={e => handleChange('maxSalary', e.nativeEvent.text)}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
          {/* TODO: CHECKBOX */}
          <Text>Mostrar rango de sueldo</Text>
          <Switch
            value={form.showRangeSalary}
          />
        </View>
      </View>

      <View style={styles.boxInput}>
        {/* TODO: CHECKBOX */}
        <Text>nomina</Text>
        <Text>tiempo completo</Text>
        <Text>permanente</Text>
        <Text>honorarios asimilados</Text>
        <Text>medio tiempo</Text>
        <Text>temporal / por proyecto</Text>
      </View>

      <View style={styles.boxInput}>
        {/* TODO: CHECKBOX */}
        <Text>mostrar datos de la empresa</Text>
      </View>

      <View style={styles.boxInput}>
        {/* TODO: CHECKBOX */}
        <Text>mostrar infornacion de contacto</Text>
      </View>

      <View style={styles.boxInput}>
        {/* TODO CONOCIMIENTOS -> INPUT(SKILL) AND SELECT(LEVEL) */}
        <Text>SKILL</Text>
        <Text>LEVEL</Text>
      </View>

      <View style={styles.footer}>
        <Button label='Vista Previa' />

        <Button label='Guardar y Salir' />

        <Button label='Publicar' />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  boxInput: {
  },
  previewButton: {},
  saveButton: {},
  publishButton: {},
  footer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12
  },
  label: {
    fontWeight: '500',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20
  }
})