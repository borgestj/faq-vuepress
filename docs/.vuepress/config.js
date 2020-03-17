module.exports = {
  title: 'Documentação Uatt?',
  description: 'Bem vindo a página de Documentação!!!',
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
        text: 'Documentação Admin',
        items: [
          {
            text: 'Docuemntação Admin',
            items: [
              {
                text: 'Alimentando o Glossário',
                link: '/section-admin/initial.md'
              }
            ]
          },
        ]
      },
      {
        text: 'Documentação Dev',
        items: [
          {
            text: 'Iniciando o Projeto',
            items: [
              {
                text: 'Projeto',
                link: '/section-dev/iniciandoProjeto.md'
              }
            ]
          },
          
          {
            text: 'Estrutura',
            items: [
              {
                text: 'Estrutura do Projeto',
                link: '/section-dev/estruturaSite.md'
              },
              {
                text: 'Homologação',
                link: '/section-dev/configWebpackHomologacao.md'
              }
            ], 
          },
          {
            text: 'Configurações',
            items: [
              {
                text: 'Linux',
                link: '/section-dev/linux.md'
              }
            ], 
          },

          {
            text: 'Paginas',
            items: [
              {
                text: 'Criando uma nova página',
                link: '/section-dev/paginas.md'
              },
              {
                text: 'Alterando estrutura estática das páginas',
                link: '/section-dev/paginas.md#home-vue'
              },
              {
                text: 'Helpdesk.vue',
                link: '/section-dev/paginas.md#Helpdesk-vue'
              },
              {
                text: 'About.vue',
                link: '/section-dev/paginas.md#About-vue'
              },
              {
                text: 'Collection.vue',
                link: '/section-dev/paginas.md#Collection-vue'
              },
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
