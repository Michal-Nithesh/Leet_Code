/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
const counter = function(init) {
    let value = init;
    return {
      increment: () => ++value,
      decrement: () => --value,
      reset: () => value = init,
    };
};

myCounter = counter(5);
console.log(myCounter.increment());
console.log(myCounter.decrement());
console.log(myCounter.reset());
  
  /**
   * const counter = createCounter(5)
   * counter.increment(); // 6
   * counter.reset(); // 5
   * counter.decrement(); // 4
   */
