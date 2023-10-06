import { useState } from "react"
import { SafeAreaView, Text, View } from "react-native"
import { BaseTextInput } from "@/components/base-text-input"
import { useForm } from "@/hooks/useForm"

type FormLogin = {
  email: string
  password: string
}

const INITIAL_FORM: FormLogin = {
  email: '',
  password: ''
}

export const Login = () => {
  const [showPassword, updateShowPassword] = useState(false)
  const { form, handleChange } = useForm<FormLogin>(INITIAL_FORM)

  function toggle () {
    updateShowPassword(prevState => !prevState)
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Text>¡te damos la vienvenida a trabajaYa!</Text>
      <View style={{ gap: 16 }}>
        <BaseTextInput
          label="correo electronico"
          prompt="user@gmail.com"
          value={form.email}
          onChange={e => handleChange('email', e.nativeEvent.text)} />
        <BaseTextInput
          label="contraseña"
          secureTextEntry
          value={form.password}
          onChange={e => handleChange('password', e.nativeEvent.text)}
        />
      </View>
      {/* TODO: SEPARATOR */}
      <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <View style={{ flex: 1, height: 1, backgroundColor: '#ccc', borderRadius: 50 }} />
        <Text>o</Text>
        <View style={{ flex: 1, height: 1, backgroundColor: '#ccc', borderRadius: 50 }} />
      </View>

      <View>
        {/* OR LOGIN WITH SOCIAL NETWOR */}
      </View>
    </SafeAreaView>
  )
}
