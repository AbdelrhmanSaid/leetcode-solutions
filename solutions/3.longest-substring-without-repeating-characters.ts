function lengthOfLongestSubstring(s: string): number {

    let longestStringLength = 0;

    for (let i = 0; i < s.length; i++) {
        let currentStringSet = new Set();

        for (let x = i; x < s.length; x++) {
            if (currentStringSet.has(s[x])) break;
            currentStringSet.add(s[x]);
        }

        longestStringLength = Math.max(
            longestStringLength,
            currentStringSet.size
        );
    }

    return longestStringLength;
};