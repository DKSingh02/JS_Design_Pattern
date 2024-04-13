var Calculator = (function() {
    let result = 0;
  
    function add(a, b) {
      result = a + b;
    }
  
    function subtract(a, b) {
      result = a - b;
    }
  
    function getResult() {
      return result;
    }
  
    return {
      add: add,
      subtract: subtract,
      getResult: getResult
    };
  })();
    