export const replaceAll = (str: string, searchTerm: string, replaceTerm: string) => {
    return str.split(searchTerm).join(replaceTerm);
}

export const toDashedCase = (str: string): string => {
    const sanitized = replaceAll(replaceAll(str, '#', '-sharp'), 'b', '-flat');
    const formatted = sanitized.slice(0, 1).toLowerCase() + sanitized.slice(1);
    return formatted.replace(/[A-Z]/g, m => "-" + m.toLowerCase());
}
