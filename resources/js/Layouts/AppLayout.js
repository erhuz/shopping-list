import React, { useEffect } from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'

export default function AppLayout({ title, children }) {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <div>
{/*            <header>
                <InertiaLink href="/">Home</InertiaLink>
                <InertiaLink href="/about">About</InertiaLink>
                <InertiaLink href="/contact">Contact</InertiaLink>
            </header>*/}

            {children}
        </div>
    )
};
