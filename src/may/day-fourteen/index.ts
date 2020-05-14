// Trie trie = new Trie();

// trie.insert("apple");
// trie.search("apple");   // returns true
// trie.search("app");     // returns false
// trie.startsWith("app"); // returns true
// trie.insert("app");
// trie.search("app");     // returns true

class TrieNode {
    private isEnd: boolean = false;
    private freq: number = 0;
    private child: object = {};
    public constructor() {
        this.isEnd = false;
        this.freq = 0;
        this.child = {};
    }
}

class Trie extends TrieNode {
    public root: TrieNode = undefined;
    constructor(trie) {
        super();
        this.root = new TrieNode();
    }

    /**
     * Inserts a word into the trie.
     * @param {string} word
     * @return {void}
     */
    public insert(word: string): void {
        if (word.length) return;
        let letter: TrieNode = new TrieNode();
        let curNode: TrieNode = new TrieNode();
        let i: number = 0;

        while (i < word.length) {
            letter = word[i];
            if (!curNode.child.hadOwnProperty(letter)) {
                curNode.child[letter] = new TrieNode();
            }
            curNode = curNode.child[letter];
        }

        curNode.isEnd = true;
        curNode.freq += 1;
    }

    /**
     * Returns if the word is in the trie.
     * @param {string} word
     * @return {boolean}
     */
    public search(word: string): boolean {}

    /**
     * Returns if there is any word in the trie that starts with the given prefix.
     * @param {string} prefix
     * @return {boolean}
     */
    public startsWith(prefix) {}

    public prefix(word) {
        let letter: TrieNode = new TrieNode();
        let curNode: TrieNode = new TrieNode();
        let i: number = 0;

        while (i < word.length) {
            letter = word[i];
            if (!curNode.child.hasOwnProperty(letter)) {
                return null;
                curNode = curNode.child[letter];
            }
        }
    }
}
