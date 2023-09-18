import { useState, useTransition } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { Food } from '../shared'
import { useFoodContext } from '../hooks/useFoodContext'

const INITIAL_STATE: Food = {
  name: '',
  grams: '',
  kilocalories: '',
  quantity: 0
}

export const FormAddFood = () => {
  const [form, setForm] = useState<Food>(INITIAL_STATE)
  const [isPending, startTransition] = useTransition()
  const { handleSaveFood } = useFoodContext()

  function handleInput (name: string, value: string) {
    setForm({ ...form, [name]: value })
  }

  function handleAddFood () {
    // TODO: VALIDAR QUE LOS INPUTS NO ESTEN VACIOS
    if (!form.kilocalories.trim() || !form.name.trim() || !form.grams.trim()) {
      return
    }
    // TODO: IMPLEMENTAR SERVICIO PARA AGREGAR LA NUEVA COMIDA
    console.log('se agrego: ', form)
    handleSaveFood(form)

    // LIMPIAR EL FORMULARIO
    startTransition(() => {
      setForm(INITIAL_STATE)
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>add food</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={form.kilocalories}
          onChange={(e) => handleInput('kilocalories', e.nativeEvent.text)}
          style={styles.input}
          placeholder='2kal'
        />
        <TextInput
          value={form.name}
          onChange={(e) => handleInput('name', e.nativeEvent.text)}
          style={styles.input}
          placeholder='Fish'
        />
        <TextInput
          value={form.grams}
          onChange={(e) => handleInput('grams', e.nativeEvent.text)}
          style={styles.input}
          placeholder='100gr'
        />
      </View>
      <Pressable style={styles.button} onPress={handleAddFood}>
        <Text style={{ color: '#fff', textTransform: 'capitalize' }}>
          add new food
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#222',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    gap: 16,
  },
  inputContainer: {
    width: '100%',
    gap: 16,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    alignSelf: 'flex-start',
    fontSize: 16,
    fontWeight: '700',
    textTransform: 'capitalize',
    color: '#222',
  },
})
