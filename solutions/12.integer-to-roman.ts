const MAPPER = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
};

const intToRoman = (num: number): string => {

    let roman = '';
    for (const key in MAPPER) {
        while (num >= MAPPER[key]) {
            roman += key;
            num -= MAPPER[key];
        }
    }

    return roman;
};