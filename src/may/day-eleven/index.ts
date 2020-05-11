/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
export const floodFill = function (image: number[][], sr: number, sc: number, newColor: number, startPixel = image[sr][sc]): number[][] {
    // Exchange Start and handle exception
    if (sr < 0 || sc < 0 || sr >= image.length || sc >= image[sr].length || image[sr][sc] !== startPixel || image[sr][sc] === newColor) return image;

    // Exchange Pixel
    image[sr][sc] = newColor;
    // check up down left right
    floodFill(image, sr - 1, sc, newColor, startPixel);
    floodFill(image, sr + 1, sc, newColor, startPixel);
    floodFill(image, sr, sc - 1, newColor, startPixel);
    floodFill(image, sr, sc + 1, newColor, startPixel);

    return image;
};

const a = floodFill(
    [
        [1, 1, 1],
        [1, 1, 0],
        [1, 0, 1],
    ],
    1,
    1,
    2,
);

const b = floodFill(
    [
        [0, 0, 0],
        [0, 0, 0],
    ],
    0,
    0,
    2,
);

console.log('a', a);
console.log('b', b);
