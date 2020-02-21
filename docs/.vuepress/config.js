module.exports = {
  title: 'Documentação Uatt?',
  description: 'Documentação do site B2C.',
  themeConfig: {
    logo: '/logo-uatt.svg',
    // lastUpdated: 'Last updated',
    // repo: 'https://github.com/borgestj/faq-vuepress',
    // docsDir: 'docs',
    // editLinks: true,
    // editLinkText: 'Recommend a change',
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Basic Page',
        link: '/basic/'
      },
      {
        text: 'Section',
        items: [
          {
            text: 'Padrões do Projeto',
            link: '/section/#iniciando-o-projeto'
          },
          {
            text: 'Projeto',
            link: '/section/#executando-o-projeto'
          },
        ]
      },
      {
        text: 'Section2',
        items: [
          {
            text: 'Projeto',
            link: '/section2/#criando-uma-nova-pagina'
          }
        ]
      },
      {
        text: 'Componente Teste',
        link: '/component-example'
      }
    ],
    plugins: ['@vuepress/active-header-links']
  }
}
