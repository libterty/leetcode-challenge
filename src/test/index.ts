interface Group {
    objectId: number;
    name: string;
}

const test = function (group: Group[] | Group): string {
    const mapping: string[] = Object.keys(group);
    let query: string = '';
    if (mapping[0] === 'objectId') {
        query = `&objectId=${group[mapping[0]]}`;
    } else {
        let i: number = 0;
        while (i < mapping.length) {
            query += `&objectId=${group[i].objectId}`;
            i++;
        }
    }

    return query;
};

const arr = test([
    { objectId: 1, name: 'test' },
    { objectId: 2, name: 'test2' },
]);
const obj = test({ objectId: 1, name: 'test' });

const check = (IPerson) => {
    const mappings: string[] = Object.keys(IPerson);
    let query: string = '';
    if (mappings[0] === 'personId') {
        query = `&objectId=${IPerson[mappings[0]]}`;
    } else {
        let i: number = 0;
        while (i < mappings.length) {
            query += `&objectId=${IPerson[i].personId}`;
            i++;
        }
    }
    console.log('query: ', query);
};

const map: Map<string, number> = new Map(); // Use O(1) time

let i = 0;

let startTimeI = new Date().getUTCMilliseconds();
while (i < 10100) {
    map.set(`key${i}`, i);
    i++;
}
let out = Array.from(map).reduce((obj, [key, val]) => {
    // Map comes with O(n) + Matrix reduce with O(n^2) + Map Write O(1) -->　O(n + n^2 + 1)
    obj[key] = val;
    return obj;
}, {});
let endTimeI = new Date().getUTCMilliseconds();

const map2: object = {}; // Use O(n) time

let j = 0;

let startTimeJ = new Date().getUTCMilliseconds();
while (j < 10100) {
    map2[`key${j}`] = j;
    j++;
}
let endTimeJ = new Date().getUTCMilliseconds();

console.log('map0 time', `${endTimeI - startTimeI}ms`);
console.log('map1 time', `${endTimeJ - startTimeJ}ms`);
