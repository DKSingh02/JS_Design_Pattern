// Define a module using an IIFE (Immediately Invoked Function Expression)
var Calculator = (function() {
    // Private variables and methods
    var result = 0;
  
    function add(a, b) {
      result = a + b;
    }
  
    function subtract(a, b) {
      result = a - b;
    }
  
    // Public API
    return {
      // Public methods
      add: add,
      subtract: subtract,
      getResult: function() {
        return result;
      }
    };
  })();
  