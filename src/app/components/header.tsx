'use client'

import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Header(prop: {sectionTitle: string}) {
    const router = useRouter()

    return (
        <div>
            <nav className="main-nav">
                <div className="home-link">
                    <Link href="/">destiyadian.com</Link>
                </div>
            </nav>

            <div className="section-title">
                <h2>{prop.sectionTitle}</h2>

                <button className="back-button" onClick={() => router.back()}>back</button>
            </div>
        </div>
        
    )
}