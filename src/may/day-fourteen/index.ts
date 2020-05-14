class TrieNode {
    public root: object = {};
    public constructor() {
        this.root;
    }
}

class Trie extends TrieNode {
    public root = undefined;
    public constructor() {
        super();
        this.root = new TrieNode().root;
    }

    /**
     * Inserts a word into the trie.
     * @param {string} word
     * @return {void}
     */
    public insert(word: string): void {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            node = node[word[i]] = node[word[i]] || {};
            if (i === word.length - 1) node.isTerminal = true;
        }
    }

    /**
     * Returns if the word is in the trie.
     * @param {string} word
     * @return {boolean}
     */
    public search(word: string, isPrefix?: boolean): boolean {
        let node = this.root;
        for (let c of word) {
            if (!node[c]) return false;
            node = node[c];
        }
        return isPrefix || !!node.isTerminal;
    }

    /**
     * Returns if there is any word in the trie that starts with the given prefix.
     * @param {string} prefix
     * @return {boolean}
     */
    public startsWith(prefix: string): boolean {
        return this.search(prefix, true);
    }
}

const trie = new Trie();

trie.insert('apple');
const a = trie.search('apple'); // returns true
const b = trie.search('app'); // returns false
const c = trie.startsWith('app'); // returns true
trie.insert('app');
const d = trie.search('app'); // returns true

console.log('a', a);
console.log('b', b);
console.log('c', c);
console.log('d', d);
