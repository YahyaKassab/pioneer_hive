'use client';
import { signIn, signOut } from 'next-auth/react';

const AuthButtons = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
    return (
        <div className="flex gap-2">
            {isAuthenticated ? (
                <button
                    onClick={() => signOut({ callbackUrl: '/' })}
                    className="px-3 py-1.5 text-sm bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors"
                >
                    Sign Out
                </button>
            ) : (
                <button
                    onClick={() => signIn('github', { callbackUrl: '/' })}
                    className="px-3 py-1.5 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors"
                >
                    GitHub Login
                </button>
            )}
        </div>
    );
};

export default AuthButtons;
