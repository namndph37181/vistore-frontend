import AppConfig from '@/components/layout/AppConfig'
import { Metadata } from 'next'
import React from 'react'

interface SimpleLayoutProps {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: 'ViStore',
    description: 'The ultimate collection of design-agnostic, flexible and accessible React UI Components.'
}

export default function SimpleLayout({ children }: SimpleLayoutProps) {
    return (
        <React.Fragment>
            {children}
            <AppConfig simple />
        </React.Fragment>
    )
}
