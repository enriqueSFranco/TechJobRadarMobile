import React, { useLayoutEffect } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { BaseTextInput } from '@/components/base-text-input'
import { useNavigation } from '@react-navigation/native'

export const CreateJob = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView>
      <View style={{ gap: 4 }}>
        <BaseTextInput prompt='titulo del empleo' />
        <Text>field</Text>
      </View>

      <View>
        <BaseTextInput prompt='ubicacion' />
        <Text>field</Text>
      </View>

      <View>
        {/* TODO: SELECT */}
        <Text>categoria</Text>
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
    </SafeAreaView>
  )
}

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