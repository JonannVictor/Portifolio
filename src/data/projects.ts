export type CaseStudy = {
  slug: string
  name: string
  tagline: string
  problem: string
  solution: string
  techStack: string[]
  keyFeatures: string[]
  links: {
    github?: string
    demo?: string
  }
}

// TODO: substituir pelos projetos reais (problem/solution/features/links).
export const projects: CaseStudy[] = [
  {
    slug: 'project-one',
    name: 'Nome do Projeto',
    tagline: 'Uma linha curta descrevendo o que o produto faz.',
    problem:
      'Descreva o problema real que o cliente/usuário enfrentava antes desse projeto existir.',
    solution:
      'Descreva a abordagem técnica e de produto usada para resolver esse problema.',
    techStack: ['React', 'Node.js', 'PostgreSQL'],
    keyFeatures: [
      'Funcionalidade-chave número um',
      'Funcionalidade-chave número dois',
      'Funcionalidade-chave número três',
    ],
    links: {
      github: 'https://github.com/JonannVictor',
      demo: '',
    },
  },
]
