(function () {
  const { AsyncArray } = window.Homework;
  const { assert } = chai;

  mocha.setup({
    timeout: '10000',
    ui: 'bdd',
  });

  const check = (input, expected, done) => {
    calcMean(new AsyncArray(input), (mean) => {
      try {
        assert.equal(mean, expected);
        done();
      } catch (err) {
        done(err);
      }
    });
  };

  describe('calcMean', function () {
    it('На входе: [1, 2, 3, 4, 5]. На выходе: 3', function (done) {
      const input = [1, 2, 3, 4, 5];
      const expected = 3;
      check(input, expected, done);
    });

    it('На входе: []. На выходе: 0', function (done) {
      const input = [];
      const expected = 0;
      check(input, expected, done);
    });

    it('На входе: [3]. На выходе: 3', function (done) {
      const input = [3];
      const expected = 3;
      check(input, expected, done);
    });

    it('На входе: [7, 4, 1]. На выходе: 4', function (done) {
      const input = [7, 4, 1];
      const expected = 4;
      check(input, expected, done);
    });

    it('На входе: [3.2, 2.1, 1.5, 1.6]. На выходе: 2.1', function (done) {
      const input = [3.2, 2.1, 1.5, 1.6];
      const expected = 2.1;
      check(input, expected, done);
    });
  });

  mocha.run();
})();
