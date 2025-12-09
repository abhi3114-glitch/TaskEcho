"use client";

import { useEffect, useState } from 'react';
import { Entry, getEntries } from '@/services/storage';
import styles from './page.module.css';

export default function InsightsPage() {
    const [entries, setEntries] = useState<Entry[]>([]);

    useEffect(() => {
        setEntries(getEntries());
    }, []);

    // Stats Logic
    const totalHours = entries.length;

    const tagCounts = entries.reduce((acc, entry) => {
        acc[entry.tag] = (acc[entry.tag] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    const sortedTags = Object.entries(tagCounts)
        .sort(([, a], [, b]) => b - a);

    // Context Switching (ignoring first entry)
    let contextSwitches = 0;
    for (let i = 1; i < entries.length; i++) {
        if (entries[i].tag !== entries[i - 1].tag) {
            contextSwitches++;
        }
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Insights</h1>

            <div className={styles.grid}>
                <div className="card">
                    <h3>Total Hours</h3>
                    <p className={styles.stat}>{totalHours}</p>
                </div>
                <div className="card">
                    <h3>Context Switches</h3>
                    <p className={styles.stat}>{contextSwitches}</p>
                </div>
            </div>

            <div className="card" style={{ marginTop: '1rem' }}>
                <h3>Time Distribution</h3>
                <div className={styles.bars}>
                    {sortedTags.map(([tag, count]) => (
                        <div key={tag} className={styles.barItem}>
                            <div className={styles.barLabel}>
                                <span>{tag}</span>
                                <span>{count}h ({Math.round(count / totalHours * 100)}%)</span>
                            </div>
                            <div className={styles.barBg}>
                                <div
                                    className={styles.barFill}
                                    style={{ width: `${(count / totalHours) * 100}%` }}
                                />
                            </div>
                        </div>
                    ))}
                    {entries.length === 0 && <p style={{ color: 'var(--muted-foreground)' }}>No data yet.</p>}
                </div>
            </div>
        </div>
    );
}
