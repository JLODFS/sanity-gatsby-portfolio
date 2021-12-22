export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61c31421375345005a0bcf0e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-4j8n5f4b',
                  apiId: 'd386af8c-d310-4dcd-8e7d-3bc110519b94'
                },
                {
                  buildHookId: '61c3142191a0cb006e56788c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-edj3qx2x',
                  apiId: '5b621ffb-871e-41ef-ac60-e29175fbb6bf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JLODFS/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-edj3qx2x.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
