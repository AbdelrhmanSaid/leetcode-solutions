const roman = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

const romanToInt = (s: string): number => {

    let result: number = 0

    for (let i: number = s.length - 1; ~i; i--) {
        const num = roman[s.charAt(i)];
        result = 4 * num < result ? result - num : result + num;
    }

    return result
};