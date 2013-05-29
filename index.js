/**
 * @param  {Number} time (in ms)
 * @return {Function}
 */
module.exports = function delay(time) {
  time = time || 10;

  /**
   * @param  {Function} fn  Function that will be called after 'time' ms
   */
  return function(fn) {
    var args = arguments;

    setTimeout(function() {
      fn.apply(this, args);
    }, time);
  };
};