function isMatch(s: string, p: string): boolean {
    const matches = (i: number, j: number): boolean => {
        if (i === 0) {
            return false;
        }
        if (p[j - 1] === '.') {
            return true;
        }
        return s[i - 1] === p[j - 1];
    };

    const memo: boolean[][] = Array.from({ length: s.length + 1 }, () => new Array(p.length + 1).fill(false));
    memo[0][0] = true;

    for (let i = 0; i <= s.length; i++) {
        for (let j = 1; j <= p.length; j++) {
            if (p[j - 1] === '*') {
                memo[i][j] = memo[i][j - 2];
                if (matches(i, j - 1)) {
                    memo[i][j] = memo[i][j] || memo[i - 1][j];
                }
            } else if (matches(i, j)) {
                memo[i][j] = memo[i - 1][j - 1];
            }
        }
    }

    return memo[s.length][p.length];
}