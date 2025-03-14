import { defineLive } from 'next-sanity';
import { client } from '@/sanity/lib/client';

export const { sanityFetch, SanityLive } = defineLive({
    client: client.withConfig({
        apiVersion: '2023-11-16', // Use current stable version instead of vX
        token: process.env.SANITY_SERVER_TOKEN, // Add server token for draft content
    }),
    browserToken: process.env.NEXT_PUBLIC_SANITY_BROWSER_TOKEN,
    serverToken: process.env.SANITY_SERVER_TOKEN, // Add server token here
});

export default SanityLive;
