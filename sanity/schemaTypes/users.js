import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'user',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'username',
      title: 'Username',
      type: 'string',
    },
    {
      name: 'number',
      title: 'Number',
      type: 'number',
    },
    {
      name: 'dob',
      title: 'Date of Birth',
      type: 'string',
    },
  ],
})
