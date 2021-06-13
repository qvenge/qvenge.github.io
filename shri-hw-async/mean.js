(function () {
  class PromiseArray {
    constructor(asyncArray) {
      this.arr = asyncArray ? asyncArray : new Homework.AsyncArray();
    }

    async get(index) {
      const _index = await Promise.resolve(index);
      return new Promise((resolve) => this.arr.get(_index, resolve));
    }

    push(value) {
      return new Promise((resolve) => this.arr.push(value, resolve));
    }

    length() {
      return new Promise((resolve) => this.arr.length(resolve));
    }

    print() {
      this.arr.print();
    }
  }

  // pormisify function with two arguments
  const promisify = (fn) => async (a, b) => {
    const _a = await Promise.resolve(a);
    const _b = await Promise.resolve(b);
    return new Promise((resolve) => fn(_a, _b, resolve));
  };

  const add = promisify(Homework.add);
  const divide = promisify(Homework.divide);
  const less = promisify(Homework.less);

  const halve = (arr) =>
    new Promise((resolve) => {
      const result = new PromiseArray();
      const length = arr.length();

      const pair = (firstItemIndex) => {
        less(firstItemIndex, length).then((hasItem) => {
          if (!hasItem) return resolve(result);

          const firstValue = arr.get(firstItemIndex);
          const secondItemIndex = add(firstItemIndex, 1);

          less(secondItemIndex, length).then((hasNextItem) => {
            if (!hasNextItem) {
              return result.push(firstValue).then(() => resolve(result));
            }
            const secondValue = arr.get(secondItemIndex);
            const sum = add(firstValue, secondValue);
            const nextItemIndex = add(secondItemIndex, 1);
            result.push(sum).then(() => pair(nextItemIndex));
          });
        });
      };

      pair(0);
    });

  const calcSum = async (arr, length) => {
    const ready = await less(length, 2);

    if (ready) return arr.get(0);

    const halfArr = await halve(arr);
    return calcSum(halfArr, halfArr.length());
  };

  window.calcMean = function (asyncArray, callback) {
    const promiseArray = new PromiseArray(asyncArray);
    promiseArray
      .length()
      .then((length) => (length ? calcSum(promiseArray, length).then((sum) => divide(sum, length)) : 0))
      .then((mean) => callback(mean));
  };
})();
