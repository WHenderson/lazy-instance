;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else {
    root.lazyInstance = factory();
  }
}(this, function () {

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

return lazy;
}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhenktaW5zdGFuY2UuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7QUFPQTs7Ozs7Ozs7QUFQQSxJQUFBOztBQWVBLElBQUEsR0FBTyxTQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsTUFBYjtBQUNMLE1BQUE7RUFBQSxNQUFBLEdBQVMsU0FBQTtBQUNQLFFBQUE7SUFBQSxJQUFHLENBQUMsSUFBQSxLQUFLLElBQUksQ0FBQyxTQUFYLENBQUEsSUFBeUIsQ0FBQyxDQUFJLElBQUosWUFBaUIsSUFBbEIsQ0FBNUI7QUFDRSxhQUFPLE9BRFQ7O0lBR0EsS0FBQSxHQUFRLE1BQU0sQ0FBQyxJQUFQLENBQVksSUFBWjtJQUVSLE1BQU0sQ0FBQyxjQUFQLENBQXNCLElBQXRCLEVBQXlCLElBQXpCLEVBQStCO01BQzdCLFlBQUEsRUFBYyxJQURlO01BRTdCLFVBQUEsRUFBWSxJQUZpQjtNQUc3QixLQUFBLEVBQU8sS0FIc0I7TUFJN0IsUUFBQSxFQUFVLElBSm1CO0tBQS9CO0FBT0EsV0FBTztFQWJBO0VBZVQsTUFBQSxHQUFTLFNBQUMsS0FBRDtJQUNQLE1BQU0sQ0FBQyxjQUFQLENBQXNCLElBQUksQ0FBQyxTQUEzQixFQUFzQyxJQUF0QyxFQUE0QztNQUMxQyxZQUFBLEVBQWMsSUFENEI7TUFFMUMsVUFBQSxFQUFZLElBRjhCO01BRzFDLEtBQUEsRUFBTyxLQUhtQztNQUkxQyxRQUFBLEVBQVUsSUFKZ0M7S0FBNUM7QUFNQSxXQUFPO0VBUEE7RUFTVCxNQUFNLENBQUMsSUFBUCxHQUFjO0VBRWQsTUFBTSxDQUFDLGNBQVAsQ0FBc0IsSUFBSSxDQUFDLFNBQTNCLEVBQXNDLElBQXRDLEVBQTRDO0lBQzFDLFlBQUEsRUFBYyxJQUQ0QjtJQUUxQyxVQUFBLEVBQVksSUFGOEI7SUFHMUMsR0FBQSxFQUFLLE1BSHFDO0lBSTFDLEdBQUEsRUFBSyxNQUpxQztHQUE1QztBQU9BLFNBQU87QUFsQ0YiLCJmaWxlIjoibGF6eS1pbnN0YW5jZS53ZWIuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyIjIyNcclxuIyBUaGlzIGNhbGxiYWNrIGlzIHVzZWQgdG8gY3JlYXRlIGFuZCByZXR1cm4gdGhlIGluc3RhbmNlIHZhbHVlIHRvIGFzc2lnbiB0byB0aGUgY29udGFpbmluZyBvYmplY3RcclxuI1xyXG4jIEBjYWxsYmFjayBjcmVhdGVQcm9wZXJ0eVxyXG4jIEByZXR1cm5zIHsqfVxyXG4jIyNcclxuXHJcbiMjI1xyXG4jIERlZmluZSBhIHByb3BlcnR5IG9uIGBjdG9yLnByb3RvdHlwZWAgd2hpY2ggZ2VuZXJhdGVzIGFuIGluc3RhbmNlIHZhbHVlIHdoZW4gYWNjZXNzZWQgdmlhIGFuIGluc3RhbmNlLlxyXG4jXHJcbiMgQHBhcmFtIHtDbGFzc30gY3RvclxyXG4jIEBwYXJhbSB7c3RyaW5nfSBuYW1lXHJcbiMgQHBhcmFtIHtjcmVhdGVQcm9wZXJ0eX0gY3JlYXRlXHJcbiMgQHJldHVybnMge2dldHRlcn1cclxuIyMjXHJcbmxhenkgPSAoY3RvciwgbmFtZSwgY3JlYXRlKSAtPlxyXG4gIGdldHRlciA9ICgpIC0+XHJcbiAgICBpZiAoQCA9PSBjdG9yLnByb3RvdHlwZSkgb3IgKG5vdCBAIGluc3RhbmNlb2YgY3RvcilcclxuICAgICAgcmV0dXJuIGdldHRlclxyXG5cclxuICAgIHZhbHVlID0gY3JlYXRlLmNhbGwoQClcclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQCwgbmFtZSwge1xyXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgd3JpdGFibGU6IHRydWVcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHZhbHVlXHJcblxyXG4gIHNldHRlciA9ICh2YWx1ZSkgLT5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjdG9yLnByb3RvdHlwZSwgbmFtZSwge1xyXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgd3JpdGFibGU6IHRydWVcclxuICAgIH0pXHJcbiAgICByZXR1cm4gdmFsdWVcclxuXHJcbiAgZ2V0dGVyLmxhenkgPSB0cnVlXHJcblxyXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjdG9yLnByb3RvdHlwZSwgbmFtZSwge1xyXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgIGdldDogZ2V0dGVyLFxyXG4gICAgc2V0OiBzZXR0ZXJcclxuICB9KVxyXG5cclxuICByZXR1cm4gZ2V0dGVyXHJcbiJdfQ==