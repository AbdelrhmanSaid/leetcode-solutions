const generateParenthesis = (n: number): string[] => {
    const res: string[] = [];

    const helper = (left: number, right: number, str: string): string[] => {
        if (left === 0 && right === 0) {
            res.push(str);
            return res;
        }

        if (left > 0) helper(left - 1, right, str + '(');
        if (right > left) helper(left, right - 1, str + ')');
        return res;
    }

    return helper(n, n, '');
};