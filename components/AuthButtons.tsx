'use client';

import { signIn, signOut } from 'next-auth/react';

const AuthButtons = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
    return isAuthenticated ? (
        <button onClick={() => signOut()}>
            <span>Logout</span>
        </button>
    ) : (
        <button onClick={() => signIn('github')}>
            <span>Login</span>
        </button>
    );
};

export default AuthButtons;
