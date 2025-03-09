import NextAuth, { NextAuthConfig } from 'next-auth';
import GitHub from 'next-auth/providers/github';

export const authOptions: NextAuthConfig = {
    providers: [
        GitHub({
            clientId: process.env.AUTH_GITHUB_ID as string,
            clientSecret: process.env.AUTH_GITHUB_SECRET as string,
        }),
    ],
};

// ✅ Correctly export authentication functions
export const { handlers } = NextAuth(authOptions);

export const auth = () => NextAuth(authOptions);

export { signIn, signOut } from 'next-auth/react'; // ✅ Ensure client-side authentication works
