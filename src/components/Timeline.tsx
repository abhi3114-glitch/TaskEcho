"use client";

import { Entry, deleteEntry } from '@/services/storage';
import { formatTime } from '@/services/time';
import { Trash2, Clock } from 'lucide-react';
import styles from './Timeline.module.css';

interface TimelineProps {
    entries: Entry[];
    onDelete: () => void;
}

export default function Timeline({ entries, onDelete }: TimelineProps) {
    const handleDelete = (id: string) => {
        deleteEntry(id);
        onDelete();
    };

    if (entries.length === 0) {
        return (
            <div className={styles.emptyState}>
                <p>No entries yet today.</p>
            </div>
        );
    }

    return (
        <div className={styles.timeline}>
            {entries.map((entry) => (
                <div key={entry.id} className={`card ${styles.entry}`}>
                    <div className={styles.timeColumn}>
                        <Clock size={14} className={styles.icon} />
                        <span className={styles.time}>{formatTime(entry.timestamp)}</span>
                    </div>
                    <div className={styles.contentColumn}>
                        <div className={styles.header}>
                            <span className={styles.tag}>{entry.tag}</span>
                            <button
                                onClick={() => handleDelete(entry.id)}
                                className="btn-ghost"
                                style={{ padding: '0.25rem', height: 'auto' }}
                            >
                                <Trash2 size={14} />
                            </button>
                        </div>
                        <p className={styles.description}>{entry.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
