import {defineField, defineType} from 'sanity'
import {MdPerson as icon} from 'react-icons/md'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the page',
    },
    defineField({
      name: 'date',
      title: 'Date',
      type: 'string',
      description: 'Please use "mm/dd/yy" format',
    }),
    defineField({
      name: 'slug',
      title: 'Ticket link',
      type: 'slug',
    }),
    defineField({
      name: 'social_slug',
      title: 'Social link',
      type: 'slug',
    }),
    defineField({
      name: 'social_username',
      title: 'Social username',
      type: 'string',
    }),
    {
      name: 'text',
      title: 'Text',
      type: 'string',
      description: 'Text description',
    },
  ]
})
