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
