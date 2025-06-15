const { z } = require('zod')

const updateUserValidator = z.object({
  plan: z.enum(['paid', 'free']).optional(),
  title: z.string().max(60).optional(),
  bio: z.string().max(200).optional(),
  avatar: z.string().max(500).optional(),
  displayName: z.string().max(50).optional(),
  location: z.string().max(200).optional(),
  website: z.string().max(200).url().optional(),
  status: z.enum(['active', 'inactive']).optional(),
  image: z.array(z.string()).optional(),
  links: z.array(z.string().url()).optional()
})

module.exports = updateUserValidator