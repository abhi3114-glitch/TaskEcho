"use client";

import { Activity, Download, BarChart2, Home } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();

    const handleExport = () => {
        const entries = localStorage.getItem('taskecho_entries');
        if (!entries) return alert('No data to export');

        const blob = new Blob([entries], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `taskecho-export-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const linkStyle = (path: string) => ({
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        color: pathname === path ? 'var(--primary)' : 'var(--muted-foreground)',
        fontSize: '0.875rem',
        fontWeight: 500,
        transition: 'color 0.2s'
    });

    return (
        <header style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.5rem 0',
            marginBottom: '2rem',
            borderBottom: '1px solid var(--border)'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                    background: 'var(--primary)',
                    padding: '0.5rem',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Activity color="white" size={24} />
                </div>
                <div>
                    <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>TaskEcho</h1>
                    <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)' }}>Hourly Check-in</p>
                </div>
            </div>

            <nav style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <Link href="/" style={linkStyle('/')}>
                    <Home size={18} />
                    <span>Home</span>
                </Link>
                <Link href="/insights" style={linkStyle('/insights')}>
                    <BarChart2 size={18} />
                    <span>Insights</span>
                </Link>
                <button
                    onClick={handleExport}
                    className="btn btn-ghost"
                    style={{ padding: '0.5rem', height: 'auto' }}
                    title="Export JSON"
                >
                    <Download size={18} />
                </button>
            </nav>
        </header>
    );
}
