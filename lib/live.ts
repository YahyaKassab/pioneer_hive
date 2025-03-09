import { defineLive } from 'next-sanity';
import { client } from '@/sanity/lib/client';

export const { sanityFetch, SanityLive } = defineLive({
    client,
    browserToken: process.env.NEXT_PUBLIC_SANITY_BROWSER_TOKEN, // Ensure this is a Viewer token
});

export default SanityLive;
