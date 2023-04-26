const myAtoi = (s: string): number => {
    const MAX_INT = 2147483647;
    const MIN_INT = -2147483648;

    s = s.trim();
    if (s.length === 0) return 0;

    const sign = s[0] === '-' ? -1 : 1;
    if (s[0] === '+' || s[0] === '-') s = s.slice(1);

    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c < '0' || c > '9') break;
        result = result * 10 + (c.charCodeAt(0) - '0'.charCodeAt(0));
    }

    return Math.min(Math.max(sign * result, MIN_INT), MAX_INT);
};