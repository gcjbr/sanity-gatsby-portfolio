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
                  buildHookId: '5d11c3972569135d288f6e80',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-thnn2vhc',
                  apiId: '3fbce81a-717f-47ae-8c06-7f64f92c5753'
                },
                {
                  buildHookId: '5d11c3971d4bf3c5c6d1bb87',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-dsycfrf8',
                  apiId: 'e1ad7b15-9958-4250-b292-ee51a1545ef3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/souljacker/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-dsycfrf8.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
