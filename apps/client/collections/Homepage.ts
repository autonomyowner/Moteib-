import { CollectionConfig } from 'payload/types'

export const Homepage: CollectionConfig = {
  slug: 'homepage',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Homepage',
    },
    {
      name: 'hero',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'subtitle',
          type: 'text',
          localized: true,
        },
        {
          name: 'description',
          type: 'textarea',
          localized: true,
        },
        {
          name: 'primaryCTA',
          type: 'group',
          fields: [
            {
              name: 'text',
              type: 'text',
              localized: true,
            },
            {
              name: 'url',
              type: 'text',
            },
          ],
        },
        {
          name: 'secondaryCTA',
          type: 'group',
          fields: [
            {
              name: 'text',
              type: 'text',
              localized: true,
            },
            {
              name: 'url',
              type: 'text',
            },
          ],
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'aboutCoach',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          localized: true,
        },
        {
          name: 'description',
          type: 'richText',
          localized: true,
        },
        {
          name: 'linkText',
          type: 'text',
          localized: true,
        },
        {
          name: 'linkUrl',
          type: 'text',
        },
      ],
    },
    {
      name: 'whatYoullAchieve',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          localized: true,
        },
        {
          name: 'description',
          type: 'textarea',
          localized: true,
        },
        {
          name: 'achievements',
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
      ],
    },
    {
      name: 'coachingApproach',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          localized: true,
        },
        {
          name: 'description',
          type: 'richText',
          localized: true,
        },
      ],
    },
    {
      name: 'whoItsFor',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          localized: true,
        },
        {
          name: 'description',
          type: 'richText',
          localized: true,
        },
      ],
    },
    {
      name: 'finalCTA',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          localized: true,
        },
        {
          name: 'description',
          type: 'textarea',
          localized: true,
        },
        {
          name: 'primaryCTA',
          type: 'group',
          fields: [
            {
              name: 'text',
              type: 'text',
              localized: true,
            },
            {
              name: 'url',
              type: 'text',
            },
          ],
        },
        {
          name: 'secondaryCTA',
          type: 'group',
          fields: [
            {
              name: 'text',
              type: 'text',
              localized: true,
            },
            {
              name: 'url',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
  versions: {
    maxPerDoc: 10,
  },
}
