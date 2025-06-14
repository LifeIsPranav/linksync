const { z } = require('zod')

const createUserValidator = z.object({
  name: z.string().min(3).max(50).trim(),
  username: z.string().min(4).max(50).trim().regex(/^[a-zA-Z0-9-]+$/, "Username can only contain letters, numbers, and hyphens"),
  email: z.string().email().trim(),
  password: z.string(),
  plan: z.enum(['paid', 'free']).default('free'),
  title: z.string().max(60).optional(),
  bio: z.string().max(200).optional(),
  avatar: z.string().max(500).optional(),
  displayName: z.string().max(50).optional(),
  location: z.string().max(200).optional(),
  website: z.string().max(200).url().optional(),
  customDomain: z.string().url().optional(),
  profileViews: z.number().optional(),
  status: z.enum(['active', 'inactive']).default('active'),
  image: z.array(z.string()).optional(),
  links: z.array(z.string().url()).optional()
})

module.exports = createUserValidator