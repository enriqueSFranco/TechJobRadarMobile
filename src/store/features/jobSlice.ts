import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Job } from '../../shared'

type JobSliceState = Job[]

const initialState: JobSliceState = [
  {
    id: 1,
    company: 'Ejemplo Company 1',
    jobTitle: 'Desarrollador de Software',
    location: 'Ciudad Ejemplo 1',
    salaryMin: 50000,
    salaryMax: 70000,
    isFavorite: true,
    application: false,
    typeWork: 'Tiempo completo',
    description: 'Únete a nuestro equipo de desarrollo y trabaja en proyectos emocionantes. Como Ingeniero de Desarrollo de Software Senior, liderarás la arquitectura y desarrollo de aplicaciones de vanguardia. Requerimos al menos 5 años de experiencia en desarrollo de software y experiencia en liderazgo de equipos.'
  },
  {
    id: 2,
    company: 'Ejemplo Company 2',
    jobTitle: 'Diseñador Gráfico',
    location: 'Ciudad Ejemplo 2',
    salaryMin: 40000,
    salaryMax: 60000,
    isFavorite: false,
    application: true,
    typeWork: 'Medio tiempo',
    description: 'Descripción del trabajo 1.'
  },
  {
    id: 3,
    company: 'Ejemplo Company 3',
    jobTitle: 'Ingeniero de Redes',
    location: 'Ciudad Ejemplo 3',
    salaryMin: 60000,
    salaryMax: 80000,
    isFavorite: true,
    application: true,
    typeWork: 'Tiempo completo',
    description: 'Descripción del trabajo 1.'
  },
  {
    id: 4,
    company: 'Ejemplo Company 4',
    jobTitle: 'Analista de Datos',
    location: 'Ciudad Ejemplo 4',
    salaryMin: 55000,
    salaryMax: 75000,
    isFavorite: false,
    application: false,
    typeWork: 'Tiempo completo',
    description: 'Descripción del trabajo 1.'
  },
  {
    id: 5,
    company: 'Ejemplo Company 5',
    jobTitle: 'Desarrollador Frontend',
    location: 'Ciudad Ejemplo 5',
    salaryMin: 48000,
    salaryMax: 68000,
    isFavorite: true,
    application: true,
    typeWork: 'Tiempo completo',
    description: 'Descripción del trabajo 1.'
  }
]

const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {}
})

export default jobSlice.reducer