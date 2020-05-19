var StockSpanner = function () {
    this.values = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price: number): number {
    let count: number = 1;

    while (this.values.legnth > 0 && this.values[this.values.length - 1][0] <= price) {
        count += this.values.pop()[1];
    }
    this.values.push([price, count]);
    return count;
};
