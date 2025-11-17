import { CollectionConfig } from 'payload/types'

export const Programs: CollectionConfig = {
  slug: 'programs',
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
      name: 'duration',
      type: 'select',
      required: true,
      options: [
        {
          label: '6 Months',
          value: '6-month',
        },
        {
          label: '9 Months',
          value: '9-month',
        },
        {
          label: '12 Months',
          value: '12-month',
        },
      ],
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
      name: 'features',
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
      name: 'structure',
      type: 'group',
      fields: [
        {
          name: 'sessionFrequency',
          type: 'text',
          localized: true,
        },
        {
          name: 'totalSessions',
          type: 'number',
        },
        {
          name: 'sessionDuration',
          type: 'text',
          localized: true,
        },
        {
          name: 'support',
          type: 'array',
          fields: [
            {
              name: 'item',
              type: 'text',
              localized: true,
            },
          ],
        },
      ],
    },
    {
      name: 'isPopular',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
  versions: {
    maxPerDoc: 10,
  },
}
