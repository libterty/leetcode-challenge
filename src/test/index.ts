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

console.log('_arr', arr);
console.log('_obj', obj);
