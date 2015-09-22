;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.lazyInstance = factory();
  }
}(this, function() {

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhenktaW5zdGFuY2UuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztBQU9BOzs7Ozs7OztBQVBBLElBQUE7O0FBZUEsSUFBQSxHQUFPLFNBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxNQUFiO0FBQ0wsTUFBQTtFQUFBLE1BQUEsR0FBUyxTQUFBO0FBQ1AsUUFBQTtJQUFBLElBQUcsQ0FBQyxJQUFBLEtBQUssSUFBSSxDQUFDLFNBQVgsQ0FBQSxJQUF5QixDQUFDLENBQUksSUFBSixZQUFpQixJQUFsQixDQUE1QjtBQUNFLGFBQU8sT0FEVDs7SUFHQSxLQUFBLEdBQVEsTUFBTSxDQUFDLElBQVAsQ0FBWSxJQUFaO0lBRVIsTUFBTSxDQUFDLGNBQVAsQ0FBc0IsSUFBdEIsRUFBeUIsSUFBekIsRUFBK0I7TUFDN0IsWUFBQSxFQUFjLElBRGU7TUFFN0IsVUFBQSxFQUFZLElBRmlCO01BRzdCLEtBQUEsRUFBTyxLQUhzQjtNQUk3QixRQUFBLEVBQVUsSUFKbUI7S0FBL0I7QUFPQSxXQUFPO0VBYkE7RUFlVCxNQUFBLEdBQVMsU0FBQyxLQUFEO0lBQ1AsTUFBTSxDQUFDLGNBQVAsQ0FBc0IsSUFBSSxDQUFDLFNBQTNCLEVBQXNDLElBQXRDLEVBQTRDO01BQzFDLFlBQUEsRUFBYyxJQUQ0QjtNQUUxQyxVQUFBLEVBQVksSUFGOEI7TUFHMUMsS0FBQSxFQUFPLEtBSG1DO01BSTFDLFFBQUEsRUFBVSxJQUpnQztLQUE1QztBQU1BLFdBQU87RUFQQTtFQVNULE1BQU0sQ0FBQyxJQUFQLEdBQWM7RUFFZCxNQUFNLENBQUMsY0FBUCxDQUFzQixJQUFJLENBQUMsU0FBM0IsRUFBc0MsSUFBdEMsRUFBNEM7SUFDMUMsWUFBQSxFQUFjLElBRDRCO0lBRTFDLFVBQUEsRUFBWSxJQUY4QjtJQUcxQyxHQUFBLEVBQUssTUFIcUM7SUFJMUMsR0FBQSxFQUFLLE1BSnFDO0dBQTVDO0FBT0EsU0FBTztBQWxDRiIsImZpbGUiOiJsYXp5LWluc3RhbmNlLnVtZC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIiMjI1xyXG4jIFRoaXMgY2FsbGJhY2sgaXMgdXNlZCB0byBjcmVhdGUgYW5kIHJldHVybiB0aGUgaW5zdGFuY2UgdmFsdWUgdG8gYXNzaWduIHRvIHRoZSBjb250YWluaW5nIG9iamVjdFxyXG4jXHJcbiMgQGNhbGxiYWNrIGNyZWF0ZVByb3BlcnR5XHJcbiMgQHJldHVybnMgeyp9XHJcbiMjI1xyXG5cclxuIyMjXHJcbiMgRGVmaW5lIGEgcHJvcGVydHkgb24gYGN0b3IucHJvdG90eXBlYCB3aGljaCBnZW5lcmF0ZXMgYW4gaW5zdGFuY2UgdmFsdWUgd2hlbiBhY2Nlc3NlZCB2aWEgYW4gaW5zdGFuY2UuXHJcbiNcclxuIyBAcGFyYW0ge0NsYXNzfSBjdG9yXHJcbiMgQHBhcmFtIHtzdHJpbmd9IG5hbWVcclxuIyBAcGFyYW0ge2NyZWF0ZVByb3BlcnR5fSBjcmVhdGVcclxuIyBAcmV0dXJucyB7Z2V0dGVyfVxyXG4jIyNcclxubGF6eSA9IChjdG9yLCBuYW1lLCBjcmVhdGUpIC0+XHJcbiAgZ2V0dGVyID0gKCkgLT5cclxuICAgIGlmIChAID09IGN0b3IucHJvdG90eXBlKSBvciAobm90IEAgaW5zdGFuY2VvZiBjdG9yKVxyXG4gICAgICByZXR1cm4gZ2V0dGVyXHJcblxyXG4gICAgdmFsdWUgPSBjcmVhdGUuY2FsbChAKVxyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShALCBuYW1lLCB7XHJcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICB3cml0YWJsZTogdHJ1ZVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gdmFsdWVcclxuXHJcbiAgc2V0dGVyID0gKHZhbHVlKSAtPlxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGN0b3IucHJvdG90eXBlLCBuYW1lLCB7XHJcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICB3cml0YWJsZTogdHJ1ZVxyXG4gICAgfSlcclxuICAgIHJldHVybiB2YWx1ZVxyXG5cclxuICBnZXR0ZXIubGF6eSA9IHRydWVcclxuXHJcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGN0b3IucHJvdG90eXBlLCBuYW1lLCB7XHJcbiAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgZ2V0OiBnZXR0ZXIsXHJcbiAgICBzZXQ6IHNldHRlclxyXG4gIH0pXHJcblxyXG4gIHJldHVybiBnZXR0ZXJcclxuIl19