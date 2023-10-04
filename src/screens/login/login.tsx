import { useState } from "react"
import { SafeAreaView, Text, View } from "react-native"
import { BaseTextInput } from "@/components/base-text-input"

type FormLogin = {
  email: string
  password: string
}

const INITIAL_FORM: FormLogin = {
  email: '',
  password: ''
}

export const Login = () => {
  const [form, updateForm] = useState<FormLogin>(INITIAL_FORM)

  function handleChange () {

  }

  return (
    <SafeAreaView>
      <Text>Login</Text>
      <View>
        <View>
          <BaseTextInput prompt="correo electronico" value={form.email} onChange={handleChange} />
        </View>
        <View>
          <BaseTextInput prompt="contraseña" value={form.password} onChange={handleChange} />
        </View>
      </View>
      {/* TODO: SEPARATOR */}
      <View>
        {/* OR LOGIN WITH SOCIAL NETWOR */}
      </View>
    </SafeAreaView>
  )
}
