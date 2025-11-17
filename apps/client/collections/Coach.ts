import { CollectionConfig } from 'payload/types'

export const Coach: CollectionConfig = {
  slug: 'coach',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      localized: true,
    },
    {
      name: 'bio',
      type: 'richText',
      localized: true,
    },
    {
      name: 'philosophy',
      type: 'group',
      fields: [
        {
          name: 'quote',
          type: 'textarea',
          localized: true,
        },
        {
          name: 'description',
          type: 'richText',
          localized: true,
        },
        {
          name: 'principles',
          type: 'array',
          fields: [
            {
              name: 'principle',
              type: 'text',
              localized: true,
            },
          ],
        },
      ],
    },
    {
      name: 'expertise',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'description',
          type: 'textarea',
          localized: true,
        },
      ],
    },
    {
      name: 'credentials',
      type: 'array',
      fields: [
        {
          name: 'credential',
          type: 'text',
          required: true,
          localized: true,
        },
      ],
    },
    {
      name: 'certifications',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'alt',
          type: 'text',
          localized: true,
        },
      ],
    },
  ],
  versions: {
    maxPerDoc: 10,
  },
}
