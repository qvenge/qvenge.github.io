Promise._any = function (iterable) {
  return new Promise((resolve, reject) => {
    const errors = [];
    let length = 0;

    for (let item of iterable) {
      const index = length;

      item.then(resolve).catch((err) => {
        errors.splice(index, 0, err);

        if (errors.length === length) {
          reject(errors);
        }
      });

      ++length;
    }
  });
};

Promise._allSettled = function (iterable) {
  return new Promise((resolve) => {
    const result = [];
    let length = 0;

    for (let item of iterable) {
      const index = length;
      item
        .then((value) => result.splice(index, 0, { status: 'fulfilled', value }))
        .catch((reason) => result.splice(index, 0, { status: 'rejected', reason }))
        .finally(() => result.length === length && resolve(result));
      ++length;
    }
  });
};

Promise.prototype._finally = function (onFinally) {
  return this.then(() => onFinally()).catch(() => onFinally());
};
