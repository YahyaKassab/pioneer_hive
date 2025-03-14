import { auth } from '@/auth';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AuthButtons from './AuthButtons';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth';
// ✅ Import client-side component

const Navbar = async () => {
    const session = await getServerSession(authOptions);

    return (
        <header className="px-5 py-3 shadow-sm font-work-sans">
            <nav className="flex justify-between items-center">
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={80} height={50} />
                </Link>
                <div className="flex items-center gap-5 text-secondary">
                    {session?.user ? (
                        <>
                            <Link href={'/startup/create'}>
                                <span>Create</span>
                            </Link>
                            <Link href={`/user/${session?.user?.id}`}>
                                <span>{session?.user?.name}</span>
                            </Link>
                        </>
                    ) : null}
                    <AuthButtons isAuthenticated={!!session?.user} />{' '}
                    {/* ✅ Uses client-side auth actions */}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
