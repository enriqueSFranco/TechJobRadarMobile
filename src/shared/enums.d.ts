enum User {
  Candidate = 'candidate',
  Recruiter = 'recruiter',
  Admin = 'admin'
}

enum EmploymentType {
  fullTime = 'fullTime',
  permanent = 'permanent',
  payroll = 'payroll',
  partTime = 'partTime',
  temporary = 'temporary',
  selfEmployed = 'selfEmployed',
}

enum LevelKnowledge {
  beginner = 'beginner',
  intermediate = 'intermediate',
  advanced = 'advanced',
}

export { EmploymentType, LevelKnowledge, User }