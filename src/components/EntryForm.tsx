"use client";

import { useState } from 'react';
import { Plus, Tag } from 'lucide-react';
import styles from './EntryForm.module.css';
import { Entry, saveEntry } from '@/services/storage';
import { getCurrentHourISO } from '@/services/time';

interface EntryFormProps {
    onEntrySaved: () => void;
}

const TAGS = ['Coding', 'Meeting', 'Design', 'Research', 'Break', 'Other'];

export default function EntryForm({ onEntrySaved }: EntryFormProps) {
    const [description, setDescription] = useState('');
    const [selectedTag, setSelectedTag] = useState(TAGS[0]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!description.trim()) return;

        const newEntry: Entry = {
            id: crypto.randomUUID(),
            timestamp: Date.now(),
            hour: getCurrentHourISO(),
            description,
            tag: selectedTag,
        };

        saveEntry(newEntry);
        onEntrySaved();
        setDescription('');
    };

    return (
        <form className={`card ${styles.form}`} onSubmit={handleSubmit}>
            <h2 className={styles.title}>What are you working on?</h2>

            <div className={styles.inputGroup}>
                <input
                    type="text"
                    className="input"
                    placeholder="I'm working on..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    autoFocus
                />
            </div>

            <div className={styles.tags}>
                {TAGS.map((tag) => (
                    <button
                        key={tag}
                        type="button"
                        className={`${styles.tag} ${selectedTag === tag ? styles.activeTag : ''}`}
                        onClick={() => setSelectedTag(tag)}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                <Plus size={18} style={{ marginRight: '0.5rem' }} />
                Log Entry
            </button>
        </form>
    );
}
