export const getCurrentHourISO = (): string => {
    const now = new Date();
    now.setMinutes(0, 0, 0);
    return now.toISOString();
};

export const formatTime = (timestamp: number): string => {
    return new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: 'numeric',
    }).format(new Date(timestamp));
};

export const formatHour = (isoString: string): string => {
    return new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: 'numeric',
    }).format(new Date(isoString));
};

export const isSameDay = (d1: Date, d2: Date): boolean => {
    return (
        d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate()
    );
};
