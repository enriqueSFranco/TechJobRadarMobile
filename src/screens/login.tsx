import { useState } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { BaseTextInput } from '@/components/base-text-input'
import { useForm } from '@/hooks/useForm'
import { Button } from '@/components/button'

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
  console.log(showPassword)
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Text>¡te damos la vienvenida a trabajaYa! 👋</Text>
      <View style={{ gap: 16 }}>
        <BaseTextInput
          label='Correo electronico'
          prompt='jhondue@gmail.com'
          value={form.email}
          onChange={e => handleChange('email', e.nativeEvent.text)} />
        <BaseTextInput
          label='Contraseña'
          prompt='Escribe tu constraseña'
          icon={showPassword
            ? <Feather name='eye-off' size={22} color="#222" onPress={toggle} accessibilityLabel='icon eye off' />
            : <Feather name='eye' size={22} color='#222' onPress={toggle} accessibilityLabel='icon eye on' />
          }
          secureTextEntry={showPassword}
          value={form.password}
          onChange={e => handleChange('password', e.nativeEvent.text)}
        />
        <Button label='Iniciar sesión' />
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

      <View>
        {/* DON'T HAVE AN ACCOUNT */}
      </View>
    </SafeAreaView>
  )
}
