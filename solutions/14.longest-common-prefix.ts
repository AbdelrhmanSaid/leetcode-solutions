const longestCommonPrefix = (strs: string[]): string => {
    strs = strs.sort((a, b) => a.length - b.length);
    let prefix = strs[0];

    while (!strs.every(s => s.startsWith(prefix))) {
        prefix = prefix.substring(0, prefix.length - 1);
        if (!prefix) return "";
    }

    return prefix;
};