module.exports = {
  title: 'Documentação Uatt?',
  description: false,
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
        text: 'Documentação',
        items: [
          {
            text: 'Iniciando o Projeto',
            items: [
              {
                text: 'Projeto',
                link: '/section/iniciandoProjeto.md'
              }
            ]
          },
          
          {
            text: 'Estrutura',
            items: [
              {
                text: 'Estrutura do Projeto',
                link: '/section/estruturaSite.md'
              }
            ], 
          },

          {
            text: 'Paginas',
            items: [
              {
                text: 'Criando uma Página',
                link: '/section/paginas.md'
              }
            ]
          },

        ]
      }
    ],
    plugins: [
      ['@vuepress/active-header-links'],
      ['@vuepress/back-to-top', true]
    ]
  }
}
