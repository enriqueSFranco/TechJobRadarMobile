import { Colors } from './models.d'
import { KnowledgeColor } from './types.d'

// POMODORO
export const COLORS: Colors = {
  PURPLE: '#8093f1',
  FIUSHA: '#b388eb',
  PINK: '#f7aef8'
}

// RICK AND MORTY
export const STATUS_COLOR = {
  'Alive': '#3FC387',
  'Dead': '#d53c2e',
  'unknown': '#9e9e9e'
} as const


const Knowledge: Record<string, KnowledgeColor> = {
  javascript: { backgroundColor: '#F7DF1E', color: '#222' },
  react: { backgroundColor: '#139ECA', color: '#fff' },
  nodejs: { backgroundColor: '#036e02', color: '#fff' },
  seo: { backgroundColor: '#000', color: "#fff" },
  python: { backgroundColor: '#306998', color: "#fff" },
  java: { backgroundColor: '#007396', color: "#fff" },
  csharp: { backgroundColor: '#178600', color: "#fff" },
  angular: { backgroundColor: '#DD0031', color: "#fff" },
  vuejs: { backgroundColor: '#42b883', color: "#fff" },
  mysql: { backgroundColor: '#00758F', color: "#fff" },
  mongodb: { backgroundColor: '#13AA52', color: "#fff" },
  graphql: { backgroundColor: '#E535AB', color: "#fff" },
  aws: { backgroundColor: '#FF9900', color: "#fff" },
  docker: { backgroundColor: '#2496ED', color: "#fff" },
  kubernetes: { backgroundColor: '#326CE5', color: "#fff" }
}

export { Knowledge }