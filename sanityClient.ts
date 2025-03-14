import { createClient } from '@sanity/client';

export const SanityClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Replace with your actual project ID
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Or another dataset name
    apiVersion: '2025-02-19', // Use the latest API version
    useCdn: true, // Enable CDN for faster queries
});
