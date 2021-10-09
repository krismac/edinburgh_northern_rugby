export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '616174aac3dcde154c07e11e',
                  title: 'Sanity Studio',
                  name: 'edinburgh-northern-rugby-studio',
                  apiId: '307dec71-b0aa-4b3d-a775-1ad3c5404564'
                },
                {
                  buildHookId: '616174aa31ee6cf0501c7834',
                  title: 'Landing pages Website',
                  name: 'edinburgh-northern-rugby',
                  apiId: '7d0442ff-0c4a-488e-ae2b-3120d84f7c7d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/krismac/edinburgh_northern_rugby',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://edinburgh-northern-rugby.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
