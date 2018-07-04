export default class HashTable {
    private M: number;
    private hashtables: any[];
    private size: number;
    private readonly upperTol: number = 10;//每个map储存的最大容量
    private readonly lowerTol: number = 2;//每个map储存的最小容量
    private readonly capacity = [53, 97, 193, 389, 769, 1543, 3079, 6151, 12289, 24593,
        49157, 98317, 196613, 393241, 786433, 1572869, 3145739, 6291469,
        12582917, 25165843, 50331653, 100663319, 201326611, 402653189, 805306457, 1610612741];
    private capacityIndex: number = 0;
    // 得到字符串的hashcode
    private getHashCode (str: string): number {
        let hash = 0;
        let B = 31;
        for (let s of str) {
            hash += hash * B + s.charCodeAt(0);
        }

        return hash;
    }
    // 哈希函数
    private hash (hash: number) {
        return hash % this.M;
    }
    // 扩容哈希表的大小，使得操作的复杂度接近O(1)
    private resize (newM: number): void {
        // let newHashtables = new Array(newM).fill(new Map());
        let newHashtables = new Array(newM);
        for (let i = 0; i < newHashtables.length; i++) {
            newHashtables[i] = {};
        }
        this.M = newM;
        for (let map of this.hashtables) {
            for (let [key, value] of map) {
                let m = newHashtables[this.hash(this.getHashCode(key))];
                m.set(key, value);
            }
        }
        this.hashtables = newHashtables;
    }
    constructor () {
        this.M = this.capacity[this.capacityIndex];
        this.size = 0;
        this.hashtables = new Array(this.M);
        for (let i = 0; i < this.hashtables.length; i++) {
            this.hashtables[i] = {};
        }
    }
    getSize () {
        return this.size;
    }
    // 添加key对应的value
    add (key: string, value): void {
        let hash = this.hash(this.getHashCode(key));
        let map = this.hashtables[hash];
        if (map[key]) {
            // map.set(key, value);
            map[key] = value;
        } else {
            // map.set(key, value);
            map[key] = value;
            this.size++;
            if (this.size >= this.upperTol * this.M && this.capacityIndex + 1 < this.capacity.length) {
                this.capacityIndex++;
                this.resize(this.capacity[this.capacityIndex]);
            }
        }
    }
    // 移除key对应value
    remove (key: string) {
        let hash = this.hash(this.getHashCode(key));
        let map = this.hashtables[hash];
        let ret = '';
        if (map[key]) {
            // ret = map.get(key);
            ret = map[key];
            // map.delete(key);
            delete map[key];
            this.size--;
            if (this.size < this.lowerTol * this.M && this.capacityIndex > 0) {
                this.capacityIndex--;
                this.resize(this.capacity[this.capacityIndex]);
            }
        }

        return ret;
    }
    // 查找key的键是否存在
    containsKey (key: string) {
        let hash = this.hash(this.getHashCode(key));
        let map = this.hashtables[hash];
        return map[key] !== undefined;
    }
    // 通过key得到value
    get (key: string) {
        let hash = this.hash(this.getHashCode(key));
        let map = this.hashtables[hash];

        return map[key];
    }
}