###
# This callback is used to create and return the instance value to assign to the containing object
#
# @callback createProperty
# @returns {*}
###

###
# Define a property on `ctor.prototype` which generates an instance value when accessed via an instance.
#
# @param {Class} ctor
# @param {string} name
# @param {createProperty} create
# @returns {getter}
###
lazy = (ctor, name, create) ->
  getter = () ->
    if (@ == ctor.prototype) or (not @ instanceof ctor)
      return getter

    value = create.call(@)

    Object.defineProperty(@, name, {
      configurable: true,
      enumerable: true,
      value: value,
      writable: true
    })

    return value

  setter = (value) ->
    Object.defineProperty(ctor.prototype, name, {
      configurable: true,
      enumerable: true,
      value: value,
      writable: true
    })
    return value

  getter.lazy = true

  Object.defineProperty(ctor.prototype, name, {
    configurable: true,
    enumerable: true,
    get: getter,
    set: setter
  })

  return getter

module.exports = lazy