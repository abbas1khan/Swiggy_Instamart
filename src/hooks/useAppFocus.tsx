import { useEffect } from 'react';
import { AppState } from 'react-native';

export const useAppFocus = (onFocus: () => void) => {
    useEffect(() => {
        const subscription = AppState.addEventListener('change', (state) => {
            if (state === 'active') {
                onFocus?.();
            }
        });

        return () => {
            subscription.remove();
        };
    }, [onFocus]);
};
