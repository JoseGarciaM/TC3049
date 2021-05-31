import UUID from '@sanity/uuid'

export default {
  name: 'siteConfig',
  title: 'Site Config',
  type: 'document',
  description: 'General configuration for optimal an rally experience!',
  fields: [
    {
      name: 'welcomeMessage',
      title: 'Welcome Message',
      type: 'string'
    },
    {
      name: 'successComments',
      title: 'Success Comments',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Praise from Knowledge Rally when you answer correctly'
    },
    {
      name: 'failComments',
      title: 'Fail comments',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Cheeky comments from Knowledge Rally when you fail to answer correctly'
    }
  ]
}
