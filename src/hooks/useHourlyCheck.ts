"use client";

import { useEffect, useRef } from 'react';
import { sendNotification } from '@/services/notifications';
import { getCurrentHourISO } from '@/services/time';

export const useHourlyCheck = () => {
    const lastHourRef = useRef<string | null>(null);

    useEffect(() => {
        const check = () => {
            const currentHour = getCurrentHourISO();

            // Initialize on first run
            if (!lastHourRef.current) {
                lastHourRef.current = currentHour;
                return;
            }

            if (currentHour !== lastHourRef.current) {
                lastHourRef.current = currentHour;
                sendNotification("TaskEcho", {
                    body: "Time to log: What did you work on this past hour?",
                    requireInteraction: true,
                    icon: '/next.svg', // Placeholder, verify if exists or use none
                });
            }
        };

        const interval = setInterval(check, 10000); // Check every 10 seconds for responsiveness
        check();

        return () => clearInterval(interval);
    }, []);
};
