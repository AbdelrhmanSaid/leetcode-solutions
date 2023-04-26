const MAPPER = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
}

const letterCombinations = (digits: string): string[] => {
    if (digits.length === 0) return [];

    const result: string[] = [];
    const helper = (digits: string, index: number, current: string) => {
        if (index === digits.length) {
            result.push(current);
            return;
        }

        const letters = MAPPER[digits[index]];
        for (let i = 0; i < letters.length; i++) {
            helper(digits, index + 1, current + letters[i]);
        }
    }

    helper(digits, 0, '');
    return result;
};