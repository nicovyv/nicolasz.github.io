// gitprofile.config.ts
const CONFIG = {
  github: {
    username: 'nicovyv', 
  },
  base: '/', 
  projects: {
      github: {
      display: true, 
      header: 'Proyectos',
      mode: 'manual', 
      manual: {
        projects: [
          'nicovyv/TPC-Negocio',
          'benitex-dev/TPAPIs_equipo11-B',
          'nicovyv/analisis-litio',
          'nicovyv/BDII-TPI-ST'
        ], 
      },
    },
    external: {
      header: '', 
      projects: [], 
    },
  },
  seo: { 
    title: 'Portfolio de Nicolas Zabala', 
    description: 'Estudiante de Programación en UTN FRGP', 
    imageURL: '' 
  },
  social: {
    linkedin: 'nicolas-zabala-v',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    website: '',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl: '', 
  },
  skills: [
    'C#',
    'SQL Server',
    '.NET',
    'Python',
  ],
  experiences: [],
  certifications: [],
  educations: [
    {
      institution: 'UTN FRGP',
      degree: 'Tecnicatura Universitaria en Programación',
      from: '2024',
      to: '2026',
    },
  ],
  publications: [],
  blog: {
    source: '',
    username: '',
    limit: 0,
  },
  googleAnalytics: {
    id: '', 
  },
  hotjar: {
    id: '', 
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'business',
    disableSwitch: true,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light', 'dark', 'corporate', 'business', 'dracula', 'nord'
    ],
  },
  footer: `Hecho con <a class="text-primary" href="https://github.com/arifszn/gitprofile" target="_blank" rel="noreferrer">GitProfile</a>`,
  enablePWA: true,
};

export default CONFIG;
