const json2xls = require('json2xls');
const fs = require('fs-extra');
const workerData: IResult[] = require('./workcard.json').Data;
const testData = require('./test.json');

interface IResult {
    [key: string]: any;
}

const transformData = (data) => {
    let mappingArr: IResult[] = [];

    data.forEach((resultObj) => {
        let mappingObj: IResult = {};
        for (let item in resultObj) {
            if (Array.isArray(resultObj[item])) {
                for (let i = 0; i < resultObj[item].length; i++) {
                    mappingObj[`${item}_${i}`] = resultObj[item][i];
                }
            } else {
                mappingObj[item] = resultObj[item];
            }
        }

        mappingArr.push(mappingObj);
    });

    return mappingArr;
};

const cTest = async (fileName: string): Promise<void> => {
    try {
        let xls = json2xls(transformData(testData));
        await fs.writeFileSync(`${fileName}.xlsx`, xls, 'binary');
    } catch (error) {
        throw new Error(error);
    }
};

cTest('new3');
