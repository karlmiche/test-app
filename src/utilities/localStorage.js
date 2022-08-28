export const getLocalStorage = (key) => {
    try {
        const stored = localStorage.getItem(key);
        if (stored === null) {
            return undefined;
        }
        return JSON.parse(stored);
    } catch (error) {
        return undefined
    }
};

export const setLocalStorage = (key, value) => {
    try {
        const stored = JSON.stringify(value);
        localStorage.setItem(key, stored);
    } catch (error) {
        return error;
    }
};