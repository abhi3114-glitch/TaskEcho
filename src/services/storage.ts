export interface Entry {
    id: string;
    timestamp: number;
    hour: string; // ISO string representing the hour start
    description: string;
    tag: string;
}

const STORAGE_KEY = 'taskecho_entries';

export const getEntries = (): Entry[] => {
    if (typeof window === 'undefined') return [];
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    } catch (e) {
        console.error('Failed to load entries', e);
        return [];
    }
};

export const saveEntry = (entry: Entry): void => {
    const entries = getEntries();
    const updated = [entry, ...entries];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};

export const deleteEntry = (id: string): void => {
    const entries = getEntries();
    const updated = entries.filter((e) => e.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};

export const clearEntries = (): void => {
    localStorage.removeItem(STORAGE_KEY);
};
