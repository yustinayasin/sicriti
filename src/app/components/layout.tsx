import { ReactNode } from 'react';
import Navbar from '../components/navbar'

export default function Layout({ children, isLogin, headings }: { children: ReactNode, isLogin: boolean, headings: string  }) {
    return (
        <div className="min-h-full">
            <Navbar headings={headings} isLogin={isLogin} />
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                { children }
            </main>   
        </div>
    )
}