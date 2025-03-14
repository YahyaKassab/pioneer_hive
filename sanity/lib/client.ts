import { createClient } from 'next-sanity';

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2023-11-16', // Match live config version
    useCdn: false, // Disable CDN for real-time updates
    perspective: 'previewDrafts', // Enable draft previews
});
