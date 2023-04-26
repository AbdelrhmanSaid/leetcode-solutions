const expand = (s: string, left: number, right: number): string => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }

    return s.substring(left + 1, right);
};

const longestPalindrome = (s: string): string => {
    let longest: string = '';

    for (let i = 0; i < s.length; i++) {
        const odd = expand(s, i, i);
        const even = expand(s, i, i + 1);
        const longer = odd.length > even.length ? odd : even;
        if (longer.length > longest.length) {
            longest = longer;
        }
    }

    return longest;
};