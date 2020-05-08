import fetch from 'node-fetch';

let images = ['https://stackoverflow.com', 'https://stackoverflow.com', 'https://stackoverflow.com', 'https://stackoverflow.com', 'https://stackoverflow.com', 'https://stackoverflow.com', 'https://stackoverflow.com', 'https://stackoverflow.com', 'https://stackoverflow.com', 'https://stackoverflow.com'];

let concurrency = 5;

// Array(concurrency)
//     .fill(images.entries())
//     .map(async (cursor) => {
//         for (let [index, url] of cursor) {
//             console.log('Get Image: ', index, url);
//             let i = await fetch(url).then((res) => res.text());
//             console.log('i: ', index, i.slice(0, 100));
//         }
//     });

const requestOptions = {
    sendByOne: (images) => {
        setTimeout(async () => {
            for (let i: number = 0; i < images.length; i += 1) {
                let _images = images.slice(i, i + 1);

                console.log('batch image start: ', i);

                await Promise.all(
                    _images.map(async (value, index, array) => {
                        console.log('image start: ', index + i);
                        await fetch(value).then((res) => res.text());
                        console.log('image end: ', index + i);
                    }),
                );

                console.log('batch image end: ', i);
            }
        }, 0);
    },

    sendByFive: (images) => {
        setTimeout(async () => {
            for (let i: number = 0; i < images.length; i += 5) {
                let _images = images.slice(i, i + 5);

                console.log('batch image start: ', i);

                await Promise.all(
                    _images.map(async (value, index, array) => {
                        console.log('image start: ', index + i);
                        await fetch(value).then((res) => res.text());
                        console.log('image end: ', index + i);
                    }),
                );

                console.log('batch image end: ', i);
            }
        }, 0);
    },
};

// requestOptions.sendByOne(images);
// requestOptions.sendByFive(images);

interface IGroup {
    objectId: string;
    name: string;
}

interface IPerson {
    personId: string;
    personInfo: IPersonInfo;
}

interface IPersonInfo {
    objectId?: string;
    name: string;
    employeeId?: string;
    position?: string;
    contactNumber?: string;
    email?: string;
    card?: string;
    remark?: string;
    password?: string;
    groups?: IGroup[];
    engineId?: string;
    expiredDate?: Date | String;
}

function convertToMultiQuery(IPerson: IPerson[] | IPerson) {
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

    return query;
}

const data1 = convertToMultiQuery({ personId: '12', personInfo: { name: 'test' } });
const data2 = convertToMultiQuery([
    { personId: '12', personInfo: { name: 'test' } },
    { personId: '13', personInfo: { name: 'test' } },
]);

console.log('data1', data1);
console.log('data2', data2);
