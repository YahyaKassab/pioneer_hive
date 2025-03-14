import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import type { NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.AUTH_GITHUB_ID!,
            clientSecret: process.env.AUTH_GITHUB_SECRET!,
        }),
    ],
    callbacks: {
        session: ({ session, token }) => {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.sub,
                },
            };
        },
        jwt: ({ token, user }) => {
            if (user) {
                token.sub = user.id;
            }
            return token;
        },
    },
    secret: process.env.NEXTAUTH_SECRET!,
    debug: process.env.NODE_ENV === 'development',
};

export const {
    handlers: { GET, POST },
    auth,
} = NextAuth(authOptions);
