export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '601a5cd9d2e96ba6e1b4b58d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-btjqnjtu',
                  apiId: 'afc87dfe-4d34-4dcc-97df-bc15273d71da'
                },
                {
                  buildHookId: '601a5cda23955dcff9526351',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-qfajifoe',
                  apiId: 'c1f89ba6-b6b2-4874-a6f7-5d807d6a51a3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/adamjudd79/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-qfajifoe.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
