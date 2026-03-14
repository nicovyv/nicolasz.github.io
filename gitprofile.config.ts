// gitprofile.config.ts
const CONFIG = {
  github: {
    username: 'nicovyv', 
  },
  base: '/', 
  projects: {
    github: {
      display: true,
      header: 'Proyectos de GitHub',
      mode: 'automatic',
      automatic: {
        sortBy: 'updated', 
        limit: 8,
        exclude: {
          forks: true, 
          projects: [], 
        },
      },
    },
    external: {
      header: 'Otros Proyectos',
      projects: [
        {
          title: 'Analisis de Mercado Global de Litio',
          description:
            'Proyecto de ingeniería y análisis de datos sobre el mercado global de extracción de litio.',
          imageUrl:
            'https://img.freepik.com/free-vector/data-analysis-concept-illustration_114360-801.jpg',
          link: 'https://github.com/nicovyv/analisis-litio',
        },
      ],
    },
  },
  seo: { title: 'Portfolio de Nico | Backend & Data', description: 'Estudiante de Programacion en UTN', imageURL: '' },
  social: {
    linkedin: 'nicolas-zabala-v', 
  },
  skills: [
    'C#',
    'SQL Server',
    '.NET',
    'Python',
    'Git',
    'Analisis de Datos',
  ],
  experiences: [
    {
      company: 'Estudio Figueras',
      position: 'Analista Administrativo',
      from: 'Marzo 2024',
      to: 'Presente',
      companyLink: '',
    },
  ],
  educations: [
    {
      institution: 'UTN FRGP',
      degree: 'Tecnicatura Universitaria en Programacion',
      from: '2024',
      to: '2026',
    },
  ],
  themeConfig: {
    defaultTheme: 'business', 
    disableSwitch: false,
    respectPrefersColorScheme: true,
    displayAvatarRing: true,
    themes: ['business', 'corporate', 'dracula'],
  },
  footer: `Hecho con GitProfile`,
  enablePWA: true,
};

export default CONFIG;
