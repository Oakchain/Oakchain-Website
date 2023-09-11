export const arrayGenerator = (length) => {
    return Array.from({ length }, (_, index) => index + 1);
};

export function formatWalletAddress(address) {
    if (typeof address !== 'string') {
        throw new Error('Input must be a string');
    }

    const prefix = address.substring(0, 6);
    const suffix = address.substring(address.length - 4);

    return `${prefix}...${suffix}`;
}