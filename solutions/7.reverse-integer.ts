function reverse(n: number): number {

    const reverseN = +String(Math.abs(n)).split('').reverse().join('');

    if (reverseN > 0x7FFFFFFF) return 0;

    return n < 0 ? -reverseN : reverseN;
};