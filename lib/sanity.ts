import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'your-project-id',
  dataset: 'production',
  apiVersion: '2024-01-24',
  useCdn: false,
})