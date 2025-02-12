// lib/sanityClient.ts

import { createClient } from 'next-sanity'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Replace with your project ID from Sanity
  dataset: 'production', // Replace with your dataset name
  apiVersion: '2023-10-01', // Use the correct API version (or specify the version you use)
  useCdn: false, // Use the CDN for better performance
})
