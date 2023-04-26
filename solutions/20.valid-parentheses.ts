const MAPPER = {
    '(': ')',
    '{': '}',
    '[': ']',
};

const isValid = (s: string): boolean => {
    const stack = [];

    for (let i of s) {
        if (MAPPER[i]) {
            stack.push(MAPPER[i]);
        } else {
            if (stack.pop() !== i) return false;
        }
    }
    
    return !stack.length;
}