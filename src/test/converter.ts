const json2xls = require('json2xls');
const fs = require('fs-extra');
const data: any[] = [
    {
        name: 'test1',
        imageSrc: 'file/file/test1.jpg',
        groups: ['groups1', 'groups2'],
    },
    {
        name: 'test2',
        imageSrc: 'file/file/test2.jpg',
        groups: ['groups5', 'groups2'],
    },
    {
        name: 'test3',
        imageSrc: 'file/file/test3.jpg',
        groups: ['groups4', 'groups2'],
    },
    {
        name: 'test4',
        imageSrc: 'file/file/test4.jpg',
        groups: ['groups3', 'groups2'],
    },
    {
        name: 'test5',
        imageSrc: 'file/file/test5.jpg',
        groups: ['groups1', 'groups2'],
    },
];

const cTest = async (): Promise<void> => {
    try {
        let xls = json2xls(data);
        await fs.writeFileSync('new.xlsx', xls, 'binary');
    } catch (error) {
        throw new Error(error);
    }
};

cTest();
