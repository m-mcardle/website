import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    reports: defineCollection({
      type: 'page',
      source: 'reports/**',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        period: z.string().optional(),
        image: z.string().optional(),
        role: z.string().optional(),
        company: z.string().optional(),
        hoverColor: z.string().optional(),
        color: z.string().optional(),
      }),
    }),
    projects: defineCollection({
      type: 'page',
      source: 'projects/**',
    }),
  }
})
