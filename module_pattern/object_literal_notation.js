const Calculator = {
  result: 0,
  add: function (a, b) {
    this.result = a + b;
  },
  subtract: function (a, b) {
    this.result = a - b;
  },
  getResult: function () {
    return this.result;
  },
};
