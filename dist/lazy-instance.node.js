(function (){

/*
 * This callback is used to create and return the instance value to assign to the containing object
 *
 * @callback createProperty
 * @returns {*}
 */

/*
 * Define a property on `ctor.prototype` which generates an instance value when accessed via an instance.
 *
 * @param {Class} ctor
 * @param {string} name
 * @param {createProperty} create
 * @returns {getter}
 */
var lazy;

lazy = function(ctor, name, create) {
  var getter, setter;
  getter = function() {
    var value;
    if ((this === ctor.prototype) || (!this instanceof ctor)) {
      return getter;
    }
    value = create.call(this);
    Object.defineProperty(this, name, {
      configurable: true,
      enumerable: true,
      value: value,
      writable: true
    });
    return value;
  };
  setter = function(value) {
    Object.defineProperty(ctor.prototype, name, {
      configurable: true,
      enumerable: true,
      value: value,
      writable: true
    });
    return value;
  };
  getter.lazy = true;
  Object.defineProperty(ctor.prototype, name, {
    configurable: true,
    enumerable: true,
    get: getter,
    set: setter
  });
  return getter;
};

module.exports = lazy;
})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhenktaW5zdGFuY2UuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7QUFPQTs7Ozs7Ozs7QUFQQSxJQUFBOztBQWVBLElBQUEsR0FBTyxTQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsTUFBYjtBQUNMLE1BQUE7RUFBQSxNQUFBLEdBQVMsU0FBQTtBQUNQLFFBQUE7SUFBQSxJQUFHLENBQUMsSUFBQSxLQUFLLElBQUksQ0FBQyxTQUFYLENBQUEsSUFBeUIsQ0FBQyxDQUFJLElBQUosWUFBaUIsSUFBbEIsQ0FBNUI7QUFDRSxhQUFPLE9BRFQ7O0lBR0EsS0FBQSxHQUFRLE1BQU0sQ0FBQyxJQUFQLENBQVksSUFBWjtJQUVSLE1BQU0sQ0FBQyxjQUFQLENBQXNCLElBQXRCLEVBQXlCLElBQXpCLEVBQStCO01BQzdCLFlBQUEsRUFBYyxJQURlO01BRTdCLFVBQUEsRUFBWSxJQUZpQjtNQUc3QixLQUFBLEVBQU8sS0FIc0I7TUFJN0IsUUFBQSxFQUFVLElBSm1CO0tBQS9CO0FBT0EsV0FBTztFQWJBO0VBZVQsTUFBQSxHQUFTLFNBQUMsS0FBRDtJQUNQLE1BQU0sQ0FBQyxjQUFQLENBQXNCLElBQUksQ0FBQyxTQUEzQixFQUFzQyxJQUF0QyxFQUE0QztNQUMxQyxZQUFBLEVBQWMsSUFENEI7TUFFMUMsVUFBQSxFQUFZLElBRjhCO01BRzFDLEtBQUEsRUFBTyxLQUhtQztNQUkxQyxRQUFBLEVBQVUsSUFKZ0M7S0FBNUM7QUFNQSxXQUFPO0VBUEE7RUFTVCxNQUFNLENBQUMsSUFBUCxHQUFjO0VBRWQsTUFBTSxDQUFDLGNBQVAsQ0FBc0IsSUFBSSxDQUFDLFNBQTNCLEVBQXNDLElBQXRDLEVBQTRDO0lBQzFDLFlBQUEsRUFBYyxJQUQ0QjtJQUUxQyxVQUFBLEVBQVksSUFGOEI7SUFHMUMsR0FBQSxFQUFLLE1BSHFDO0lBSTFDLEdBQUEsRUFBSyxNQUpxQztHQUE1QztBQU9BLFNBQU87QUFsQ0YiLCJmaWxlIjoibGF6eS1pbnN0YW5jZS5ub2RlLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiIyMjXHJcbiMgVGhpcyBjYWxsYmFjayBpcyB1c2VkIHRvIGNyZWF0ZSBhbmQgcmV0dXJuIHRoZSBpbnN0YW5jZSB2YWx1ZSB0byBhc3NpZ24gdG8gdGhlIGNvbnRhaW5pbmcgb2JqZWN0XHJcbiNcclxuIyBAY2FsbGJhY2sgY3JlYXRlUHJvcGVydHlcclxuIyBAcmV0dXJucyB7Kn1cclxuIyMjXHJcblxyXG4jIyNcclxuIyBEZWZpbmUgYSBwcm9wZXJ0eSBvbiBgY3Rvci5wcm90b3R5cGVgIHdoaWNoIGdlbmVyYXRlcyBhbiBpbnN0YW5jZSB2YWx1ZSB3aGVuIGFjY2Vzc2VkIHZpYSBhbiBpbnN0YW5jZS5cclxuI1xyXG4jIEBwYXJhbSB7Q2xhc3N9IGN0b3JcclxuIyBAcGFyYW0ge3N0cmluZ30gbmFtZVxyXG4jIEBwYXJhbSB7Y3JlYXRlUHJvcGVydHl9IGNyZWF0ZVxyXG4jIEByZXR1cm5zIHtnZXR0ZXJ9XHJcbiMjI1xyXG5sYXp5ID0gKGN0b3IsIG5hbWUsIGNyZWF0ZSkgLT5cclxuICBnZXR0ZXIgPSAoKSAtPlxyXG4gICAgaWYgKEAgPT0gY3Rvci5wcm90b3R5cGUpIG9yIChub3QgQCBpbnN0YW5jZW9mIGN0b3IpXHJcbiAgICAgIHJldHVybiBnZXR0ZXJcclxuXHJcbiAgICB2YWx1ZSA9IGNyZWF0ZS5jYWxsKEApXHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEAsIG5hbWUsIHtcclxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICAgIHdyaXRhYmxlOiB0cnVlXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiB2YWx1ZVxyXG5cclxuICBzZXR0ZXIgPSAodmFsdWUpIC0+XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3Rvci5wcm90b3R5cGUsIG5hbWUsIHtcclxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICAgIHdyaXRhYmxlOiB0cnVlXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHZhbHVlXHJcblxyXG4gIGdldHRlci5sYXp5ID0gdHJ1ZVxyXG5cclxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3Rvci5wcm90b3R5cGUsIG5hbWUsIHtcclxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICBnZXQ6IGdldHRlcixcclxuICAgIHNldDogc2V0dGVyXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIGdldHRlclxyXG4iXX0=