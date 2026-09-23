export interface Turma {
  name: string
  schedule: string
  age: string
  description: string
  icon: string
  color: string
}

export const turmas: Turma[] = [
  {
    name: 'Maternal',
    schedule: '08h às 12h30',
    age: 'Primeira infância',
    description: 'Um cotidiano acolhedor, com brincadeiras, histórias, movimento e experiências próximas à natureza.',
    icon: 'ri-seedling-line',
    color: 'sage',
  },
  {
    name: 'Jardim de Infância',
    schedule: '08h às 12h30',
    age: 'Educação infantil',
    description: 'Brincar livre, imaginação e ritmos diários que oferecem segurança para crescer e descobrir.',
    icon: 'ri-flower-line',
    color: 'rose',
  },
  {
    name: 'Fundamental I',
    schedule: '07h às 12h',
    age: '1º ao 5º ano',
    description: 'Aprendizagem viva que une pensamento, sentimento e ação em uma jornada com significado.',
    icon: 'ri-book-open-line',
    color: 'sky',
  },
]

export const contraturno = ['Inglês', 'Trabalhos manuais', 'Alemão', 'Cozinha', 'Natação']
