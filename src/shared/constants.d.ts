import type { Colors, Job } from './models.d'
import { KnowledgeColor } from './types.d'
import { EmploymentType, LevelKnowledge } from './enums.d'

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

export { Knowledge, JobCreationInitialState }