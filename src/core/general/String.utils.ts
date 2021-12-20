export const toDashedCase = (str: string): string => {
    const sanitized = str.replaceAll('#', '-sharp').replaceAll('b', '-flat');
    const formatted = sanitized.slice(0, 1).toLowerCase() + sanitized.slice(1);
    return formatted.replace(/[A-Z]/g, m => "-" + m.toLowerCase());
}
