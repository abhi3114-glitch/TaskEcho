"use client";

import { useEffect, useState } from 'react';
import EntryForm from './EntryForm';
import Timeline from './Timeline';
import { Entry, getEntries } from '@/services/storage';
import { requestNotificationPermission } from '@/services/notifications';
import { useHourlyCheck } from '@/hooks/useHourlyCheck';

export default function Dashboard() {
    const [entries, setEntries] = useState<Entry[]>([]);
    useHourlyCheck();

    const loadEntries = () => {
        setEntries(getEntries());
    };

    useEffect(() => {
        loadEntries();
        requestNotificationPermission();
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <EntryForm onEntrySaved={loadEntries} />
            <Timeline entries={entries} onDelete={loadEntries} />
        </div>
    );
}
