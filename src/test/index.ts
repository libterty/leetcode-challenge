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

check({ personId: '1231', personInfo: { name: 'resr' } });
check([
    { personId: '1231', personInfo: { name: 'resr' } },
    { personId: '4563', personInfo: { name: 'resr' } },
]);

console.log('sdf', new Date('Tue May 05 2020 17:06:43 GMT+0800'));
